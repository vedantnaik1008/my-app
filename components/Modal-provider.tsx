"use client";

import { useEffect, useState } from "react";
import ProMondal from "./Pro-modal";

export const MondalProvider = () =>{
    const [isMounted, setIsMounted] = useState(false)

    useEffect(()=>{
        setIsMounted(true)
    }, [])

if(!isMounted){
    return null;
}
    return (
        <ProMondal />
    )
}