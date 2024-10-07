import React from 'react'
import Logo from './Logo'
import {tags} from '@/data/tags'
import Link from 'next/link'
function Hero() {
  return (
    <div className='grid grid-cols-2 gap-5 mb-10'>
        <div className='flex flex-col gap-5 col-span-1'>
            <div className='flex flex-col gap-5'>
                <h1 className='text-5xl font-bold text-slate-900'>WriteSphere</h1>
                <h3 className='text-2xl font-semibold text-slate-900'>Where Ideas Collide</h3>
                <p className='text-slate-600 text-sm font-normal'>WriteSphere is a dynamic space for writers and thinkers alike. Post your work, engage with fellow creatives, and explore a multitude of topics—from art and culture to technology and beyond.</p>
            </div>
            <div className='fex flex-nowrap relative'>
            <input className='border w-full p-3 px-5 rounded-full text-slate-800 text-sm text-bold placeholder:font-normal' type="text" placeholder='Enter your email' />
            <button className=' bg-black text-white rounded-full p-3 px-5 text-sm absolute top-0 right-0'>Subscribe</button>
            </div>
        </div>
        <div className='col-span-1'>
            <div className='flex flex-wrap gap-2'>
                {
                    tags.map((tag,i)=>(
                        <Link href={`blog/?category=${tag}`} className='text-xs bg-black text-white rounded-full p-1.5 px-3 ' key={i}>{tag}</Link>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Hero