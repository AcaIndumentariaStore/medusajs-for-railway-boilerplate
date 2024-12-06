"use client"

import { useState } from "react"
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react"
import Image from "next/image"
import { XMarkIcon } from "@heroicons/react/24/outline"
import { FunnelIcon, MinusIcon, PlusIcon } from "@heroicons/react/20/solid"
import Input from "@modules/common/components/input"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default function Example() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const filters = [
    {
      id: "prendas",
      name: "Prendas",
      options: [
        {
          value: "",
          label: "Hombres",
          href: "/prendas/hombres",
        },
        {
          value: "",
          label: "Mujeres",
          href: "/prendas/mujeres",
        },
        {
          value: "",
          label: "Niños",
          href: "/prendas/ninos",
        },
      ],
    },
    {
      id: "calzados",
      name: "Calzados",
      options: [
        {
          value: "Temporada Invierno",
          label: "Temporada Invierno",
          href: "",
          subOptions: [
            { label: "Ver Todos", href: "" },
            { label: "Botas de Tela Acolchonada Sienna con Strass", href: "" },
            { label: "Botas de Tela Acolchonada Sienna", href: "" },
            { label: "Chavitos de Tela Gamuzada", href: "" },
            { label: "Pantubotas Altas Estilo Australiano", href: "" },
            { label: "Pantubotas Cortas", href: "" },
            { label: "Pantubotas Wallabys Sin Pelo", href: "" },
            { label: "Pantubotas Wallabys Con Pelo", href: "" },
            { label: "Zuecos Birken forrados en Corderito Con Piel", href: "" },
          ],
        },
        {
          value: "Calzado para Niños",
          label: "Calzado para Niños",
          href: "",
          subOptions: [
            { label: "Ver Todos", href: "" },
            { label: "Guillerminas Escolares - Pups", href: "" },
            { label: "Zapatillas Escolares - Pups", href: "" },
            { label: "Zapatillas Niños Tela Elastizada Animadas", href: "" },
            { label: "Zapatillas Niños Tela Elastizada Lisas", href: "" },
            { label: "Zapatillas para Niños Animadas", href: "" },
            { label: "Zapatillas para Niños con Velcro", href: "" },
            { label: "Zapatillas para Niños con Cordones", href: "" },
          ],
        },
        {
          value: "Calzado de Tela",
          label: "Calzado de Tela",
          href: "",
          subOptions: [
            { label: "Ver Todos", href: "" },
            { label: "Chatitas de Tela Estilo Waps", href: "" },
            { label: "Panchas de Tela Ultra Eslastizada", href: "" },
            { label: "Zapatillas de Tela con Plataforma", href: "" },
            { label: "Zapatillas de Tela - Julia", href: "" },
            { label: "Zapatillas Guillerminas", href: "" },
            { label: "Zapatillas Soft - Hombres", href: "" },
            { label: "Zapatillas Soft - Mujer", href: "" },
            { label: "Zapatillas Panchas de Tela", href: "" },
            { label: "Zapatillas de Tela - Hombres", href: "" },
            { label: "Zapatillas Tela Elastizada", href: "" },
            { label: "Zuecos de Tela", href: "" },
          ],
        },
        {
          value: "Calzado de Cuero Ecológico",
          label: "Calzado de Cuero Ecológico",
          href: "",
          subOptions: [
            { label: "Ver Todos", href: "" },
            { label: "Sandalias De Cuero Ecologico", href: "" },
            { label: "Sandalias De Cuero Ecologico", href: "" },
            { label: "Sandalias De Cuero Ecologico", href: "" },
            { label: "Sandalias De Cuero Ecologico", href: "" },
            { label: "Sandalias De Cuero Ecologico", href: "" },
            { label: "Sandalias De Cuero Ecologico", href: "" },
            { label: "Sandalias De Cuero Ecologico", href: "" },
            { label: "Zapatillas con Plataforma Tijuana", href: "" },
            { label: "Zapatillas Cuero Ecologico", href: "" },
          ],
        },
        {
          value: "Calzado de Cuero Vacuno",
          label: "Calzado de Cuero Vacuno",
          href: "",
          subOptions: [
            { label: "Ver Todos", href: "" },
            { label: "Borcegos Cuero Vacuno", href: "" },
            { label: "Botas Cuero Vacuno", href: "" },
            { label: "Chatitas Cuero Vacuno", href: "" },
            { label: "Sandalias Cuero Vacuno", href: "" },
            { label: "Sandalias Espanolas", href: "" },
            { label: "Texanas Altas Cuero Vacuno", href: "" },
            { label: "Texanas Cortas Cuero Vacuno", href: "" },
            { label: "Zapatillas Cuero Vacuno Lunita", href: "" },

          ],
        },
        {
          value: "",
          label: "En liquidación",
          href: "/collections/en-liquidacion",
        },
      ],
    },
  ]

  const subCategories = [
    {
      name: "Más Vendidos",
      href: "/collections/mas-vendidos",
      current: false,
    },
    {
      name: "Ofertas",
      href: "/collections/ofertas",
      current: false,
    },
    {
      name: "En liquidación",
      href: "/collections/en-liquidacion",
      current: false,
    },
    {
      name: "Ultimos lanzamientos",
      href: "/store?sortBy=created_at",
      current: false,
    },
    {
      name: "Precio: Bajo -> Alto",
      href: "/store?sortBy=price_asc",
      current: false,
    },
    {
      name: "Precio: Alto -> Bajo",
      href: "/store?sortBy=price_desc",
      current: false,
    },
  ]

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Dialog
          open={mobileFiltersOpen}
          onClose={setMobileFiltersOpen}
          className="relative z-40 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative ml-auto flex h-full w-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
            >
              <div className="flex items-center justify-between px-4 border-t border-neutral-200 mt-12">
                <h2 className="text-lg font-medium text-neutral-800">
                  Filtros
                </h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-neutral-400"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>

              {/* Filters */}
              <form>
                <h3 className="sr-only">Categories</h3>
                <ul
                  role="list"
                  className="px-2 py-3 font-medium text-neutral-800"
                >
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href} className="block px-2 py-3">
                        {category.name}
                      </a>
                    </li>
                  ))}
                </ul>

                {process.env.FEATURE_SEARCH_ENABLED && (
                  <LocalizedClientLink
                    className="hover:text-ui-fg-base"
                    href="/search"
                    scroll={false}
                  >
                    <div className="px-3 pb-3 select-none">
                      <Input name={"Buscar..."} label={"Buscar..."} />
                    </div>
                  </LocalizedClientLink>
                )}

                {filters.map((section) => (
                  <Disclosure
                    key={section.id}
                    as="div"
                    className="border-t border-neutral-200 px-4 py-6"
                  >
                    <h3 className="-mx-2 -my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-neutral-400 hover:text-neutral-500">
                        <span className="flex flex-row items-center font-medium text-neutral-800">
                          {section.name}
                        </span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon
                            aria-hidden="true"
                            className="h-5 w-5 group-data-[open]:hidden"
                          />
                          <MinusIcon
                            aria-hidden="true"
                            className="h-5 w-5 [.group:not([data-open])_&]:hidden"
                          />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-4">
                        {section.options.map((option, optionIdx) =>
                          option.subOptions ? (
                            <Disclosure key={optionIdx} as="div" className="">
                              <h4 className="-mx-2 -my-3 flow-root">
                                <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-neutral-400 hover:text-neutral-500">
                                  <span className="text-sm text-neutral-800">
                                    {option.label}
                                  </span>
                                  <span className="ml-6 flex items-center">
                                    <PlusIcon
                                      aria-hidden="true"
                                      className="h-4 w-4 group-data-[open]:hidden"
                                    />
                                    <MinusIcon
                                      aria-hidden="true"
                                      className="h-4 w-4 [.group:not([data-open])_&]:hidden"
                                    />
                                  </span>
                                </DisclosureButton>
                              </h4>
                              <DisclosurePanel className="pt-4">
                                <ul className="space-y-2">
                                  {option.subOptions.map((subOption) => (
                                    <li key={subOption.href}>
                                      <a
                                        href={subOption.href}
                                        className="text-sm text-neutral-600 hover:text-neutral-800"
                                      >
                                        {subOption.label}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </DisclosurePanel>
                            </Disclosure>
                          ) : (
                            <a
                              href={option.href}
                              key={optionIdx}
                              className="text-sm text-neutral-600 hover:text-neutral-800 block"
                            >
                              {option.label}
                            </a>
                          )
                        )}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>
            </DialogPanel>
          </div>
        </Dialog>

        <main className="w-full">
          <div className="flex lg:hidden items-center justify-between border-b border-gray-200 pb-6 pt-12">
            <h1 className="block lg:hidden text-4xl font-bold tracking-tight text-neutral-900">
              Aca Indumentaria
            </h1>

            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="-m-2 ml-4 p-2 text-neutral-400 hover:text-neutral-500 sm:ml-6 lg:hidden"
            >
              <span className="sr-only">Filters</span>
              <FunnelIcon aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>

          <section aria-labelledby="products-heading" className="lg:pb-24">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                <ul
                  role="list"
                  className="space-y-6 border-b border-neutral-200 pb-6 text-sm font-medium text-neutral-800"
                >
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href}>{category.name}</a>
                    </li>
                  ))}
                  {process.env.FEATURE_SEARCH_ENABLED && (
                    <LocalizedClientLink
                      className="hover:text-ui-fg-base"
                      href="/search"
                      scroll={false}
                    >
                      <div className="pt-6 select-none">
                        <Input name={"Buscar..."} label={"Buscar..."} />
                      </div>
                    </LocalizedClientLink>
                  )}
                </ul>

                {filters.map((section) => (
                  <Disclosure
                    key={section.id}
                    as="div"
                    className="border-b border-neutral-200 py-6"
                  >
                    <h3 className="-my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-neutral-400 hover:text-neutral-500">
                        <span className="flex flex-row items-center font-medium text-neutral-800">
                          {section.name}
                        </span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon
                            aria-hidden="true"
                            className="h-5 w-5 group-data-[open]:hidden"
                          />
                          <MinusIcon
                            aria-hidden="true"
                            className="h-5 w-5 [.group:not([data-open])_&]:hidden"
                          />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-4">
                        {section.options.map((option, optionIdx) => (
                          <a
                            href={option.href}
                            key={option.href}
                            className="flex items-center cursor-pointer"
                          >
                            <a
                              defaultValue={option.value}
                              id={`filter-${section.id}-${optionIdx}`}
                            />
                            <label
                              htmlFor={`filter-${section.id}-${optionIdx}`}
                              className="text-sm text-neutral-500 hover:text-neutral-600 cursor-pointer"
                            >
                              {option.label}
                            </label>
                          </a>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
