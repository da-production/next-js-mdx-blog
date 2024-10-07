import { z } from "zod"

export const PostSchema = z.object({
    title: z.string().min(1).max(75),
    image: z.string(),
    description: z.string(),
    author: z.string(),
    category: z.string(),
    publishedAt: z.coerce.string(),
    published: z.boolean().default(false)
})