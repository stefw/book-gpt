import React, { useState } from "react"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useCredentialsCookie } from "@/context/credentials-context"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { FileKey } from "lucide-react"

import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function CredentailsPage() {
  const { cookieValue, setAndSaveCookieValue } = useCredentialsCookie()
  const [openaiApiKey, setOpenaiApiKey] = useState(cookieValue.openaiApiKey)
  const [pineconeApiKey, setPineconeApiKey] = useState(
    cookieValue.pineconeApiKey
  )

  const handleOpenaiApiKeyChange = (e) => {
    setOpenaiApiKey(e.target.value)
  }
  const handlePineconeApiKeyChange = (e) => {
    setPineconeApiKey(e.target.value)
  }

  const handleSaveCredentials = () => {
    setAndSaveCookieValue({
      openaiApiKey,
      pineconeApiKey,
    })
  }

  return (
    <Layout>
      <Head>
        <title>Credentials</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
    </Layout>
  )
}
