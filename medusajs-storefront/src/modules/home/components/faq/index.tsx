"use client";
import React, { useState } from "react"

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  const accordionItems = [
    {
      question: "¿Cómo puedo comprar en la web?",
      answer:
        "Comprar en nuestra web es super fácil. Solo tenés que elegir los productos que te gustan, agregarlos al carrito y cuando estés listo, ir a la sección de pago. Ahí podés elegir el medio de pago que más te convenga y listo, ¡tu pedido estará en camino! Si tenés alguna duda, no dudes en escribirnos. ¡Estamos para ayudarte!",
    },
    {
      question: "¿Puedo visitar su showroom?",
      answer:
        "Te invitamos a agendar una cita y conocer nuestro showroom, donde podrás ver de cerca nuestros productos y recibir asesoramiento personalizado. Además, disfrutarás de descuentos exclusivos y promociones especiales disponibles solo para quienes nos visitan.",
    },
    {
      question: "¿Cuáles son los medios de pago disponibles?",
      answer:
        " ¡Tenemos varias opciones para que elijas la que más te convenga! Podés pagar en efectivo al recibir tu pedido, así de simple y sin vueltas. Si preferís transferencia bancaria, te pasamos los datos después de la compra y solo nos enviás el comprobante por WhatsApp. Mercado Pago: Aceptamos tarjetas de crédito (¡hasta 3 cuotas sin interés!), débito, efectivo o dinero en cuenta. Vos decidís cómo te resulta más cómodo pagar.",
    },
    {
      question: "¿Cuánto tiempo tardan en llegar los envíos y cuáles son los costos?",
      answer:
        "Los envíos dentro de CABA y AMBA son rápidos y eficientes: entregamos el mismo día o, a más tardar, al día siguiente, ¡sin costo adicional! Para el resto del país, los despachos se realizan de manera ágil para garantizar que tu pedido llegue lo antes posible. Los costos y tiempos de envío al interior pueden variar según la ubicación.",
    },
    {
      question: "¿Puedo realizar cambios o devoluciones?",
      answer:
        "¡Claro que sí! Si necesitas cambiar un talle o hubo algún problema con tu producto, escribinos por WhatsApp y lo resolvemos rápido y sin complicaciones. Estamos acá para ayudarte.",
    },
  ]

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid md:grid-cols-5 gap-10">
        <div className="flex flex-col items-center justify-center md:items-start md:justify-start text-center md:text-left md:col-span-2">
          <div className="md:max-w-xs">
            <h2 className="text-3xl font-bold md:text-4xl md:leading-tight text-aca-green">
              Preguntas Frecuentes
            </h2>
            <p className="mt-1 text-aca-grey">
              Respuestas a las preguntas más frecuentes.
            </p>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="divide-y divide-gray-200">
            {accordionItems.map((item, index) => (
              <div key={index} className="py-3">
                <button
                  className="flex items-center justify-between w-full text-lg font-semibold text-start text-aca-grey rounded-lg transition hover:text-gray-500 focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                >
                  {item.question}
                  <svg
                    className={`transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
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
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                <div
                  className={`mt-2 text-gray-600 transition-max-height duration-300 overflow-hidden ${
                    activeIndex === index ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQAccordion
