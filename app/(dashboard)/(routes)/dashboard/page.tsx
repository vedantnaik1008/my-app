"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Film,VideoIcon,ImageIcon,Music,ArrowRight,MessageSquare } from "lucide-react";
import { useRouter } from "next/navigation";

const tools = [
  
  {label: 'Music Generation',
  icon: Music,
  href: "/music",
  color: "text-emerald-500",
  bgColor: "text-emerald-500/10"
  },
  {label: 'Image Generation',
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-700",
    bgColor: "text-emerald-700/10"
  },
  {label: 'Video Generation',
      icon: VideoIcon,
      href: "/video",
      color: "text-orange-700",
      bgColor: "text-orange-700/10"
  },
  {label: 'Animation Generation',
    icon: Film,
    href: "/animation",
    color: "text-green-700",
    bgColor: "text-green-700/10"
  },

]

const Page = () => {
  const router = useRouter()
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore the power of AI
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Chat with the smartest AI - Experience the power of AI
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool)=>(
          <Card  onClick={()=> router.push(tool.href)} key={tool.href} className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer">
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)}/>
              </div>
              <div className="font-semibold">
                {tool.label}
              </div>
            </div>
            <ArrowRight className="w-5 h-5"/>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Page
