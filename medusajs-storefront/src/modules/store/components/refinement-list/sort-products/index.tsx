"use client"
import { ChangeEvent } from "react"
import FilterRadioGroup from "@modules/common/components/filter-radio-group"
import { Fragment, useState } from "react"
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
  TransitionChild,
} from "@headlessui/react"

export type SortOptions = "price_asc" | "price_desc" | "created_at"

type SortProductsProps = {
  sortBy: SortOptions
  setQueryParams: (name: string, value: SortOptions) => void
  "data-testid"?: string
}

const sortOptions = [
  {
    value: "created_at",
    label: "Últimos lanzamientos",
  },
  {
    value: "price_asc",
    label: "Precio: Bajo -> Alto",
  },
  {
    value: "price_desc",
    label: "Precio: Alto -> Bajo",
  },
]

const SortProducts = ({
  "data-testid": dataTestId,
  sortBy,
  setQueryParams,
}: SortProductsProps) => {
  const handleChange = (e: ChangeEvent<HTMLButtonElement>) => {
    const newSortBy = e.target.value as SortOptions
    setQueryParams("sortBy", newSortBy)
  }

  return (
    <>
      <Menu as="div" className="lg:left-32 top-4 relative">
        <MenuButton className="flex flex-row items-center text-base font-medium text-neutral-700 hover:text-neutral-900">
          <h3>Ordenar por</h3>
          <span className="mx-1 text-neutral-400 group-hover:text-neutral-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              color="#272526"
              fill="none"
            >
              <path
                d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </MenuButton>

        <Transition
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <MenuItems className="absolute right-2 lg:right-32 z-10 mt-2 w-56 rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none py-2">
            <div className="ml-3 text-sm lg:text-base text-neutral-600 ">
              <FilterRadioGroup
                title="Ordenar por"
                items={sortOptions}
                value={sortBy}
                handleChange={handleChange}
                data-testid={dataTestId}
              />
            </div>
          </MenuItems>
        </Transition>
      </Menu>
    </>
  )
}

export default SortProducts
