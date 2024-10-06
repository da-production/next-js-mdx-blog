"use client"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { RxHamburgerMenu } from 'react-icons/rx'
  
function Drawer() {
  return (
    <>
        <div className="md:hidden flex items-center">
        <Sheet>
        <SheetTrigger>
    
        <RxHamburgerMenu  size={24} />
        </SheetTrigger>
        <SheetContent>
            <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
            </SheetDescription>
            </SheetHeader>
        </SheetContent>
        </Sheet>

        </div>

    </>
  )
}

export default Drawer