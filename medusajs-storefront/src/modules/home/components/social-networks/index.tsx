import React from "react"

function index() {
  return (
    <div className="bg-aca-green">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center px-4 py-6 lg:px-6 content-container">
        <div className="flex flex-row items-center justify-center mx-auto border-b pb-4 mb-4 lg:border-b-0 lg:pb-0 lg:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="44"
            height="44"
            color="#ffffff"
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
          <a
            href="https://www.instagram.com/aca.indumentaria"
            className="text-white hover:text-neutral-100 pl-2"
          >
            <h4 className="uppercase font-semibold tracking-wide">
              Seguinos en Instagram
            </h4>
            <p className="uppercase font-light text-xs md:text-sm">
              Para descubrir nuestras novedades y tendencias
            </p>
          </a>
        </div>
        <div className="flex flex-row items-center justify-center mx-auto pl-3 lg:pl-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="44"
            height="44"
            color="#ffffff"
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
          <a
            href="https://api.whatsapp.com/message/GV5YHAXA4U2IK1?autoload=1&app_absent=0"
            className="text-white hover:text-neutral-100 pl-2"
          >
            <h4 className="uppercase font-semibold tracking-wide">
              Contactanos por Whatsapp
            </h4>
            <p className="uppercase font-light text-xs md:text-sm">
              Para obtener asesoramiento personalizado y consultas rápidas
            </p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default index
