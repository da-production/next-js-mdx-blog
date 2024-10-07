import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import PostCard from '@/components/PostCard'
import QueryPagination from '@/components/query-pagination'
import TabFilter from '@/components/TabFilter'
import {  getPosts } from '@/lib/posts'
import { Post } from '@/lib/type'
import React from 'react'

const POSTS_PER_PAGE = 6
interface PostPageProps{
  searchParams:{
    page?:string;
    category?:string;
  }
}

async function page({searchParams}:PostPageProps) {

  const posts: Post[] = await getPosts({order:'DESC',category:searchParams?.category})
  
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const displayedPost = posts.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage
  )
  return (
    <MaxWidthWrapper>
      <TabFilter />
      <div className='grid sm:grid-cols-2 grid-cols-1  gap-5 gap-y-10'>
        {
          !!displayedPost.length && displayedPost.map(post => (
            <PostCard post={post} key={post.slug} />
          ))
        }
      </div>
      <QueryPagination totalPages={totalPages} />
    </MaxWidthWrapper>
  )
}

export default page

