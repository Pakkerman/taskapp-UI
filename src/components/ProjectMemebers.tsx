import { FaUserCircle, FaRegCalendarCheck } from "react-icons/fa"
import { BiPlus } from "react-icons/bi"

const ProjectMemebers = () => {
  return (
    <div className=" h-12 w-full rounded-full border-[1px]  border-customIronsideGray">
      <div className="flex h-full w-full items-center justify-between">
        <div className="flex -space-x-3 p-2">
          <FaUserCircle
            size={36}
            className="rounded-full border-2 border-customBunker bg-customBunker text-customTrinidad"
          />
          <FaUserCircle
            size={36}
            className="rounded-full border-2 border-customBunker bg-customBunker text-customPelorous"
          />
          <FaUserCircle
            size={36}
            className="rounded-full border-2 border-customBunker bg-customBunker text-customWarning"
          />
        </div>
        <div className="flex items-center p-4">
          <BiPlus className="translate-y-[1.5px]" size={16} />
          <p className="text-lg">2</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectMemebers
