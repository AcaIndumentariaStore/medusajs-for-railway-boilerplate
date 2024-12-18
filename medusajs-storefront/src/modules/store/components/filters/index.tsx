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
          value: "Remerones Animados",
          label: "Remerones Animados",
          href: "",
          subOptions: [
            { label: "Ver Todo", href: "/collections/remerones-animados" },
            {
              label: "Remeron Animado Anime",
              href: "/products/remeron-animado-anime",
            },
            {
              label: "Remeron Animado Barbie",
              href: "/products/remeron-animado-barbie",
            },
            {
              label: "Remeron Animado Betty Boop",
              href: "/products/remeron-animado-betty-boop",
            },
            {
              label: "Remeron Animado Chuckie",
              href: "/products/remeron-animado-chuckie",
            },
            {
              label: "Remeron Animado Garfield",
              href: "/products/remeron-animado-garfield",
            },
            {
              label: "Remeron Animado Garfield 02",
              href: "/products/remeron-animado-garfield-02",
            },
            {
              label: "Remeron Animado Girl Power",
              href: "/products/remeron-animado-girl-power",
            },
            {
              label: "Remeron Animado Hello Kitty",
              href: "/products/remeron-animado-hello-kitty",
            },
            {
              label: "Remeron Animado Homero",
              href: "/products/remeron-animado-homero",
            },
            {
              label: "Remeron Animado Hunter",
              href: "/products/remeron-animado-hunter",
            },
            {
              label: "Remeron Animado Lisa",
              href: "/products/remeron-animado-lisa",
            },
            {
              label: "Remeron Animado Mickey and Minnie",
              href: "/products/remeron-animado-mickey-and-minnie",
            },
            {
              label: "Remeron Animado Mickey Classic",
              href: "/products/remeron-animado-mickey-classic",
            },
            {
              label: "Remeron Animado Mickey Mouse",
              href: "/products/remeron-animado-mickey-mouse",
            },
            {
              label: "Remeron Animado Mickey Mouse Blanco",
              href: "/products/remeron-animado-mickey-mouse-blanco",
            },
            {
              label: "Remeron Animado Mickey Mouse Salmon",
              href: "/products/remeron-animado-mickey-mouse-salmon",
            },
            {
              label: "Remeron Animado Naruto",
              href: "/products/remeron-animado-naruto",
            },
            {
              label: "Remeron Animado Peanuts",
              href: "/products/remeron-animado-peanuts",
            },
            {
              label: "Remeron Animado Peanuts 02",
              href: "/products/remeron-animado-peanuts-02",
            },
            {
              label: "Remeron Animado Rugrats",
              href: "/products/remeron-animado-rugrats",
            },
            {
              label: "Remeron Animado Rugrats 02",
              href: "/products/remeron-animado-rugrats-02",
            },
            {
              label: "Remeron Animado Rugrats 03",
              href: "/products/remeron-animado-rugrats-03",
            },
            {
              label: "Remeron Animado Rugrats 04",
              href: "/products/remeron-animado-rugrats-04",
            },
            {
              label: "Remeron Animado Rugrats 05",
              href: "/products/remeron-animado-rugrats-05",
            },
            {
              label: "Remeron Animado Scooby Doo",
              href: "/products/remeron-animado-scooby-doo",
            },
            {
              label: "Remeron Animado Scooby Doo 02",
              href: "/products/remeron-animado-scooby-doo-02",
            },
            {
              label: "Remeron Animado Space Jam",
              href: "/products/remeron-animado-space-jam",
            },
            {
              label: "Remeron Animado Stitch",
              href: "/products/remeron-animado-stitch",
            },
            {
              label: "Remeron Animado Winnie Pooh",
              href: "/products/remeron-animado-winnie-pooh",
            },
          ],
        },
        {
          value: "Buzos Animados",
          label: "Buzos Animados",
          href: "",
          subOptions: [
            { label: "Ver Todo", href: "/collections/buzos-animados" },
            {
              label: "Buzo Animado Betty Boop",
              href: "/products/buzo-animado-betty-boop",
            },
            {
              label: "Buzo Animado Bob Esponja",
              href: "/products/buzo-animado-bob-esponja",
            },
            {
              label: "Buzo Animado Bob Esponja 02",
              href: "/products/buzo-animado-bob-esponja-02",
            },
            {
              label: "Buzo Animado Bob Esponja 03",
              href: "/products/buzo-animado-bob-esponja-03",
            },
            {
              label: "Buzo Animado Bob Esponja 04",
              href: "/products/buzo-animado-bob-esponja-04",
            },
            {
              label: "Buzo Animado Courage",
              href: "/products/buzo-animado-courage",
            },
            {
              label: "Buzo Animado Daisy Duck",
              href: "/products/buzo-animado-daisy-duck",
            },
            {
              label: "Buzo Animado Disney",
              href: "/products/buzo-animado-disney",
            },
            {
              label: "Buzo Animado Garfield",
              href: "/products/buzo-animado-garfield",
            },
            {
              label: "Buzo Animado Girl Power",
              href: "/products/buzo-animado-girl-power",
            },
            {
              label: "Buzo Animado Girl Power 02",
              href: "/products/buzo-animado-girl-power-02",
            },
            {
              label: "Buzo Animado Goofy",
              href: "/products/buzo-animado-goofy",
            },
            {
              label: "Buzo Animado Griego",
              href: "/products/buzo-animado-griego",
            },
            {
              label: "Buzo Animado Hatsune Miku",
              href: "/products/buzo-animado-hatsune-miku",
            },
            {
              label: "Buzo Animado Hello Kitty",
              href: "/products/buzo-animado-hello-kitty",
            },
            {
              label: "Buzo Animado Jerry",
              href: "/products/buzo-animado-jerry",
            },
            {
              label: "Buzo Animado Mafalda",
              href: "/products/buzo-animado-mafalda",
            },
            {
              label: "Buzo Animado Mario Bros",
              href: "/products/buzo-animado-mario-bros",
            },
            {
              label: "Buzo Animado Mario Bros 02",
              href: "/products/buzo-animado-mario-bros-02",
            },
            {
              label: "Buzo Animado Minnie and Daisy",
              href: "/products/buzo-animado-minnie-and-daisy",
            },
            {
              label: "Buzo Animado Minnie Lakers",
              href: "/products/buzo-animado-minnie-lakers",
            },
            {
              label: "Buzo Animado Mickey Mouse",
              href: "/products/buzo-animado-mickey-mouse",
            },
            {
              label: "Buzo Animado Mickey Mouse 02",
              href: "/products/buzo-animado-mickey-mouse-02",
            },
            {
              label: "Buzo Animado Mickey Mouse 03",
              href: "/products/buzo-animado-mickey-mouse-03",
            },
            {
              label: "Buzo Animado Mickey Mouse 04",
              href: "/products/buzo-animado-mickey-mouse-04",
            },
            {
              label: "Buzo Animado Mickey Mouse 05",
              href: "/products/buzo-animado-mickey-mouse-05",
            },
            {
              label: "Buzo Animado Mickey Mouse 06",
              href: "/products/buzo-animado-mickey-mouse-06",
            },
            {
              label: "Buzo Animado Mickey's",
              href: "/products/buzo-animado-mickeys",
            },
            {
              label: "Buzo Animado Monsters Inc",
              href: "/products/buzo-animado-monsters-inc",
            },
            {
              label: "Buzo Animado Muñecas",
              href: "/products/buzo-animado-munecas",
            },
            {
              label: "Buzo Animado Naruto",
              href: "/products/buzo-animado-naruto",
            },
            {
              label: "Buzo Animado Naruto 02",
              href: "/products/buzo-animado-naruto-02",
            },
            {
              label: "Buzo Animado Ositos",
              href: "/products/buzo-animado-ositos",
            },
            {
              label: "Buzo Animado Ositos 02",
              href: "/products/buzo-animado-ositos-02",
            },
            {
              label: "Buzo Animado Ositos 03",
              href: "/products/buzo-animado-ositos-03",
            },
            {
              label: "Buzo Animado Ositos Cariñositos",
              href: "/products/buzo-animado-ositos-carinositos",
            },
            { label: "Buzo Animado Oso", href: "/products/buzo-animado-oso" },
            {
              label: "Buzo Animado Pluto",
              href: "/products/buzo-animado-pluto",
            },
            {
              label: "Buzo Animado Rugrats",
              href: "/products/buzo-animado-rugrats",
            },
            {
              label: "Buzo Animado Rugrats 02",
              href: "/products/buzo-animado-rugrats-02",
            },
            {
              label: "Buzo Animado Speedy",
              href: "/products/buzo-animado-speedy",
            },
            {
              label: "Buzo Animado Super Mario",
              href: "/products/buzo-animado-super-mario",
            },
            {
              label: "Buzo Animado Tigger",
              href: "/products/buzo-animado-tigger",
            },
            {
              label: "Buzo Animado Tweets",
              href: "/products/buzo-animado-tweets",
            },
            {
              label: "Buzo Animado Versace",
              href: "/products/buzo-animado-versace",
            },
          ],
        },
        {
          value: "Buzos Oversize",
          label: "Buzos Oversize",
          href: "",
          subOptions: [
            { label: "Ver Todo", href: "/collections/buzos-oversize" },
            {
              label: "Maxibuzo Ovesize con capucha Hello Kitty",
              href: "/products/maxibuzo-ovesize-con-capucha-hello-kitty",
            },
            {
              label: "Maxibuzo Ovesize con capucha Looney Tunes",
              href: "/products/maxibuzo-ovesize-con-capucha-looney-tunes",
            },
            {
              label: "Maxibuzo Ovesize con capucha Mickey Mouse",
              href: "/products/maxibuzo-ovesize-con-capucha-mickey-mouse",
            },
            {
              label: "Maxibuzo Ovesize con capucha Mickey Mouse Blanco",
              href: "/products/maxibuzo-ovesize-con-capucha-mickey-mouse-blanco",
            },
            {
              label: "Maxibuzo Ovesize con capucha Mickey Mouse Retro",
              href: "/products/maxibuzo-ovesize-con-capucha-mickey-mouse-retro",
            },
            {
              label: "Maxibuzo Ovesize con capucha Mickey Mouse Rojo",
              href: "/products/maxibuzo-ovesize-con-capucha-mickey-mouse-rojo",
            },
            {
              label: "Maxibuzo Ovesize con capucha Minnie y Daisy",
              href: "/products/maxibuzo-ovesize-con-capucha-minnie-y-daisy",
            },
            {
              label: "Maxibuzo Ovesize con capucha Monsters Inc",
              href: "/products/maxibuzo-ovesize-con-capucha-monsters-inc",
            },
            {
              label: "Maxibuzo Ovesize con capucha Rugrats",
              href: "/products/maxibuzo-ovesize-con-capucha-rugrats",
            },
            {
              label: "Maxibuzo Ovesize con capucha Stitch",
              href: "/products/maxibuzo-ovesize-con-capucha-stitch",
            },
          ],
        },
        {
          value: "Buzos Peluche",
          label: "Buzos Peluche",
          href: "",
          subOptions: [
            { label: "Ver Todo", href: "/collections/buzos-peluche" },
          ],
        },
        {
          value: "Sacos de Lana",
          label: "Sacos de Lana",
          href: "",
          subOptions: [
            { label: "Ver Todo", href: "/collections/sacos-de-lana" },
            {
              label: "Sacos de Lana",
              href: "/products/sacos-de-lana",
            },
            {
              label: "Sacon de Lana",
              href: "/products/sacon-de-lana",
            },
          ],
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
            { label: "Ver Todo", href: "/collections/temporada-invierno" },
            {
              label: "Botas de Tela Acolchonada Sienna",
              href: "/products/botas-de-tela-acolchonada-sienna",
            },
            {
              label: "Botas de Tela Acolchonada Sienna con Strass",
              href: "/products/botas-de-tela-acolchonada-sienna-con-strass",
            },
            {
              label: "Chavitos de Tela Gamuzada",
              href: "/products/chavitos-de-tela-gamuzada",
            },
            {
              label: "Pantubotas Altas Estilo Australiano",
              href: "/products/pantubotas-altas-estilo-australiano",
            },
            { label: "Pantubotas Cortas", href: "/products/pantubotas-cortas" },
            {
              label: "Pantubotas Wallabys Con Pelo",
              href: "/products/pantubotas-wallabys-con-pelo",
            },
            {
              label: "Pantubotas Wallabys Sin Pelo",
              href: "/products/pantubotas-wallabys-sin-pelo",
            },
            {
              label: "Zuecos Birken forrados en Corderito Con Piel",
              href: "/products/zuecos-birken-forrados-en-corderito-con-piel",
            },
          ],
        },
        {
          value: "Calzado para Niños",
          label: "Calzado para Niños",
          href: "",
          subOptions: [
            { label: "Ver Todo", href: "/collections/ninos" },
            {
              label: "Guillerminas Escolares - Pups",
              href: "/products/guillerminas-escolares-pups",
            },
            {
              label: "Zapatillas Escolares con Cordones - Pups",
              href: "/products/zapatillas-escolares-con-cordones-pups",
            },
            {
              label: "Zapatillas Escolares con Abrojo - Pups",
              href: "/products/zapatillas-escolares-con-abrojo-pups",
            },
            {
              label: "Zapatillas Animadas Elastizadas para Niños",
              href: "/products/zapatillas-animadas-elastizadas-para-ninos",
            },
            {
              label: "Zapatillas Elastizadas para Niños Lisas",
              href: "/products/zapatillas-elastizadas-para-ninos-lisas",
            },
            {
              label: "Zapatillas Animadas para Niños con Velcro",
              href: "/products/zapatillas-animadas-para-ninos-con-velcro",
            },
            {
              label: "Zapatillas para Niños con Velcro",
              href: "/products/zapatillas-para-ninos-con-velcro",
            },
            {
              label: "Zapatillas con Cordones - Pups",
              href: "/products/zapatillas-con-cordones-pups",
            },
          ],
        },
        {
          value: "Calzado de Tela",
          label: "Calzado de Tela",
          href: "",
          subOptions: [
            { label: "Ver Todo", href: "/collections/tela" },
            { label: "Zuecos de Tela", href: "/products/zuecos-de-tela" },
            {
              label: "Zapatillas Pancha de Tela",
              href: "/products/zapatillas-pancha-de-tela",
            },
            {
              label: "Zapatillas Guillerminas",
              href: "/products/zapatillas-guillerminas",
            },
            {
              label: "Pancha de Tela Ultraelastizada",
              href: "/products/pancha-de-tela-ultraelastizada",
            },
            {
              label: "Chatitas de Tela Estilo WAPS",
              href: "/products/chatitas-de-tela-estilo-waps",
            },
          ],
        },
        {
          value: "Sandalias De Cuero Ecológico",
          label: "Sandalias De Cuero Ecológico",
          href: "",
          subOptions: [
            { label: "Ver Todo", href: "/collections/cuero-ecologico" },
          ],
        },
        {
          value: "Calzado de Cuero Vacuno",
          label: "Calzado de Cuero Vacuno",
          href: "",
          subOptions: [
            { label: "Ver Todos", href: "/collections/cuero-vacuno" },
            {
              label: "Chatitas Cuero Vacuno",
              href: "/products/chatitas-cuero-vacuno",
            },
            {
              label: "Zapatillas Cuero Vacuno Lunita",
              href: "/products/zapatillas-cuero-vacuno-lunita",
            },
            {
              label: "Texanas Cortas Cuero Vacuno",
              href: "/products/texanas-cortas-cuero-vacuno",
            },
            {
              label: "Texanas Altas Cuero Vacuno",
              href: "/products/texanas-altas-cuero-vacuno",
            },
            {
              label: "Sandalias Españolas",
              href: "/products/sandalias-espanolas",
            },
            {
              label: "Sandalias Cuero Vacuno",
              href: "/products/sandalias-cuero-vacuno",
            },
            {
              label: "Botas Cuero Vacuno",
              href: "/products/botas-cuero-vacuno",
            },
            {
              label: "Borcegos Cuero Vacuno",
              href: "/products/borcegos-cuero-vacuno",
            },
          ],
        },
        {
          value: "Zapatillas",
          label: "Zapatillas",
          href: "",
          subOptions: [
            { label: "Ver Todos", href: "/collections/zapatillas" },
            {
              label: "Zapatillas Tela Elastizada",
              href: "/products/zapatillas-tela-elastizada",
            },
            {
              label: "Zapatillas de Tela - Hombre",
              href: "/products/zapatillas-de-tela-hombre",
            },
            {
              label: "Zapatillas Soft - Mujer",
              href: "/products/zapatillas-soft-mujer",
            },
            {
              label: "Zapatillas Soft - Hombre",
              href: "/products/zapatillas-soft-hombre",
            },
            {
              label: "Zapatillas de Tela - Julia",
              href: "/products/zapatillas-de-tela-julia",
            },
            {
              label: "Zapatillas de Tela con Plataforma",
              href: "/products/zapatillas-de-tela-con-plataforma",
            },
            {
              label: "Zapatillas Cuero Ecológico",
              href: "/products/zapatillas-cuero-ecologico",
            },
            {
              label: "Zapatillas con Plataforma Tijuana",
              href: "/products/zapatillas-con-plataforma-tijuana",
            },
          ],
        },
        {
          value: "",
          label: "En liquidación",
          href: "/collections/en-liquidacion",
        },
      ],
    },
    // {
    //   id: "tejidos-artesanales",
    //   name: "Tejidos Artesanales",
    //   options: [
    //     {
    //       value: "",
    //       label: "Hombres",
    //       href: "/prendas/hombres",
    //     },
    //     {
    //       value: "",
    //       label: "Mujeres",
    //       href: "/prendas/mujeres",
    //     },
    //     {
    //       value: "",
    //       label: "Niños",
    //       href: "/prendas/ninos",
    //     },
    //   ],
    // },
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
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
