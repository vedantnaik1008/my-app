"use client";
import { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { MAX_FREE_COUNTS } from "@/constants";
import { Progress } from "@/components/ui/progress"
import { Button } from "./ui/button";
import { Zap } from "lucide-react";
import { useProModal } from "@/hooks/use-pro-modal";

interface Props{
    apiLimitCount: number;
}

const FreeCounter = ({apiLimitCount = 0}: Props) => {
    const proModal = useProModal() 
    const [mounted, setMounted] = useState(false)

    useEffect(()=> {
        setMounted(true)
    }, [])

    if(!mounted){
        return null
    }
  return (
    <div className="px-3">
      <Card className='bg-white/10 border-0'>
        <CardContent className="py-6">
            <div className="text-center text-sm text-white mb-4 space-y-2">
                <p className="">
                    {apiLimitCount} / {MAX_FREE_COUNTS} Free Generations
                </p>
                <Progress value={apiLimitCount / MAX_FREE_COUNTS * 100} className="h-3"/>
            </div>
            <Button onClick={proModal.onOpen} className="w-full" variant={"premium"}>Upgrade   <Zap className="w-4 h-4 fill-white"/>
            </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default FreeCounter
