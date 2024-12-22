import { Suspense } from "react"
import Image from "next/image"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import AcaIndumentariaLoco from "../../../../images/AcaIndumentariaLogo.png"
import Banner from "../banner"
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react"
import MobileMenu from "./mobile-menu"

const navigation = {
  categories: [
    {
      id: "calzado",
      name: "Calzado",
      featured: [
        {
          name: "Ultimos Lanzamientos",
          href: "/store?sortBy=created_at",
          imageSrc:
            "https://medusa-prestige-server.s3.us-east-1.amazonaws.com/aca-indumentaria/UltimosLanzamientos.png",
          imageAlt: "",
        },
        {
          name: "¡En Liquidacion! Hasta -50% OFF",
          href: "/collections/en-liquidacion",
          imageSrc:
            "https://medusa-prestige-server.s3.us-east-1.amazonaws.com/aca-indumentaria/EnLiquidacion.png",
          imageAlt: "",
        },
      ],
      sections: [
        {
          id: "calzado",
          name: "Encontrá tu Calzado Ideal",
          items: [
            {
              name: "Temporada Invierno",
              href: "/collections/temporada-invierno",
            },
            { name: "Para Niños", href: "/collections/ninos" },
            { name: "De Tela", href: "/collections/tela" },
            {
              name: "Sandalias De Cuero Ecológico",
              href: "/collections/cuero-ecologico",
            },
            { name: "Cuero Vacuno", href: "/collections/cuero-vacuno" },
            { name: "Zapatillas", href: "/collections/zapatillas" },
          ],
        },
      ],
    },
    {
      id: "prendas-de-vestir",
      name: "Prendas de Vestir",
      featured: [
        {
          name: "Ultimos Lanzamientos",
          href: "/store?sortBy=created_at",
          imageSrc:
            "https://medusa-prestige-server.s3.us-east-1.amazonaws.com/aca-indumentaria/UltimosLanzamientos.png",
          imageAlt: "",
        },
        {
          name: "¡En Liquidacion! Hasta -50% OFF",
          href: "/collections/en-liquidacion",
          imageSrc:
            "https://medusa-prestige-server.s3.us-east-1.amazonaws.com/aca-indumentaria/EnLiquidacion.png",
          imageAlt: "",
        },
      ],
      sections: [
        {
          id: "prendas",
          name: "Encontrá tu prenda ideal",
          items: [
            { name: "Remerones Animados", href: "/collections/remerones-animados" },
            { name: "Buzos Animados", href: "/collections/remerones-animados" },
            { name: "Buzos Oversize", href: "/collections/buzos-oversize" },
            { name: "Buzos Peluche", href: "/collections/buzos-peluche" },
            { name: "Sacos de Lana", href: "/collections/sacos-de-lana" },
          ],
        },
      ],
    },
    // {
    //   id: "tejidos-artesanales",
    //   name: "Tejidos Artesanales",
    //   featured: [
    //     {
    //       name: "Ultimos Lanzamientos",
    //       href: "/store?sortBy=created_at",
    //       imageSrc:
    //         "https://medusa-prestige-server.s3.us-east-1.amazonaws.com/aca-indumentaria/UltimosLanzamientos.png",
    //       imageAlt: "",
    //     },
    //     {
    //       name: "¡En Liquidacion! Hasta -50% OFF",
    //       href: "/collections/en-liquidacion",
    //       imageSrc:
    //         "https://medusa-prestige-server.s3.us-east-1.amazonaws.com/aca-indumentaria/EnLiquidacion.png",
    //       imageAlt: "",
    //     },
    //   ],
    //   sections: [
    //     {
    //       id: "tejidos-artesanales",
    //       name: "Tejidos Artesanales",
    //       items: [
    //         { name: "1", href: "" },
    //         { name: "2", href: "" },
    //         { name: "3", href: "" },
    //         { name: "4", href: "" },
    //         { name: "5", href: "" },
    //       ],
    //     },
    //   ],
    // },
  ],
  pages: [
    { name: "Inicio", href: "/" },
    { name: "Tienda", href: "/store" },
  ],
}

export default async function Nav() {
  // const regions = await listRegions().then((regions) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <Banner />
      <header className="relative h-16 mx-auto border-b border-neutral-100 duration-200 bg-white border-ui-border-base">
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          <div className="flex md:hidden flex-1 basis-0 h-full items-center">
            <div className="h-full">
              <MobileMenu />
            </div>
          </div>

          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
            >
              <Image
                src={AcaIndumentariaLoco}
                alt="Aca Indumentaria Logo"
                width={40}
                height={40}
              />
            </LocalizedClientLink>

            <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
              <div className="flex h-full space-x-8">
                {navigation.pages.map((page) => (
                  <a
                    key={page.name}
                    href={page.href}
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800 hover:border-aca-green data-[open]:border-aca-green data-[open]:text-aca-green"
                  >
                    {page.name}
                  </a>
                ))}

                {navigation.categories.map((category) => (
                  <Popover key={category.name} className="flex">
                    <div className="relative flex">
                      <PopoverButton className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 hover:border-aca-green data-[open]:border-aca-green data-[open]:text-aca-green">
                        {category.name}
                      </PopoverButton>
                    </div>

                    <PopoverPanel
                      transition
                      className="absolute inset-x-0 top-full text-sm text-gray-500 transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 top-1/2 bg-white shadow"
                      />

                      <div className="relative bg-white">
                        <div className="mx-auto max-w-7xl px-8">
                          <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                            <div className="col-start-2 grid grid-cols-2 gap-x-8">
                              {category.featured.map((item) => (
                                <div
                                  key={item.name}
                                  className="group relative text-base sm:text-sm"
                                >
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
                            <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                              {category.sections?.map((section) => (
                                <div key={section.name}>
                                  <p
                                    id={`${section.name}-heading`}
                                    className="font-medium text-gray-900"
                                  >
                                    {section.name}
                                  </p>
                                  <ul
                                    role="list"
                                    aria-labelledby={`${section.name}-heading`}
                                    className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                  >
                                    {section.items.map((item) => (
                                      <li key={item.name} className="flex">
                                        <a
                                          href={item.href}
                                          className="hover:text-gray-800"
                                        >
                                          {item.name}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </PopoverPanel>
                  </Popover>
                ))}
              </div>
            </PopoverGroup>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              {process.env.FEATURE_SEARCH_ENABLED && (
                <LocalizedClientLink
                  className="hover:text-ui-fg-base"
                  href="/"
                  scroll={false}
                >
                  Search
                </LocalizedClientLink>
              )}
              <LocalizedClientLink
                className="hover:text-ui-fg-base"
                href="/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  color="#4b4b4b"
                  fill="none"
                >
                  <path
                    d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                  />
                </svg>
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex gap-2"
                  href="/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    color="#4b4b4b"
                    fill="none"
                  >
                    <path
                      d="M8 16L16.7201 15.2733C19.4486 15.046 20.0611 14.45 20.3635 11.7289L21 6"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M6 6H22"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <circle
                      cx="6"
                      cy="20"
                      r="2"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                    <circle
                      cx="17"
                      cy="20"
                      r="2"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                    <path
                      d="M8 20L15 20"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M2 2H2.966C3.91068 2 4.73414 2.62459 4.96326 3.51493L7.93852 15.0765C8.08887 15.6608 7.9602 16.2797 7.58824 16.7616L6.63213 18"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>{" "}
                  (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}
