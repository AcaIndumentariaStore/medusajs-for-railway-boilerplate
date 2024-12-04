import { useFormState } from "react-dom"

import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import Input from "@modules/common/components/input"
import { logCustomerIn } from "@modules/account/actions"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Login = ({ setCurrentView }: Props) => {
  const [message, formAction] = useFormState(logCustomerIn, null)

  return (
    <div className=" bg-white border border-gray-200 rounded-xl shadow-sm w-full max-w-sm flex flex-col items-center p-4 sm:p-7">
      <h1 className="text-large-semi uppercase mb-6">Iniciar sesión</h1>
      <p className="text-center text-base-regular text-ui-fg-base mb-8">
      Inicie sesión para acceder a una experiencia de compra mejorada.
      </p>
      <form className="w-full" action={formAction}>
        <div className="flex flex-col w-full gap-y-2">
          <Input
            label="Email"
            name="email"
            type="email"
            title="Introduzca una dirección de correo electrónico válida."
            autoComplete="email"
            required
          />
          <Input
            label="Contraseña"
            name="contrasena"
            type="contrasena"
            autoComplete="current-contrasena"
            required
          />
        </div>
        <ErrorMessage error={message} />
        <SubmitButton className="w-full mt-6">Iniciar sesión</SubmitButton>
      </form>
      <span className="text-center text-ui-fg-base text-small-regular mt-6">
      ¿No sos miembro?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)}
          className="underline"
        >
          Crear cuenta
        </button>
        .
      </span>
    </div>

    // <div className="bg-white border border-gray-200 rounded-xl shadow-sm w-full max-w-sm">
    //   <div className="p-4 sm:p-7">
    //     <div className="text-center">
    //       <h1 className="block text-2xl font-bold text-gray-800">
    //         Iniciar sesión
    //       </h1>
    //       <p className="mt-2 text-sm text-gray-600">
    //         ¿Aún no tienes una cuenta?
    //         <a
    //           className="text-aca-green decoration-2 hover:underline focus:outline-none focus:underline font-medium"
    //           href="../examples/html/signup.html"
    //         >
    //           Regístrate aquí
    //         </a>
    //       </p>
    //     </div>

    //     <div className="mt-5">
    //       <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6">
    //         o
    //       </div>

    //       <form action={formAction}>
    //         <div className="grid gap-y-4">
    //           <div>
    //             <label htmlFor="email" className="block text-sm mb-2">
    //               Email
    //             </label>
    //             <div className="relative">
    //               <input
    //                 name="email"
    //                 type="email"
    //                 title="Introduzca una dirección de correo electrónico válida."
    //                 autoComplete="email"
    //                 required
    //                 className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-aca-green focus:ring-aca-green disabled:opacity-50 disabled:pointer-events-none"
    //               />
    //               <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
    //                 <svg
    //                   className="size-5 text-red-500"
    //                   width="16"
    //                   height="16"
    //                   fill="currentColor"
    //                   viewBox="0 0 16 16"
    //                   aria-hidden="true"
    //                 >
    //                   <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
    //                 </svg>
    //               </div>
    //             </div>
    //             <ErrorMessage error={message} />
    //           </div>

    //           <div>
    //             <div className="flex justify-between items-center">
    //               <label htmlFor="password" className="block text-sm mb-2">
    //               Contraseña
    //               </label>
    //               <a
    //                 className="inline-flex items-center gap-x-1 text-sm text-aca-green decoration-2 hover:underline focus:outline-none focus:underline font-medium"
    //                 href="../examples/html/recover-account.html"
    //               >
    //                 ¿Olvidaste tu contraseña?
    //               </a>
    //             </div>
    //             <div className="relative">

    //               <input
    //                 name="contrasena"
    //                 type="contrasena"
    //                 autoComplete="current-contrasena"
    //                 required
    //                 className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-aca-green focus:ring-aca-green disabled:opacity-50 disabled:pointer-events-none"
    //               />
    //               <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
    //                 <svg
    //                   className="size-5 text-red-500"
    //                   width="16"
    //                   height="16"
    //                   fill="currentColor"
    //                   viewBox="0 0 16 16"
    //                   aria-hidden="true"
    //                 >
    //                   <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
    //                 </svg>
    //               </div>
    //             </div>
    //             <p
    //               className="hidden text-xs text-red-600 mt-2"
    //               id="password-error"
    //             >
    //               8+ characters required
    //             </p>
    //           </div>

    //           <div className="flex items-center">
    //             <div className="flex">
    //               <input
    //                 id="remember-me"
    //                 name="remember-me"
    //                 type="checkbox"
    //                 className="shrink-0 mt-0.5 border-gray-200 rounded text-aca-green focus:ring-aca-green"
    //               />
    //             </div>
    //             <div className="ms-3">
    //               <label htmlFor="remember-me" className="text-sm">
    //                 Remember me
    //               </label>
    //             </div>
    //           </div>

    //           <SubmitButton className="w-full mt-6">Iniciar sesión</SubmitButton>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Login
