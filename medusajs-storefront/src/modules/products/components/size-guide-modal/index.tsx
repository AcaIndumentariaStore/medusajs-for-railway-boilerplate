"use client"
import { Fragment, useState } from "react"
import Image from "next/image"
import { Dialog, Transition } from "@headlessui/react"

import SizeGuideImage from "../../../../images/SizeGuideImage.png"

export default function SizeGuideModal() {
  const [isOpen, setIsOpen] = useState(false)

  const closeModal = () => setIsOpen(false)
  const openModal = () => setIsOpen(true)

  return (
    <>
      <button
        onClick={openModal}
        className="text-aca-grey underline hover:text-aca-strong-green rounded-md"
      >
        Guía de Talles Calzado
      </button>

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
                  Guía de Talles para Calzado
                </Dialog.Title>

                <div className="mt-4">
                  <p className="text-sm text-gray-500">
                    Para determinar tu talle de calzado:
                  </p>
                  <ul className="mt-2 list-disc list-inside text-sm text-gray-500">
                    <li>
                      Coloca una hoja de papel en el suelo, contra una pared.
                    </li>
                    <li>
                      Sitúa tu pie descalzo sobre la hoja con el talón tocando
                      la pared.
                    </li>
                    <li>Marca la punta del dedo más largo con un lápiz.</li>
                    <li>
                      Mide la distancia entre el borde de la hoja y la marca en
                      centímetros.
                    </li>
                    <li>
                      Usa esta medida para encontrar tu talla en nuestra tabla
                      de talles.
                    </li>
                    <li>
                      La{" "}
                      <span className="font-semibold text-aca-strong-green">
                        tabla de talles
                      </span>{" "}
                      de cada calzado está en la{" "}
                      <span className="font-semibold text-aca-strong-green">
                        última imagen
                      </span>{" "}
                      del carrusel del producto.
                    </li>
                  </ul>

                  {/* Advertencia */}
                  <p className="mt-4 text-sm font-semibold text-red-600">
                    Atención: Algunos colores pueden estar ligeramente
                    distorsionados debido a las fotografías.
                  </p>

                  <div className="mt-6 flex justify-center">
                    <div className="h-72 w-72 bg-gray-100 border border-gray-300 flex items-center justify-center">
                      <Image src={SizeGuideImage} alt="Size Guide calzado" />
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
