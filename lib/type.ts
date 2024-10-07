import { z } from "zod";
import { PostSchema } from "./schemas";

export type Post = z.infer<typeof PostSchema> & {
    slug: string;
    content: string;
}

export type Toc = {
    id:string;
    title:string;
}