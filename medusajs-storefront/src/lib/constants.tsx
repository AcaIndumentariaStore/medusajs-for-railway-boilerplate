import React from "react"
import { CreditCard } from "@medusajs/icons"

import Ideal from "@modules/common/icons/ideal"
import Bancontact from "@modules/common/icons/bancontact"
import PayPal from "@modules/common/icons/paypal"
import { SiMercadopago } from "react-icons/si";
import { CiBank } from "react-icons/ci";
import { MdOutlineAttachMoney } from "react-icons/md";

export const paymentInfoMap: Record<
  string,
  { title: string; icon: React.JSX.Element }
> = {
  stripe: {
    title: "Credit card",
    icon: <CreditCard />,
  },
  "stripe-ideal": {
    title: "iDeal",
    icon: <Ideal />,
  },
  "stripe-bancontact": {
    title: "Bancontact",
    icon: <Bancontact />,
  },
  paypal: {
    title: "PayPal",
    icon: <PayPal />,
  },
  mercadopago: {
    title: "Mercado Pago",
    icon: <SiMercadopago className="text-xl"/>,
  },
  Efectivo: {
    title: "Efectivo",
    icon: <MdOutlineAttachMoney className="text-xl"/>,
  },
  "Transferencia Bancaria": {
    title: "Transferencia",
    icon: <CiBank className="text-xl"/>,
  },
  manual: {
    title: "Test payment",
    icon: <CreditCard />,
  },
}

// Add currencies that don't need to be divided by 100
export const noDivisionCurrencies = [
  "krw",
  "jpy",
  "vnd",
  "clp",
  "pyg",
  "xaf",
  "xof",
  "bif",
  "djf",
  "gnf",
  "kmf",
  "mga",
  "rwf",
  "xpf",
  "htg",
  "vuv",
  "xag",
  "xdr",
  "xau",
]
