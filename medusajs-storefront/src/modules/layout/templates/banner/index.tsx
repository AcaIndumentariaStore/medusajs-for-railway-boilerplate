"use client"
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";

export default function Banner() {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-aca-green px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-white">
        <p className="text-xs md:text-sm/6 hidden md:block">
          ¡Aprovechá nuestros envíos! 🚚
        </p>
        <p className="hidden md:block">-</p>
        <p className="text-[9px] md:text-sm/6">
          📍 Envío Gratuito dentro del AMBA.
        </p>
        <p className="">-</p>
        <p className="text-[9px] md:text-sm/6">
          🌎 Al interior del país por solo $X.
        </p>
        <p className="hidden md:block">-</p>
        <p className="text-xs md:text-sm/6 hidden md:block">
          ¡Comprá ahora y recibí donde estés! ✨
        </p>
      </div>
      <div className="flex flex-1 justify-end">
        <button
          type="button"
          className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
          onClick={handleDismiss}
        >
          <span className="sr-only">Dismiss</span>
          <RxCross1 aria-hidden="true" className="size-5 text-white" />
        </button>
      </div>
    </div>
  );
}
