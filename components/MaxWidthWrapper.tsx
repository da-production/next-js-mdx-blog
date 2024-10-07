import { cn } from '@/lib/utils'
import React from 'react'

interface MaxWidthWrapperProps {
  className?: string
  children: React.ReactNode
}

function MaxWidthWrapper({className,children}:MaxWidthWrapperProps) {
  return (
    <div className={cn('mx-auto max-w-screen-lg w-full my-12 relative z-0 flex flex-col gap-5',className)}>
        {children}
    </div>
  )
}

export default MaxWidthWrapper