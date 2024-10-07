"use client"
import { categories } from '@/data/categories'
import { cn } from '@/lib/utils'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import React from 'react'
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

function TabFilter() {
    const searchParams = useSearchParams()
    const cat = searchParams.get('category')
    return (
        <ScrollArea  className='w-full border-b'>
            <ul className='flex gap-3'>
                <li className='' >
                    <Link href={`/blog`} className={cn('text-sm text-slate-500 py-2 border-b-2 border-b-transparent block text-nowrap',{'font-bold  border-b-slate-800 text-slate-800': !cat})}>All</Link>
                </li>
                {
                    categories.map((category,index)=> (
                        <li className='' key={index}>
                            <Link href={`/blog/?category=${category}`} className={cn('text-sm text-slate-500 py-2 border-b-2 border-b-transparent block text-nowrap',{'font-bold  border-b-slate-800 text-slate-800': category == cat})}>{category}</Link>
                        </li>
                    ))
                }
            </ul>
            
        <ScrollBar orientation="horizontal" className='-top-1' />
        </ScrollArea>
    )
}

export default TabFilter