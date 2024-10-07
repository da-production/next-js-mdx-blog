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
      <Hero />
      <div className='grid grid-cols-2 gap-5'>
        {
          !!posts.length && posts.map(post => (
            <PostCard post={post} key={post.slug} />
          ))
        }
      </div>
      <div className='flex justify-center'>
        <Link href={'/blog'} className='bg-slate-900 flex gap-2 text-white rounded-full p-3 px-5 text-sm font-bold items-center'>
          <ArrowDownIcon />
          <span >Load More</span>
        </Link>
      </div>
    </MaxWidthWrapper>
  )
}

export default page

