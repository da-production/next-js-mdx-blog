import Hero from '@/components/Hero'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import PostCard from '@/components/PostCard'
import {  getPosts } from '@/lib/posts'
import { Post } from '@/lib/type'
import { ArrowDownIcon, ArrowTopRightIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import React from 'react'

async function page(props:any) {
  console.log();
  const posts: Post[] = await getPosts({order:'DESC',category:props.searchParams?.category})
  return (
    <MaxWidthWrapper>
      <div className='grid grid-cols-2 gap-5'>
        {
          !!posts.length && posts.map(post => (
            <PostCard post={post} key={post.slug} />
          ))
        }
      </div>
    </MaxWidthWrapper>
  )
}

export default page

