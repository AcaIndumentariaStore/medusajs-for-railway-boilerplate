"use client"
import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Autoplay, Pagination } from "swiper/modules"

import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

export default function Banner() {
  const [isVisible, setIsVisible] = useState(true)

  const handleDismiss = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="relative isolate flex items-center justify-center gap-x-6 overflow-hidden px-2 py-1.5 sm:px-3.5 sm:before:flex-1">
      <div className="block lg:hidden">
        <Swiper
          slidesPerView={1}
          loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className="flex flex-wrap text-white max-w-xs"
        >
          <SwiperSlide>
            <section className="flex flex-row items-center justify-center pt-6 pb-10 gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="64"
                height="64"
                color="#a2d1ad"
                fill="none"
              >
                <path
                  d="M12 6.5L17.5 9.5L12 12.5L6.5 9.5L12 6.5Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6 15V16.7993C6 17.8322 6.18419 18.1541 7.10557 18.6241L11.1056 20.6642C11.9834 21.1119 12.0166 21.1119 12.8944 20.6642L16.8944 18.6241C17.8158 18.1541 18 17.8322 18 16.7993V15"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.3366 4.16039L12 6.27308L9.66338 4.16039C8.83959 3.41554 8.42769 3.04312 7.92383 3.00345C7.41998 2.96377 6.95823 3.26741 6.03473 3.87468L4.36211 4.97455C3.46519 5.56434 3.01674 5.85924 3.00045 6.29741C2.98417 6.73558 3.40941 7.06515 4.25991 7.72429L6.4348 9.40983L4.25991 11.0954C3.40942 11.7545 2.98417 12.0841 3.00045 12.5222C3.01674 12.9604 3.46519 13.2553 4.36211 13.8451L6.92973 15.5335C7.42226 15.8574 7.66853 16.0193 7.93725 15.9982C8.20597 15.977 8.42565 15.7784 8.86501 15.3811L12 12.5466L14.3366 14.6593C15.1604 15.4041 15.5723 15.7765 16.0762 15.8162C16.58 15.8559 17.0418 15.5522 17.9653 14.945L17.9653 14.945L19.6379 13.8451C20.5348 13.2553 20.9833 12.9604 20.9996 12.5222C21.0158 12.0841 20.5906 11.7545 19.7401 11.0954L17.5652 9.40983L19.7401 7.72429C20.5906 7.06515 21.0158 6.73558 20.9996 6.29741C20.9833 5.85924 20.5348 5.56434 19.6379 4.97455L17.9653 3.87468C17.0418 3.26741 16.58 2.96377 16.0762 3.00345C15.5723 3.04312 15.1604 3.41554 14.3366 4.16039Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div>
                <h3 className="text-lg text-aca-grey">Trabajamos con Stock</h3>
                <p className="text-xs font-light text-aca-grey">
                  Todo lo que ves esta disponible para la entrega inmediata ¡Sin
                  esperas!
                </p>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="flex flex-row items-center justify-center pt-6 pb-10 gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="64"
                height="64"
                color="#a2d1ad"
                fill="none"
              >
                <path
                  d="M3.3457 16.1976L16.1747 3.36866M18.6316 11.0556L16.4321 13.2551M14.5549 15.1099L13.5762 16.0886"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M3.17467 16.1411C1.60844 14.5749 1.60844 12.0355 3.17467 10.4693L10.4693 3.17467C12.0355 1.60844 14.5749 1.60844 16.1411 3.17467L20.8253 7.85891C22.3916 9.42514 22.3916 11.9645 20.8253 13.5307L13.5307 20.8253C11.9645 22.3916 9.42514 22.3916 7.85891 20.8253L3.17467 16.1411Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                />
                <path
                  d="M4 22H20"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
              <div>
                <h3 className="text-lg text-aca-grey">Métodos de Pago</h3>
                <p className="text-xs font-light text-aca-grey">
                  Pága como prefieras: Efectivo, Mercado Pago o Transferencia
                  Bancaria
                </p>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="flex flex-row items-center justify-center pt-6 pb-10 gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="64"
                height="64"
                color="#a2d1ad"
                fill="none"
              >
                <circle
                  cx="17"
                  cy="18"
                  r="2"
                  stroke="currentColor"
                  stroke-width="1.5"
                />
                <circle
                  cx="7"
                  cy="18"
                  r="2"
                  stroke="currentColor"
                  stroke-width="1.5"
                />
                <path
                  d="M5 17.9724C3.90328 17.9178 3.2191 17.7546 2.73223 17.2678C2.24536 16.7809 2.08222 16.0967 2.02755 15M9 18H15M19 17.9724C20.0967 17.9178 20.7809 17.7546 21.2678 17.2678C22 16.5355 22 15.357 22 13V11H17.3C16.5555 11 16.1832 11 15.882 10.9021C15.2731 10.7043 14.7957 10.2269 14.5979 9.61803C14.5 9.31677 14.5 8.94451 14.5 8.2C14.5 7.08323 14.5 6.52485 14.3532 6.07295C14.0564 5.15964 13.3404 4.44358 12.4271 4.14683C11.9752 4 11.4168 4 10.3 4H2"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2 8H8"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2 11H6"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.5 6H16.3212C17.7766 6 18.5042 6 19.0964 6.35371C19.6886 6.70742 20.0336 7.34811 20.7236 8.6295L22 11"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div>
                <h3 className="text-lg text-aca-grey">Envíos a Todo el País</h3>
                <p className="text-xs font-light text-aca-grey">
                  Recibí tu pedido en casa o coordinamos un punto de encuentro
                </p>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="flex flex-row items-center justify-center pt-6 pb-10 gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="64"
                height="64"
                color="#a2d1ad"
                fill="none"
              >
                <path
                  d="M17.9583 8.38889C17.9583 6.24111 15.2907 4.5 12 4.5C8.7093 4.5 6.04167 6.24111 6.04167 8.38889C6.04167 10.5367 7.66667 11.7222 12 11.7222C16.3333 11.7222 18.5 12.8333 18.5 15.6111C18.5 18.3889 15.5899 19.5 12 19.5C8.41015 19.5 5.5 17.7589 5.5 15.6111"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M12.5 2.5V4.21M12.5 21.5V19.79"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div>
                <h3 className="text-lg text-aca-grey">35% de Descuento</h3>
                <p className="text-xs font-light text-aca-grey">
                  Abonando en Efectivo (contra entrega) o Transferencia Bancaria
                </p>
              </div>
            </section>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="hidden lg:grid grid-cols-4 gap-x-12 items-center justify-center py-6 content-container">
        <section className="flex flex-row items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="64"
            height="64"
            color="#a2d1ad"
            fill="none"
          >
            <path
              d="M12 6.5L17.5 9.5L12 12.5L6.5 9.5L12 6.5Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6 15V16.7993C6 17.8322 6.18419 18.1541 7.10557 18.6241L11.1056 20.6642C11.9834 21.1119 12.0166 21.1119 12.8944 20.6642L16.8944 18.6241C17.8158 18.1541 18 17.8322 18 16.7993V15"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.3366 4.16039L12 6.27308L9.66338 4.16039C8.83959 3.41554 8.42769 3.04312 7.92383 3.00345C7.41998 2.96377 6.95823 3.26741 6.03473 3.87468L4.36211 4.97455C3.46519 5.56434 3.01674 5.85924 3.00045 6.29741C2.98417 6.73558 3.40941 7.06515 4.25991 7.72429L6.4348 9.40983L4.25991 11.0954C3.40942 11.7545 2.98417 12.0841 3.00045 12.5222C3.01674 12.9604 3.46519 13.2553 4.36211 13.8451L6.92973 15.5335C7.42226 15.8574 7.66853 16.0193 7.93725 15.9982C8.20597 15.977 8.42565 15.7784 8.86501 15.3811L12 12.5466L14.3366 14.6593C15.1604 15.4041 15.5723 15.7765 16.0762 15.8162C16.58 15.8559 17.0418 15.5522 17.9653 14.945L17.9653 14.945L19.6379 13.8451C20.5348 13.2553 20.9833 12.9604 20.9996 12.5222C21.0158 12.0841 20.5906 11.7545 19.7401 11.0954L17.5652 9.40983L19.7401 7.72429C20.5906 7.06515 21.0158 6.73558 20.9996 6.29741C20.9833 5.85924 20.5348 5.56434 19.6379 4.97455L17.9653 3.87468C17.0418 3.26741 16.58 2.96377 16.0762 3.00345C15.5723 3.04312 15.1604 3.41554 14.3366 4.16039Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div>
            <h3 className="text-lg text-aca-grey">Trabajamos con Stock</h3>
            <p className="text-xs font-light text-aca-grey">
              Todo lo que ves esta disponible para la entrega inmediata ¡Sin
              esperas!
            </p>
          </div>
        </section>
        <section className="flex flex-row items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="64"
            height="64"
            color="#a2d1ad"
            fill="none"
          >
            <path
              d="M3.3457 16.1976L16.1747 3.36866M18.6316 11.0556L16.4321 13.2551M14.5549 15.1099L13.5762 16.0886"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M3.17467 16.1411C1.60844 14.5749 1.60844 12.0355 3.17467 10.4693L10.4693 3.17467C12.0355 1.60844 14.5749 1.60844 16.1411 3.17467L20.8253 7.85891C22.3916 9.42514 22.3916 11.9645 20.8253 13.5307L13.5307 20.8253C11.9645 22.3916 9.42514 22.3916 7.85891 20.8253L3.17467 16.1411Z"
              stroke="currentColor"
              stroke-width="1.5"
            />
            <path
              d="M4 22H20"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
          <div>
            <h3 className="text-lg text-aca-grey">Métodos de Pago</h3>
            <p className="text-xs font-light text-aca-grey">
              Pága como prefieras: Efectivo, Mercado Pago o Transferencia
              Bancaria
            </p>
          </div>
        </section>
        <section className="flex flex-row items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="64"
            height="64"
            color="#a2d1ad"
            fill="none"
          >
            <circle
              cx="17"
              cy="18"
              r="2"
              stroke="currentColor"
              stroke-width="1.5"
            />
            <circle
              cx="7"
              cy="18"
              r="2"
              stroke="currentColor"
              stroke-width="1.5"
            />
            <path
              d="M5 17.9724C3.90328 17.9178 3.2191 17.7546 2.73223 17.2678C2.24536 16.7809 2.08222 16.0967 2.02755 15M9 18H15M19 17.9724C20.0967 17.9178 20.7809 17.7546 21.2678 17.2678C22 16.5355 22 15.357 22 13V11H17.3C16.5555 11 16.1832 11 15.882 10.9021C15.2731 10.7043 14.7957 10.2269 14.5979 9.61803C14.5 9.31677 14.5 8.94451 14.5 8.2C14.5 7.08323 14.5 6.52485 14.3532 6.07295C14.0564 5.15964 13.3404 4.44358 12.4271 4.14683C11.9752 4 11.4168 4 10.3 4H2"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2 8H8"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2 11H6"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.5 6H16.3212C17.7766 6 18.5042 6 19.0964 6.35371C19.6886 6.70742 20.0336 7.34811 20.7236 8.6295L22 11"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div>
            <h3 className="text-lg text-aca-grey">Envíos a Todo el País</h3>
            <p className="text-xs font-light text-aca-grey">
              Recibí tu pedido en casa o coordinamos un punto de encuentro
            </p>
          </div>
        </section>
        <section className="flex flex-row items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="64"
            height="64"
            color="#a2d1ad"
            fill="none"
          >
            <path
              d="M17.9583 8.38889C17.9583 6.24111 15.2907 4.5 12 4.5C8.7093 4.5 6.04167 6.24111 6.04167 8.38889C6.04167 10.5367 7.66667 11.7222 12 11.7222C16.3333 11.7222 18.5 12.8333 18.5 15.6111C18.5 18.3889 15.5899 19.5 12 19.5C8.41015 19.5 5.5 17.7589 5.5 15.6111"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M12.5 2.5V4.21M12.5 21.5V19.79"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div>
            <h3 className="text-lg text-aca-grey">35% de Descuento</h3>
            <p className="text-xs font-light text-aca-grey">
              Abonando en Efectivo (contra entrega) o Transferencia Bancaria
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
