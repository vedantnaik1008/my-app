'use client'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Logo from '../public/logo.png'
import { Montserrat } from 'next/font/google'
import { cn } from '@/lib/utils'
import { Settings,Code,Music,VideoIcon,ImageIcon,LayoutDashboard, MessageSquare } from 'lucide-react'
import {usePathname} from 'next/navigation'
import internal from 'stream'
import FreeCounter from './FreeCounter'

const montserrat = Montserrat({
    weight: '600',
    subsets: ['latin'],
})

const routess = [{
        label: 'Dashboard',
        icon: LayoutDashboard,
        href: "/dashboard",
        color: "text-sky-500" ,
        },
        {label: 'Conversation',
        icon: MessageSquare,
        href: "/conversation",
        color: "text-violet-700" ,
        },
        {label: 'Image Generation',
        icon: ImageIcon,
        href: "/image",
        color: "text-pink-700" ,
        },
        {label: 'Video Generation',
        icon: VideoIcon,
        href: "/video",
        color: "text-orange-700",
        },
        {label: 'Music Generation',
        icon: Music,
        href: "/music",
        color: "text-emerald-500",
        },
        {label: 'Animation Generation',
        icon: Code,
        href: "/animation",
        color: "text-green-700",
        },
        {label: 'Settings',
        icon: Settings,
        href: "/settings",
        color: "text-green-700",
    }
]

interface Props{
    apiLimitCount: number;
    isPro: boolean;
}

const Sidebar = ({apiLimitCount = 0, isPro = false}: Props) => {
    const pathname = usePathname()
  return (
    <div className='space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white'>
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className='flex items-center pl-3 mb-14'>
            <div className="relative w-8 h-8 mr-4">
                <Image src={Logo} fill alt='logo'/>
            </div>
            <h1 className={cn("text-2xl font-bold", montserrat.className)}>Genius</h1>
        </Link>
        <div className="space-y-1">
            {routess.map((route)=>(
                <Link key={route.href} href={route.href} className={cn('text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition', pathname === route.href ? "text-white bg-white/10" : "text-zinc-400")}>
                    <div className="flex items-center flex-1">
                        <route.icon className={cn("h-5 w-5 mr-3", route.color)}/>
                        {route.label}
                    </div>
                </Link>
            ))}
        </div>
      </div>
      <FreeCounter isPro={isPro} apiLimitCount={apiLimitCount}/>
    </div>
  )
}

export default Sidebar
