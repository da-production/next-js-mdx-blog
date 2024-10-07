import React, { Suspense } from 'react'
import {MDXRemote} from "next-mdx-remote-client/rsc";
import {rehypePlugin } from './plugins'
function Mdx({children}:{children:string}) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MDXRemote source={children} options={{
        mdxOptions:{
          rehypePlugins:rehypePlugin
        }
      }} />
    </Suspense>
  )
}

export default Mdx