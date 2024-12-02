"use client"

import { Suspense } from "react"
import Image from "next/image"
import { headers } from "next/headers"
import { listRegions } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import AcaIndumentariaLoco from "../../../../images/AcaIndumentariaLogo.png"

import { ChevronDownIcon } from "@heroicons/react/20/solid"
import {
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
} from "@heroicons/react/24/outline"

import { Fragment, useState } from "react"
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react"
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline"

const navigation = {
  categories: [
    {
      id: "prendas-de-vestir",
      name: "Prendas de Vestir",
      featured: [
        {
            name: "Ultimos Lanzamientos",
            href: "#",
            imageSrc:
              "https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-01.jpg",
            imageAlt:
              "",
          },
          {
            name: "¡En Liquidacion! Hasta -50% OFF",
            href: "#",
            imageSrc:
              "https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-02.jpg",
            imageAlt:
              "",
          },
      ],
      sections: [
        {
          id: "temporada-verano",
          name: "Temporada Verano",
          items: [
            { name: "Camisones", href: "#" },
            { name: "Vestidos", href: "#" },
            { name: "Remerones", href: "#" },
          ],
        },
        {
          id: "temporada-invierno",
          name: "Temporada Invierno",
          items: [
            { name: "Buzos Frizados", href: "#" },
            { name: "Buzos Peluche", href: "#" },
            { name: "Sacos de Lana", href: "#" },
          ],
        },
      ],
    },
    {
      id: "calzado",
      name: "Calzado",
      featured: [
        {
            name: "Ultimos Lanzamientos",
            href: "#",
            imageSrc:
              "https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-01.jpg",
            imageAlt:
              "",
          },
          {
            name: "¡En Liquidacion! Hasta -50% OFF",
            href: "#",
            imageSrc:
              "https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-02.jpg",
            imageAlt:
              "",
          },
      ],
      sections: [
        {
          id: "temporada-invierno",
          name: "Temporada Invierno",
          items: [
            { name: "Pantu Botas", href: "#" },
            { name: "Botas Sienna", href: "#" },
            { name: "Zuecos Birk", href: "#" },
          ],
        },
        {
          id: "calzado-y-botas",
          name: "Calzado y Botas de cuero real",
          items: [
            { name: "Borcegos y Botas", href: "#" },
            { name: "Sandalias Españolas", href: "#" },
            { name: "Sandalias Ivoty", href: "#" },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "Inicio", href: "/" },
    { name: "Tienda", href: "#" },
  ],
}

function Index() {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="relative rounded-md py-6 text-black lg:hidden"
      >
        <span className="absolute" />
        <span className="sr-only">Open menu</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="22"
          height="22"
          color="#4b4b4b"
          fill="none"
        >
          <path
            d="M4 5L20 5"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4 12L20 12"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4 19L20 19"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            {/* Links */}
            <TabGroup className="mt-16">
              <div className="border-b border-gray-200">
                <TabList className="-mb-px flex space-x-8 px-4">
                  {navigation.categories.map((category) => (
                    <Tab
                      key={category.name}
                      className="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900 data-[selected]:border-aca-green data-[selected]:text-aca-green"
                    >
                      {category.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
              <TabPanels as={Fragment}>
                {navigation.categories.map((category) => (
                  <TabPanel
                    key={category.name}
                    className="space-y-10 px-4 pb-8 pt-10"
                  >
                    <div className="grid grid-cols-2 gap-x-4">
                      {category.featured.map((item) => (
                        <div key={item.name} className="group relative text-sm">
                          <img
                            alt={item.imageAlt}
                            src={item.imageSrc}
                            className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                          />
                          <a
                            href={item.href}
                            className="mt-6 block font-medium text-gray-900"
                          >
                            <span
                              aria-hidden="true"
                              className="absolute inset-0 z-10"
                            />
                            {item.name}
                          </a>
                          <p aria-hidden="true" className="mt-1">
                            Comprar Ahora
                          </p>
                        </div>
                      ))}
                    </div>
                    {category.sections.map((section) => (
                      <div key={section.name}>
                        <p
                          id={`${category.id}-${section.id}-heading-mobile`}
                          className="font-medium text-gray-900"
                        >
                          {section.name}
                        </p>
                        <ul
                          role="list"
                          aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                          className="mt-6 flex flex-col space-y-6"
                        >
                          {section.items.map((item) => (
                            <li key={item.name} className="flow-root">
                              <a
                                href={item.href}
                                className="-m-2 block p-2 text-gray-500"
                              >
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {navigation.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <a
                    href={page.href}
                    className="-m-2 block p-2 font-medium text-gray-900"
                  >
                    {page.name}
                  </a>
                </div>
              ))}
            </div>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <div className="flow-root">
                <a
                  href="#"
                  className="-m-2 block p-2 font-medium text-gray-900"
                >
                  Iniciar Sesion
                </a>
              </div>
              <div className="flow-root">
                <a
                  href="#"
                  className="-m-2 block p-2 font-medium text-gray-900"
                >
                  Crear Cuenta
                </a>
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  )
}

export default Index
