import { Text, clx } from "@medusajs/ui"
import Image from "next/image"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import AcaIndumentariaLoco from "../../../../images/AcaIndumentariaLogo.png"

export default async function Footer() {
  return (
    <footer className="border-t border-ui-border-base w-full">
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-12">
          <div>
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base uppercase"
            >
              <Image
                src={AcaIndumentariaLoco}
                alt="Aca Indumentaria Logo"
                width={75}
                height={75}
              />
            </LocalizedClientLink>
          </div>
          <div className="text-small-regular gap-10 md:gap-x-36 grid grid-cols-2 sm:grid-cols-4">
            <div className="flex flex-col gap-y-2">
              <span className="text-base font-semibold text-aca-green">
                Inicio
              </span>
              <ul className="grid grid-cols-1 gap-4">
                <li className="flex flex-col gap-2 text-ui-fg-subtle txt-small">
                  <LocalizedClientLink
                    className={clx("hover:text-ui-fg-base")}
                    href={`/categories/`}
                  >
                    Más Vendidos
                  </LocalizedClientLink>
                </li>
                <li className="flex flex-col gap-2 text-ui-fg-subtle txt-small">
                  <LocalizedClientLink
                    className={clx("hover:text-ui-fg-base")}
                    href={`/categories/`}
                  >
                    Ofertas
                  </LocalizedClientLink>
                </li>
                <li className="flex flex-col gap-2 text-ui-fg-subtle txt-small">
                  <LocalizedClientLink
                    className={clx("hover:text-ui-fg-base")}
                    href={`/categories/`}
                  >
                    Colecciones
                  </LocalizedClientLink>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="text-base font-semibold text-aca-green">
                Prendas
              </span>
              <ul className="grid grid-cols-1 gap-4">
                <li className="flex flex-col gap-2 text-ui-fg-subtle txt-small">
                  <LocalizedClientLink
                    className={clx("hover:text-ui-fg-base")}
                    href={`/categories/`}
                  >
                    Ropa de Dormir
                  </LocalizedClientLink>
                </li>
                <li className="flex flex-col gap-2 text-ui-fg-subtle txt-small">
                  <LocalizedClientLink
                    className={clx("hover:text-ui-fg-base")}
                    href={`/categories/`}
                  >
                    Camisones de pijama
                  </LocalizedClientLink>
                </li>
                <li className="flex flex-col gap-2 text-ui-fg-subtle txt-small">
                  <LocalizedClientLink
                    className={clx("hover:text-ui-fg-base")}
                    href={`/categories/`}
                  >
                    Remerones animados
                  </LocalizedClientLink>
                </li>
                <li className="flex flex-col gap-2 text-ui-fg-subtle txt-small">
                  <LocalizedClientLink
                    className={clx("hover:text-ui-fg-base")}
                    href={`/categories/`}
                  >
                    Abrigos
                  </LocalizedClientLink>
                </li>
                <li className="flex flex-col gap-2 text-ui-fg-subtle txt-small">
                  <LocalizedClientLink
                    className={clx("hover:text-ui-fg-base")}
                    href={`/categories/`}
                  >
                    Sacos
                  </LocalizedClientLink>
                </li>
                <li className="flex flex-col gap-2 text-ui-fg-subtle txt-small">
                  <LocalizedClientLink
                    className={clx("hover:text-ui-fg-base")}
                    href={`/categories/`}
                  >
                    Maxisweaters
                  </LocalizedClientLink>
                </li>
                <li className="flex flex-col gap-2 text-ui-fg-subtle txt-small">
                  <LocalizedClientLink
                    className={clx("hover:text-ui-fg-base")}
                    href={`/categories/`}
                  >
                    Buzos
                  </LocalizedClientLink>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="text-base font-semibold text-aca-green">
                Calzado
              </span>
              <ul className="grid grid-cols-1 gap-4">
                <li className="flex flex-col gap-2 text-ui-fg-subtle txt-small">
                  <LocalizedClientLink
                    className={clx("hover:text-ui-fg-base")}
                    href={`/categories/`}
                  >
                    Calzado Infantil
                  </LocalizedClientLink>
                </li>
                <li className="flex flex-col gap-2 text-ui-fg-subtle txt-small">
                  <LocalizedClientLink
                    className={clx("hover:text-ui-fg-base")}
                    href={`/categories/`}
                  >
                    Zapatillas
                  </LocalizedClientLink>
                </li>
                <li className="flex flex-col gap-2 text-ui-fg-subtle txt-small">
                  <LocalizedClientLink
                    className={clx("hover:text-ui-fg-base")}
                    href={`/categories/`}
                  >
                    Zapatos y Chatitas
                  </LocalizedClientLink>
                </li>
                <li className="flex flex-col gap-2 text-ui-fg-subtle txt-small">
                  <LocalizedClientLink
                    className={clx("hover:text-ui-fg-base")}
                    href={`/categories/`}
                  >
                    Zuecos y Chavitos
                  </LocalizedClientLink>
                </li>
                <li className="flex flex-col gap-2 text-ui-fg-subtle txt-small">
                  <LocalizedClientLink
                    className={clx("hover:text-ui-fg-base")}
                    href={`/categories/`}
                  >
                    Botas, Texanas y Borcegos
                  </LocalizedClientLink>
                </li>
                <li className="flex flex-col gap-2 text-ui-fg-subtle txt-small">
                  <LocalizedClientLink
                    className={clx("hover:text-ui-fg-base")}
                    href={`/categories/`}
                  >
                    Sienna con strass
                  </LocalizedClientLink>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="text-base font-semibold text-aca-green">
                Redes Sociales
              </span>
              <ul className="grid grid-cols-3 gap-4">
                <li className="flex flex-col gap-2 text-ui-fg-subtle txt-small">
                  <a
                    className="flex justify-center items-center bg-aca-green p-2 rounded-full"
                    href={`https://api.whatsapp.com/message/GV5YHAXA4U2IK1?autoload=1&app_absent=0`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      color="#fff9f8"
                      fill="none"
                    >
                      <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.3789 2.27907 14.6926 2.78382 15.8877C3.06278 16.5481 3.20226 16.8784 3.21953 17.128C3.2368 17.3776 3.16334 17.6521 3.01642 18.2012L2 22L5.79877 20.9836C6.34788 20.8367 6.62244 20.7632 6.87202 20.7805C7.12161 20.7977 7.45185 20.9372 8.11235 21.2162C9.30745 21.7209 10.6211 22 12 22Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.8824 12C14.0519 12 15 13.0074 15 14.25C15 15.4926 14.0519 16.5 12.8824 16.5H10.4118C9.74625 16.5 9.4135 16.5 9.20675 16.2972C9 16.0945 9 15.7681 9 15.1154V12M12.8824 12C14.0519 12 15 10.9926 15 9.75C15 8.50736 14.0519 7.5 12.8824 7.5H10.4118C9.74625 7.5 9.4135 7.5 9.20675 7.70277C9 7.90554 9 8.2319 9 8.88462V12M12.8824 12H9"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </li>
                <li className="flex flex-col gap-2 text-ui-fg-subtle txt-small">
                  <a
                    className="flex justify-center items-center bg-aca-green p-2 rounded-full"
                    href={`https://www.instagram.com/aca.indumentaria`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      color="#fff9f8"
                      fill="none"
                    >
                      <path
                        d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                      />
                      <path
                        d="M17.5078 6.5L17.4988 6.5"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </li>
                <li className="flex flex-col gap-2 text-ui-fg-subtle txt-small">
                  <a
                    className="flex justify-center items-center bg-aca-green p-2 rounded-full"
                    href={`https://www.tiktok.com/@aca.indumentaria`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      color="#fff9f8"
                      fill="none"
                    >
                      <path
                        d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.5359 11.0075C9.71585 10.8916 7.84666 11.0834 6.93011 12.7782C6.01355 14.4729 6.9373 16.2368 7.51374 16.9069C8.08298 17.5338 9.89226 18.721 11.8114 17.5619C12.2871 17.2746 12.8797 17.0603 13.552 14.8153L13.4738 5.98145C13.3441 6.95419 14.4186 9.23575 17.478 9.5057"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex w-full py-6 border-t items-center justify-center text-ui-fg-muted">
          <Text className="txt-compact-small text-center">
            © {new Date().getFullYear()} Aca Indumentaria Store. Todos los
            derechos reservados.
          </Text>
        </div>
      </div>
    </footer>
  )
}
