import path from 'path'
import fs from 'fs/promises'
import matter from "gray-matter"; 
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

//
import { PostSchema } from './schemas';
import { Post, Toc } from './type';
import { getFiles } from './files';


const directory = path.join(process.cwd(),'content/blog')

export async function getPosts({order='DESC',category,limit=null}:{order:'DESC'|'ASC',category?:string,limit:number|null}){
    const filenames = await getFiles({order,category});
    const posts: Post[] = [];
    for await(const filename of filenames){
        const fullPath = path.join(directory,filename);

        const fileContent = await fs.readFile(fullPath,'utf-8');

        const formatter = matter(fileContent);

        // Validate the front matter data against the PostSchema
        const safeData = PostSchema.safeParse(formatter.data);
        if (!safeData.success) {
            // Log an error if validation fails
            console.log(`Some error parsing ${filename}`);
            // Log each validation issue
            safeData.error.issues.forEach(i => {
                console.error(`   - ${i.path.join(" -> ")}: ${i.message}`);
            });
            continue; // Skip to the next file if there's an error
        }

        // Skip the post if it is not published
        if (!safeData.data.published) {
            continue;
        }

        // Push the validated post data into the posts array
        posts.push({
            ...safeData.data, // Spread the validated data
            slug: filename.replace(/^\d+-/, '').replace(".mdx", "").replace(/-\[.*\]$/, ''), // Create a slug by removing leading numbers and the file extension
            content: formatter.content // Include the content of the post
        });

        // Stop processing if we have collected 6 posts
        if(!!limit){
            if (posts.length >= 6) {
                break; // Exit the loop when we have enough posts
            }
        }
        

    }

    return posts;

}

export async function paginate({current=1,posts,per_page=4}:{current:number,posts:Post[],per_page?:number}){
    
    const currentPage = current;
    const totalPages = Math.ceil(posts.length / per_page);
    const displayedPost = posts.slice(
        per_page * (currentPage - 1),
        per_page * currentPage
    )
    return [currentPage,totalPages,displayedPost];
}

// Function to get a single post by its slug
const _getPost = async (slug: string) => {
    // Retrieve all posts
    const posts = await getPosts({order:'DESC'});
    // Find and return the post that matches the given slug
    return posts.find(p => p.slug === slug);
}

export const getPost = async (slug: string) => {
    const post = await _getPost(slug);
    if(!!post){
        const processor = unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeStringify)
        const content = (await processor.process(post.content)).toString()
        return [post,content];
    }
    return [null,null];
}

export const getTOC = async (htmlContent:string|null) => {
    const selectors = "h1, h2, h3, h4, h5, h6"
    const headings: Toc[] = []
    if(!!htmlContent){
        const nodeTemp = document.createElement('div');
        nodeTemp.innerHTML = htmlContent;
        const headingsSelector = nodeTemp.querySelectorAll(selectors)
        headingsSelector.forEach((h,index)=>{
            const id = h.id || `toc-heading-${index}`;
            const title = (h as HTMLElement).innerText;
            headings.push({
                id,
                title
            });
        })
    }
    return headings;
}