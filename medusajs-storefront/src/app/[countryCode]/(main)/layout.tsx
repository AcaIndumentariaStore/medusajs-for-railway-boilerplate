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
      <script
        defer
        src="https://acaindumentariaanalitycs.up.railway.app/script.js"
        data-website-id="074a7895-0a9b-4be0-b083-dec499d40d2b"
      />
      <ChatBotBubble />
      <Nav />
      {props.children}
      <div className="bg-aca-beige">
        <Footer />
      </div>
    </>
  )
}
