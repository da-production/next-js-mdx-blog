import { cn } from '@/lib/utils'
import React from 'react'

interface MaxWidthWrapperProps {
  className?: string
  children: React.ReactNode
}

function MaxWidthWrapper({className,children}:MaxWidthWrapperProps) {
  return (
    <div className={cn('mx-auto max-w-screen-xl w-full my-12 ',className)}>
        {children}
    </div>
  )
}

export default MaxWidthWrapper