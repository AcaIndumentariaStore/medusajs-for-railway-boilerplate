"use client"

import React from "react"
import { motion } from "framer-motion"
import { BlurFade } from "@modules/magic-ui/Blur-fade"

import CalzadosDeTela from "../../../../images/colecciones/CalzadosDeTela.png"
import CalzadosDeCuero from "../../../../images/colecciones/CalzadosDeCuero.png"
import CalzadosDeInvierno from "../../../../images/colecciones/CalzadosDeInvierno.png"
import CalzadosDeNinos from "../../../../images/colecciones/CalzadosDeNinos.png"
import SandaliasEcoCuero from "../../../../images/colecciones/SandaliasEcoCuero.png"
import Zapatillas from "../../../../images/colecciones/Zapatillas.png"
import UltimosPares from "../../../../images/colecciones/UltimosPares.png"
import Remerones from "../../../../images/colecciones/Remerones.png"
import Buzos from "../../../../images/colecciones/Buzos.png"
import BuzosOversize from "../../../../images/colecciones/BuzosOversize.png"
import BuzosPeluche from "../../../../images/colecciones/BuzosPeluche.png"
import SacosDeLana from "../../../../images/colecciones/SacosDeLana.png"
import SaconesDeLana from "../../../../images/colecciones/SaconesDeLana.png"

