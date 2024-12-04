"use client";

import { useEffect } from "react";

type RedirectToWhatsAppProps = {
  orderId: string;
  displayId: string;
};

const RedirectToWhatsApp = ({ orderId, displayId }: RedirectToWhatsAppProps) => {
  useEffect(() => {
    const whatsappNumber = "+5491169407581";
    const message = encodeURIComponent(
      `¡Hola, Aca Indumentaria! Acabo de realizar un pedido en su web, aguardo la confirmación y coordinación de la entrega. Mi número de pedido es *${displayId}*.`
    );

    const url = `https://wa.me/${whatsappNumber}?text=${message}`;

    const timer = setTimeout(() => {
      window.location.href = url;
    }, 3000);

    return () => clearTimeout(timer);
  }, [displayId]);

  return null;
};

export default RedirectToWhatsApp;
