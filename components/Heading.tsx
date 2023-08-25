import { cn } from '@/lib/utils';
import React from 'react'

interface Props{
    title: string;
    description: string;
    icon: any;
    iconColor?: string;
    bgColor?: string;
}

const Heading = ({title, description, icon: Icon, iconColor, bgColor}: Props) => {
  return (
    <>
      <div className="px-4 lg:px-8 flex items-center gap-x-3 mb-8">
        <div className={cn("p-2 w-fit rounded-md", bgColor)}>
            <Icon className={cn("p-=2 w-fit rounded-md", bgColor)}/>
        </div>
        <div>
            <h2 className="text-3xl font-bold">
                {title}
            </h2>
            <p className="text-sm text-muted-foreground">
                {description}
            </p>
        </div>
    </div>
    </>
  )
}

export default Heading
