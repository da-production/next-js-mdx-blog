import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";



function page(props:any) {
    const result = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    return (
        <MaxWidthWrapper>
            {props.params.slug}
        </MaxWidthWrapper>
    )
}

export default page