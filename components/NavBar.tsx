import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'
import ModeToggle from './ModeToggle'
import Drawer from './Drawer'
import Logo from './Logo'


function NavBar() {
    return (
        <nav className='h-16  z-50 sticky bg-background/60 backdrop-blur top-0 border-b px-8  '>
            <div className='max-w-screen-lg mx-auto h-full gap-5  flex items-center justify-between'>
                <div className='font-bold text-xl'>
                    <Logo />
                </div>
                <ul className='hidden md:flex w-full justify-start gap-5 items-center'>
                    <li>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link href={'/blog'}>Blog</Link>
                    </li>
                    <li>
                        <Link href={'/contact'}>Contact</Link>
                    </li>
                </ul>
                <div className='flex items-center gap-4'>
                    <Link href={'/login'} className={buttonVariants({variant:'outline'})}>Login</Link>
                    <Link href={'/login'} className={buttonVariants({variant:'default'})}>Sign up</Link>
                    <ModeToggle />
                    <Drawer />
                </div>
            </div>
            
        </nav>
    )
}

export default NavBar