function Index() {
  return (
    <div
      id="colecciones"
      className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-12 content-container py-12"
    >
      <a href="/collections/tela">
        <motion.div
          whileHover={{
            scale: 1.02,
            translateY: -5,
            boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
          }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="relative flex flex-col items-center justify-center"
        >
          <div className="relative flex flex-row items-center justify-center h-72 lg:h-96 w-full border bg-aca-beige border-neutral-200 rounded-md">
            <img
              src={CalzadosDeTela.src}
              alt=""
              className="object-cover w-full h-72 lg:h-96 select-none rounded-md"
            />
          </div>
          <BlurFade
            delay={0.5}
            className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center text-center w-full"
          >
            <p className="px-2 py-3 font-extrabold text-lg lg:text-xl text-center text-white mt-3 rounded-md uppercase w-full">
              Calzados de tela
            </p>
          </BlurFade>
        </motion.div>
      </a>

      <a href="/collections/cuero-vacuno">
        <motion.div
          whileHover={{
            scale: 1.02,
            translateY: -5,
            boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
          }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="relative flex flex-col items-center justify-center"
        >
          <div className="relative flex flex-row items-center justify-center h-72 lg:h-96 w-full border bg-aca-beige border-neutral-200 rounded-md">
            <img
              src={CalzadosDeCuero.src}
              alt=""
              className="object-cover w-full h-72 lg:h-96 select-none rounded-md"
            />
          </div>
          <BlurFade
            delay={0.5}
            className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center text-center w-full"
          >
            <p className="px-2 py-3 font-extrabold text-lg lg:text-xl text-center text-white mt-3 rounded-md uppercase w-full">
              Calzados de cuero
            </p>
          </BlurFade>
        </motion.div>
      </a>

      <a href="/collections/temporada-invierno">
        <motion.div
          whileHover={{
            scale: 1.02,
            translateY: -5,
            boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
          }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="relative flex flex-col items-center justify-center"
        >
          <div className="relative flex flex-row items-center justify-center h-72 lg:h-96 w-full border bg-aca-beige border-neutral-200 rounded-md">
            <img
              src={CalzadosDeInvierno.src}
              alt=""
              className="object-cover w-full h-72 lg:h-96 select-none rounded-md"
            />
          </div>
          <BlurFade
            delay={0.5}
            className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center text-center w-full"
          >
            <p className="px-2 py-3 font-extrabold text-lg lg:text-xl text-center text-white mt-3 rounded-md uppercase w-full">
              Calzados de Invierno
            </p>
          </BlurFade>
        </motion.div>
      </a>

      <a href="/collections/ninos">
        <motion.div
          whileHover={{
            scale: 1.02,
            translateY: -5,
            boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
          }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="relative flex flex-col items-center justify-center"
        >
          <div className="relative flex flex-row items-center justify-center h-72 lg:h-96 w-full border bg-aca-beige border-neutral-200 rounded-md">
            <img
              src={CalzadosDeNinos.src}
              alt=""
              className="object-cover w-full h-72 lg:h-96 select-none rounded-md"
            />
          </div>
          <BlurFade
            delay={0.5}
            className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center text-center w-full"
          >
            <p className="px-2 py-3 font-extrabold text-lg lg:text-xl text-center text-white mt-3 rounded-md uppercase w-full">
              Calzados de niños
            </p>
          </BlurFade>
        </motion.div>
      </a>

      <a href="/collections/cuero-ecologico">
        <motion.div
          whileHover={{
            scale: 1.02,
            translateY: -5,
            boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
          }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="relative flex flex-col items-center justify-center"
        >
          <div className="relative flex flex-row items-center justify-center h-72 lg:h-96 w-full border bg-aca-beige border-neutral-200 rounded-md">
            <img
              src={SandaliasEcoCuero.src}
              alt=""
              className="object-cover w-full h-72 lg:h-96 select-none rounded-md"
            />
          </div>
          <BlurFade
            delay={0.5}
            className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center text-center w-full"
          >
            <p className="px-2 py-3 font-extrabold text-lg lg:text-xl text-center text-white mt-3 rounded-md uppercase w-full">
              Sandalias Ecocuero
            </p>
          </BlurFade>
        </motion.div>
      </a>

      <a href="/collections/zapatillas">
        <motion.div
          whileHover={{
            scale: 1.02,
            translateY: -5,
            boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
          }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="relative flex flex-col items-center justify-center"
        >
          <div className="relative flex flex-row items-center justify-center h-72 lg:h-96 w-full border bg-aca-beige border-neutral-200 rounded-md">
            <img
              src={Zapatillas.src}
              alt=""
              className="object-cover w-full h-72 lg:h-96 select-none rounded-md"
            />
          </div>
          <BlurFade
            delay={0.5}
            className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center text-center w-full"
          >
            <p className="px-2 py-3 font-extrabold text-lg lg:text-xl text-center text-white mt-3 rounded-md uppercase w-full">
              Zapatillas
            </p>
          </BlurFade>
        </motion.div>
      </a>

      <a href="/collections/en-liquidacion">
        <motion.div
          whileHover={{
            scale: 1.02,
            translateY: -5,
            boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
          }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="relative flex flex-col items-center justify-center"
        >
          <div className="relative flex flex-row items-center justify-center h-72 lg:h-96 w-full border bg-aca-beige border-neutral-200 rounded-md">
            <img
              src={UltimosPares.src}
              alt=""
              className="object-cover w-full h-72 lg:h-96 select-none rounded-md"
            />
          </div>
          <BlurFade
            delay={0.5}
            className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center text-center w-full"
          >
            <p className="px-2 py-3 font-extrabold text-lg lg:text-xl text-center text-white mt-3 rounded-md uppercase w-full">
              Últimos pares
            </p>
          </BlurFade>
        </motion.div>
      </a>

      <a href="/collections/remerones-animados">
        <motion.div
          whileHover={{
            scale: 1.02,
            translateY: -5,
            boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
          }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="relative flex flex-col items-center justify-center"
        >
          <div className="relative flex flex-row items-center justify-center h-72 lg:h-96 w-full border bg-aca-beige border-neutral-200 rounded-md">
            <img
              src={Remerones.src}
              alt=""
              className="object-cover w-full h-72 lg:h-96 select-none rounded-md"
            />
          </div>
          <BlurFade
            delay={0.5}
            className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center text-center w-full"
          >
            <p className="px-2 py-3 font-extrabold text-lg lg:text-xl text-center text-white mt-3 rounded-md uppercase w-full">
              Remerones animados
            </p>
          </BlurFade>
        </motion.div>
      </a>

      <a href="/collections/buzos-animados">
        <motion.div
          whileHover={{
            scale: 1.02,
            translateY: -5,
            boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
          }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="relative flex flex-col items-center justify-center"
        >
          <div className="relative flex flex-row items-center justify-center h-72 lg:h-96 w-full border bg-aca-beige border-neutral-200 rounded-md">
            <img
              src={Buzos.src}
              alt=""
              className="object-cover w-full h-72 lg:h-96 select-none rounded-md"
            />
          </div>
          <BlurFade
            delay={0.5}
            className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center text-center w-full"
          >
            <p className="px-2 py-3 font-extrabold text-lg lg:text-xl text-center text-white mt-3 rounded-md uppercase w-full">
              Buzos animados
            </p>
          </BlurFade>
        </motion.div>
      </a>

      <a href="/collections/buzos-oversize">
        <motion.div
          whileHover={{
            scale: 1.02,
            translateY: -5,
            boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
          }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="relative flex flex-col items-center justify-center"
        >
          <div className="relative flex flex-row items-center justify-center h-72 lg:h-96 w-full border bg-aca-beige border-neutral-200 rounded-md">
            <img
              src={BuzosOversize.src}
              alt=""
              className="object-cover w-full h-72 lg:h-96 select-none rounded-md"
            />
          </div>
          <BlurFade
            delay={0.5}
            className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center text-center w-full"
          >
            <p className="px-2 py-3 font-extrabold text-lg lg:text-xl text-center text-white mt-3 rounded-md uppercase w-full">
              Buzos Oversize
            </p>
          </BlurFade>
        </motion.div>
      </a>

      <a href="/collections/buzos-peluche">
        <motion.div
          whileHover={{
            scale: 1.02,
            translateY: -5,
            boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
          }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="relative flex flex-col items-center justify-center"
        >
          <div className="relative flex flex-row items-center justify-center h-72 lg:h-96 w-full border bg-aca-beige border-neutral-200 rounded-md">
            <img
              src={BuzosPeluche.src}
              alt=""
              className="object-cover w-full h-72 lg:h-96 select-none rounded-md"
            />
          </div>
          <BlurFade
            delay={0.5}
            className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center text-center w-full"
          >
            <p className="px-2 py-3 font-extrabold text-lg lg:text-xl text-center text-white mt-3 rounded-md uppercase w-full">
              Buzos Peluche
            </p>
          </BlurFade>
        </motion.div>
      </a>

      <a href="/collections/sacos-de-lana">
        <motion.div
          whileHover={{
            scale: 1.02,
            translateY: -5,
            boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
          }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="relative flex flex-col items-center justify-center"
        >
          <div className="relative flex flex-row items-center justify-center h-72 lg:h-96 w-full border bg-aca-beige border-neutral-200 rounded-md">
            <img
              src={SacosDeLana.src}
              alt=""
              className="object-cover w-full h-72 lg:h-96 select-none rounded-md"
            />
          </div>
          <BlurFade
            delay={0.5}
            className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center text-center w-full"
          >
            <p className="px-2 py-3 font-extrabold text-lg lg:text-xl text-center text-white mt-3 rounded-md uppercase w-full">
              Sacos De Lana
            </p>
          </BlurFade>
        </motion.div>
      </a>
    </div>
  )
}

export default Index
