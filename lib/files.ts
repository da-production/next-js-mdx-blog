import path from 'path'
import fs from 'fs/promises'

const directory = path.join(process.cwd(),'content/blog')

export async function getFiles({order='DESC',category}:{order:'DESC'|'ASC',category?:string}){
    const files = await fs.readdir(directory)

    const filenames = files.filter(filename => filename.endsWith('.mdx'));

    // If a category is provided, filter filenames based on that category
    const filteredFilenames = category 
    ? filenames.filter(filename => {
        const parts = filename.split('-');
        const categoryPart = parts[parts.length - 1].split('[')[1]?.split(']')[0]; // Extract category from filename
        return categoryPart === category.toLowerCase(); // Compare with the provided category
    })
    : filenames; // If no category, keep all filenames

    const sortFunction = (a: string, b: string) => {
        const numA = parseInt(a.split('-')[0], 10);
        const numB = parseInt(b.split('-')[0], 10);
        return order === 'DESC' ? numB - numA : numA - numB; // Use a single function
    };

    return filteredFilenames.sort(sortFunction);
}
