'use client'
import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Link from 'next/link'
import Image from 'next/image'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
  

const MobileNav = ({user}: MobileNavProps) => {
    const pathname = usePathname();
  return (
    <section className='w-full max-w-[264px]'>
       <Sheet>
  <SheetTrigger>
    <img src='icons/hamburger.svg' alt='menu' width={20} height={20} className='cursor-pointer' />
  </SheetTrigger>
  <SheetContent side='left' className='bg-white border-none'>
  <Link href="/" className='cursor-pointer items-center gap-1 px-4 flex'>
         <Image src="/icons/logo.svg" width={34} height={34} alt='horizon logo' />
         <h2 className='text-26 font-ibm-plex-serif  font-bold text-black-1'>Horizon</h2>
        </Link>
        <div className='mobilenav-sheet'>
          <nav className='flex h-full flex-col gap-6 pt-16 text-white'>
            {sidebarLinks.map((item) => {
              const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
              return (
                <SheetClose asChild key={item.route}>
                  <Link href={item.route} className={cn('sidebar-link', {
                    'bg-bank-gradient': isActive
                  })}>
                    <div className='relative size-6'>
                      <Image src={item.imgURL} alt={item.label} fill
                        className={cn({'brightness-[3] invert-0': isActive})}
                      />
                    </div>
                    <p className={cn('sidebar-label', {
                      '!text-white': isActive
                    })}>{item.label}</p>
                  </Link>
                </SheetClose>
              )
            })}
          </nav>
        </div>
  </SheetContent>
</Sheet>
    </section>
  )
}

export default MobileNav
