"use client"

import { useEffect } from "react"
import {Crisp} from "crisp-sdk-web"

const CrispChat = () => {
    useEffect(()=> {
        Crisp.configure("2366ce05-4d19-4bfa-82cb-6d88fde1313b")
    }, [])

  return null
}

export default CrispChat
