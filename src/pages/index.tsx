import { type NextPage } from "next"

import { CiCalendarDate, CiSearch } from "react-icons/ci"
import { CgProfile } from "react-icons/cg"
import { SiTask } from "react-icons/si"
import { MdSpaceDashboard } from "react-icons/md"
import { IoMdStats, IoIosPeople } from "react-icons/io"
import { BiTask } from "react-icons/bi"
import { AiTwotoneSetting, AiOutlinePlusCircle } from "react-icons/ai"

import Head from "next/head"
import Link from "next/link"

import { ReactElement } from "react"

import {
  MenuItemWrapper,
  TasksItemRowWrapper,
  TeamsItemWrapper,
} from "~/components/wrappers"

const Button = (props: { text: string; color: "primary" | "warning" }) => {
  const { text, color } = props
  let bgColor = "bg-customPelorous"
  if (color === "warning") {
    bgColor = "bg-customWarning"
  }
  return (
    <button className={` h-8 rounded-lg text-customBunker ${bgColor} px-4`}>
      {text}
    </button>
  )
}

const Card = () => {
  return (
    <div className="h-full w-full rounded-[15px] bg-customMenuBackground">
      cards
    </div>
  )
}

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

const Home: NextPage = () => {
  return (
    <div className="h-[85svh] w-[90vw] overflow-hidden rounded-[20px] bg-customBunker">
      <div className="grid h-full grid-cols-[20%_80%]">
        <Nav />
        <div className="flex flex-col space-y-10 p-8">
          <section className=" flex flex-[0_0_50px] justify-between">
            <div>
              <h1 className="text-3xl font-bold">Manage Your Projects</h1>
              <p className="text-sm text-customIronsideGray">
                Track your projects, tasks & team activity here
              </p>
            </div>
            <ul className=" flex h-10 items-center space-x-3">
              <li className="flex h-8 w-8 items-center justify-center rounded-md bg-customMenuBackground">
                <CiSearch />
              </li>
              <li className="flex h-8 w-8 items-center justify-center rounded-md bg-customMenuBackground">
                <CiCalendarDate />
              </li>
              <li className="flex h-10 w-10 items-center justify-center rounded-full bg-customMenuBackground">
                <CgProfile />
              </li>
            </ul>
          </section>
          <section className="flex flex-[0_0_250px] space-x-8">
            {/* 3 cards */}
            <div className="flex-[1_1_30%]">
              <Card />
            </div>
            <div className="flex-[1_1_40%]">
              <Card />
            </div>
            <div className="flex-[1_1_30%]">
              <Card />
            </div>
          </section>
          <section className="flex-[1_1_30%] truncate ">
            <h1 className="pb-6 text-xl font-bold">Tasks Activity</h1>
            <div className="flex justify-between space-x-4 py-2 text-customIronsideGray">
              <div className="flex-[1_0_15%] ">
                <h4>Assigned to</h4>
              </div>
              <div className="flex-[1_1_15%] truncate">
                <h4>Deadline</h4>
              </div>
              <div className="flex w-40 flex-[1_1_40%] justify-between">
                <h4>Task</h4>
                <h4>Status</h4>
              </div>
              <div className="flex-[1_1_30%] ">
                <h4 className="">Project</h4>
              </div>
            </div>
            <TasksItemRowWrapper
              name={"Pakk"}
              deadline={new Date().toDateString()}
              task={"Desing the website and mainain backend"}
              status={"In Prograss"}
              project="Pakland Lab"
            >
              <CgProfile size={28} />
            </TasksItemRowWrapper>
            <TasksItemRowWrapper
              name={"Pakk"}
              deadline={new Date().toDateString()}
              task={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ad accusantium molestias quas sed molestiae minus sapiente ratione! Incidunt cum, beatae explicabo labore at delectus sequi sint repellendus aliquid cumque"
              }
              status={"Review"}
              project="Basis Interactive Ltd"
            >
              <CgProfile size={28} />
            </TasksItemRowWrapper>
            <TasksItemRowWrapper
              name={"Pakk"}
              deadline={new Date().toDateString()}
              task={"Desing the website and mainain backend"}
              status={"Done"}
              project="Blur & Co."
            >
              <CgProfile size={28} />
            </TasksItemRowWrapper>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Home
