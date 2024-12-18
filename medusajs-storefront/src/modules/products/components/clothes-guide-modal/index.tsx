"use client"
import { Fragment, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"

export default function SizeGuideModal() {
  const [isOpen, setIsOpen] = useState(false)

  const closeModal = () => setIsOpen(false)
  const openModal = () => setIsOpen(true)

  return (
    <>
      <button
        onClick={openModal}
        className="text-gray-600 underline hover:text-aca-strong-green rounded-md text-left text-base"
      >
        Guía de Talles Prendas
      </button>

      {/* Modal */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-md transform rounded-lg bg-white p-6 shadow-xl transition-all">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                  <span className="sr-only">Cerrar</span>
                  &times;
                </button>

                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Guía de Talles para Prendas de Vestir
                </Dialog.Title>

                <div className="mt-4">
                  <p className="text-sm text-gray-500 mb-4">
                    Consulta las medidas para nuestras prendas:
                  </p>

                  <h4 className="font-semibold text-gray-800">
                    Maxibuzos Animados
                  </h4>
                  <ul className="mt-2 list-disc list-inside text-sm text-gray-500">
                    <li>
                      <strong>Talle S:</strong> 70 cm largo, 54 cm ancho
                    </li>
                    <li>
                      <strong>Talle M/L:</strong> 72 cm largo, 56 cm ancho
                    </li>
                    <li>
                      <strong>Talle XL/XXL:</strong> 82 cm largo, 60 cm ancho
                    </li>
                  </ul>

                  <h4 className="mt-4 font-semibold text-gray-800">
                    Remerones Animados
                  </h4>
                  <ul className="mt-2 list-disc list-inside text-sm text-gray-500">
                    <li>
                      <strong>Talle Único:</strong> 80 cm largo, 56 cm ancho
                    </li>
                  </ul>

                  {/* Advertencia */}
                  <p className="mt-4 text-sm font-semibold text-red-600">
                    Tener en cuenta: Algunos colores pueden variar levemente
                    debido a las condiciones de la fotografía.
                  </p>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
