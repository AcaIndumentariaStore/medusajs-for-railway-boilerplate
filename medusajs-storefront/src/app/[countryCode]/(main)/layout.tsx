import { Metadata } from "next"

import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"
import ChatBotBubble from "@modules/layout/templates/chat-bot-bubble"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

export default async function PageLayout(props: { children: React.ReactNode }) {
  return (
    <>
      <ChatBotBubble />
      <Nav />
      {props.children}
      <div className="bg-aca-beige">
        <Footer />
      </div>
    </>
  )
}
