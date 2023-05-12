import { AiOutlinePlusCircle, AiTwotoneSetting } from "react-icons/ai"
import { BiTask } from "react-icons/bi"
import { IoIosPeople, IoMdStats } from "react-icons/io"
import { MdSpaceDashboard } from "react-icons/md"
import { SiTask } from "react-icons/si"
import { MenuItemWrapper } from "./wrappers"

const Nav = () => {
  const menuItems = ["Dashboard", "My Tasks", "Stats", "Profiles", "Settings"]
  const classname = "w-6 duration-200 group-hover:text-customPelorous"
  const icons = [
    <MdSpaceDashboard key={1} className={classname} size={24} />,
    <BiTask key={2} className={classname} size={24} />,
    <IoMdStats key={3} className={classname} size={24} />,
    <IoIosPeople key={4} className={classname} size={24} />,
    <AiTwotoneSetting key={5} className={classname} size={24} />,
  ]

  return (
    <div className="col-start-1 flex h-full  flex-col justify-evenly bg-customMenuBackground px-8 py-8">
      <div className="flex flex-[0_0_10%] ">
        <div className="flex h-10 items-center space-x-2 ">
          <SiTask size={24} className="h-10" />
          <h1 className="text-xl">Pakkerman</h1>
        </div>
      </div>
      <div className="flex-[0_0_40%]">
        <ul className=" flex  flex-col space-y-1">
          {menuItems.map((item, idx) => (
            <MenuItemWrapper key={item} title={item}>
              {icons[idx]!}
            </MenuItemWrapper>
          ))}
        </ul>
      </div>
      <div className=" flex h-[30%] flex-[0_0_30%] flex-col space-y-4">
        <h1 className="text-customIronsideGray">Teams</h1>
        <ul className="flex flex-col space-y-2 text-xs text-customIron">
          <li className="py3 flex h-8 items-center space-x-2 p-2">
            <div className="group h-4 w-4 rounded-[25%] bg-customTrinidad"></div>
            <p>Sales</p>
          </li>
          <li className="py3 flex h-8 items-center space-x-2 p-2">
            <div className="h-4 w-4 rounded-[25%] bg-customWarning"></div>
            <p>Marketing</p>
          </li>
          <li className="py3 flex h-8 items-center space-x-2 p-2 ">
            <AiOutlinePlusCircle size={20} className="w-4" />
            <p>Add Project</p>
          </li>
        </ul>
      </div>
      <div className="">
        <div className="flex[0_0_20%]  flex items-center justify-center space-x-2 text-sm text-customIronsideGray">
          <span>Light</span>
          <button className="group h-6 w-10 rounded-full bg-customOxfordBlue">
            <div className=" h-4 w-4 translate-x-1 rounded-full border-[0.5px] border-customBunker bg-customPelorous duration-300 group-hover:translate-x-5"></div>
          </button>
          <span>Dark</span>
        </div>
      </div>
    </div>
  )
}

export default Nav
