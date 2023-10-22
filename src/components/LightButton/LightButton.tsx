import React from 'react'

type Props = {
  onClick: () => void,
  title: string
}

export default function LightButton({title, onClick}: Props) {
  return (
    <button
      type="button"
      className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
      onClick={onClick}
    >
      {title}
    </button>
  )
}
