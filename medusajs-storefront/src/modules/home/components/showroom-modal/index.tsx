"use client"
import React, { useEffect, useState } from "react"
import { BlurFade } from "@modules/magic-ui/Blur-fade"
import { AiOutlineWhatsApp } from "react-icons/ai"

function Index() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Abre el modal automáticamente al cargar la página
    setIsOpen(true)
  }, [])

  const closeModal = () => {
    setIsOpen(false)
  }

  const whatsappMessage = encodeURIComponent(
    "Hola, me gustaría agendar una cita para visitar su showroom y ver los productos presencialmente!"
  )

  return (
    <div
      id="hs-subscription-with-image"
      className={`fixed inset-0 z-[80] ${
        isOpen ? "flex" : "hidden"
      } items-center justify-center bg-black/50`}
      role="dialog"
      tabIndex={-1}
      aria-labelledby="hs-subscription-with-image-label"
    >
      <div className="bg-white shadow-lg rounded-lg max-w-lg lg:max-w-xl w-full mx-3 sm:mx-auto relative">
        <div className="absolute top-2 right-2">
          <button
            type="button"
            className="inline-flex justify-center items-center w-8 h-8 text-sm font-semibold rounded-lg border border-transparent bg-gray-100 hover:bg-gray-200"
            aria-label="Close"
            onClick={closeModal}
          >
            <span className="sr-only">Close</span>
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        <div className="aspect-w-16 aspect-h-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.1681998177173!2d-58.56103061827964!3d-34.67570413203942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc62edbd0378b%3A0xab24dc8bba83da11!2sEntre%20R%C3%ADos%202969%2C%20B1754%20San%20Justo%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1733398590650!5m2!1ses-419!2sar"
            width="600"
            height="300"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full rounded-t-md"
          ></iframe>
        </div>

        <BlurFade className="p-6 sm:p-10 text-center">
          <h3
            id="hs-subscription-with-image-label"
            className="mb-2 text-2xl font-bold text-gray-800"
          >
            ¡Inauguramos nuestro Showroom! 🎉
          </h3>
          <p className="text-gray-500">
            Te invitamos a conocer nuestro nuevo espacio. Nos encontramos en{" "}
            <strong>Entre Ríos 2969, San Justo</strong>.
          </p>
          <p className="mt-2 text-gray-500">
            <strong>Horarios de atención:</strong> Todos los dias de la semana, con horario a coordinar.
          </p>

          <div className="mt-6 flex flex-row items-center justify-center">
            <a
              className="flex flex-row items-center space-x-2 py-3 px-5 text-base font-medium rounded-md bg-aca-green text-white hover:bg-aca-strong-green"
              href={`https://wa.me/5491169407581?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineWhatsApp className="text-xl"/>
              <p>Agendar cita</p>
            </a>
            <button
              type="button"
              className="py-2 px-4 text-sm font-semibold text-aca-green hover:text-aca-strong-green"
              onClick={closeModal}
            >
              Cerrar
            </button>
          </div>
        </BlurFade>
      </div>
    </div>
  )
}

export default Index
