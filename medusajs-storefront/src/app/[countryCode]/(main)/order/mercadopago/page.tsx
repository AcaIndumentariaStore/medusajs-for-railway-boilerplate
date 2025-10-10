"use client"

import React, { useEffect } from "react"
import { Heading } from "@medusajs/ui"
import AutoConfetti from "@modules/magic-ui/Auto-Confetti"

function Page() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const message = encodeURIComponent("¡Hola! Acabo de realizar una compra y me gustaría coordinar el envío del producto.");
      const whatsappUrl = `https://wa.me/+5491169407581?text=${message}`;
      window.location.href = whatsappUrl;
    }, 3000); // 3 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-neutral-50">
      <div className="p-6 min-h-[calc(100vh-64px)]">
        <div className="bg-white border border-neutral-100 rounded-md content-container flex flex-col justify-center items-center gap-y-10 max-w-4xl h-full w-full">
          <div className="flex flex-col gap-4 max-w-4xl h-full bg-white w-full py-10 md:px-6">
            <Heading
              level="h1"
              className="flex flex-col gap-y-3 text-ui-fg-base text-3xl mb-4"
            >
              <span>¡Muchas gracias por tu compra!</span>
              <span>Su pedido se realizó exitosamente. 🎉</span>
            </Heading>
            <div className="border-y ">
              <div className="flex flex-col justify-start items-start py-4">
                <span className="text-ui-fg-subtle text-sm">
                  Para coordinar el envio del producto, por favor contactanos por WhatsApp al +54 9 11 6940-7581 o hace click en el siguiente boton.
                </span>
                <a href="https://wa.me/+5491169407581" className="text-ui-fg-subtle text-sm">
                  <button className="bg-aca-green hover:bg-aca-strong-green text-white p-2 rounded-md mt-4">
                    Contactar por WhatsApp
                  </button>
                </a>
              </div>
            </div>
            <div className="absolute inset-0 z-50 pointer-events-none">
              <AutoConfetti />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
