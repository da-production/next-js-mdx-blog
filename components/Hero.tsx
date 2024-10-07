import React from 'react'
import Logo from './Logo'
import {tags} from '@/data/tags'
import Link from 'next/link'
import { categories } from '@/data/categories'
function Hero() {
  return (
    <div className='grid grid-cols-2 gap-5 mb-10'>
        <div className='flex flex-col gap-5 col-span-1'>
            <div className='flex flex-col gap-5'>
                <h1 className='text-5xl font-bold text-slate-900'>Blogo</h1>
                <h3 className='text-2xl font-semibold text-slate-900'>Empowering Your Tech Journey, <br /> One Blog at a Time!</h3>
                <p className='text-slate-600 text-sm font-normal'>your go-to platform for all things development and technology! Explore insightful articles, expert tips, and vibrant discussions that keep you ahead in the tech world.</p>
            </div>
            <div className='fex flex-nowrap relative'>
            <input className='border w-full p-3 px-5 rounded-full text-slate-800 text-sm text-bold placeholder:font-normal' type="text" placeholder='Enter your email' />
            <button className=' bg-black text-white rounded-full p-3 px-5 text-sm absolute top-0 right-0'>Subscribe</button>
            </div>
        </div>
        <div className='col-span-1'>
            <div className='flex flex-wrap gap-2'>
                {
                    categories.map((category,i)=>(
                        <Link href={`blog/?category=${category}`} className='text-xs bg-black text-white rounded-full p-1.5 px-3 ' key={i}>{category}</Link>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Hero