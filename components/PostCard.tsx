import { Post } from '@/lib/type'
import { ArrowTopRightIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import React from 'react'

function PostCard({post}:{post:Post}) {
  return (
    <div  className='flex flex-col gap-5 group'>
        <div className='relative z-0 overflow-hidden h-60 w-full group-hover:shadow-2xl transition-shadow duration-300 '>
        <img src={post.image} alt={post.title} className='h-full w-full object-cover' />
        <div className='absolute flex justify-between bg-black/25 backdrop-blur w-full p-5 group-hover:bottom-0 -bottom-full transition-all duration-300 left-0 border-t   text-white '>
            <div>
            <h1 className='font-bold text-sm '>{post.author}</h1>
            <span className='font- text-xs'>{new Date(post.publishedAt).toLocaleDateString()}</span>
            </div>
            <div className='text-sm font-bold'>{post.category}</div>
        </div>
        </div>

        <Link href={`/blog/${post.slug}`} className='font-semibold text-slate-900 group-hover:underline'>
        {post.title}
        </Link>
        <p className='text-slate-600 text-sm'>
        {post.description}
        </p>
        <Link href={`/blog/${post.slug}`} className='flex gap-2 text-xs font-semibold'>
        <span>Read post</span>
        <ArrowTopRightIcon className='size-4 font-semibold' />
        </Link>
    </div>
  )
}

export default PostCard