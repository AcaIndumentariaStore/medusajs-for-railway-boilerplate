import { Metadata } from "next"
import "styles/globals.css"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="es" data-mode="light">
      <body>
        <main className="relative scrollbar-thin scrollbar-thumb-[#a2d1ad] scrollbar-track-transparent overflow-y-scroll h-screen">{props.children}</main>
      </body>
    </html>
  )
}
