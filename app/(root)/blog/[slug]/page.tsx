import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import Mdx from "@/components/MDX/Index";
import { getPost } from "@/lib/posts"
import { notFound } from "next/navigation";

async function page({params}:{params:{slug:string}}) {
    const [post, content] = await getPost(params.slug);
    if(!post){
        return notFound();
    }
    return (
        <>
            <div className="w-full bg-gray-100 border-b">
                <div className="max-w-screen-lg mx-auto py-8 grid grid-cols-2 gap-5">
                    <div className="col-span-1 h-full flex items-end justify-between">
                        <div className="space-y-2">
                            <p className="text-xs font-bold text-slate-700">{post.author}</p>
                            <p className="text-xs font-bold text-slate-700">{new Date(post.publishedAt).toLocaleDateString()}</p>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-700">{post.category}</p>
                        </div>
                    </div>
                    <div className="h-40 relative top-2/6 flex justify-end col-span-1">
                        <img src={post.image} className="object-cover w-full h-80" alt="" />
                    </div>
                </div>
            </div>
            <MaxWidthWrapper>
                <div className="mt-28">
                    <div className="grid grid-cols-3 gap-10 mt-5">
                        <div className="col-span-2 ">
                            <h1 className="text-slate-800 text-4xl font-semibold">{post.title}</h1>
                            <div className="mt-10 spacep-y-5 content">
                                <Mdx>{post.content}</Mdx>
                            </div>
                        </div>
                        <div className="col-span-1 ">
                            <h3 className="text-lg sticky top-24 font-bold text-salte-800 border-l-4 border-l-slate-800 pl-5">Table of content</h3>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </>
    )
}

export default page