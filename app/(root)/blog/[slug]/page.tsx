import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { getPost, getTOC } from "@/lib/posts";



async function page(props:any) {
    console.log(props);
    const [post, content] = await getPost(props.params.slug)
    return (
        <MaxWidthWrapper>
            {props.params.slug}
        </MaxWidthWrapper>
    )
}

export default page