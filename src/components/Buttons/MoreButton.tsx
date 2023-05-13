import React from "react"
import { FiMoreHorizontal } from "react-icons/fi"

const MoreButton = () => {
  return (
    <button className="group flex h-8 w-8 items-center justify-center rounded-md text-customIronsideGray transition hover:bg-customPelorous ">
      <FiMoreHorizontal
        size={24}
        className="transition group-hover:rotate-90"
      />
    </button>
  )
}

export default MoreButton
