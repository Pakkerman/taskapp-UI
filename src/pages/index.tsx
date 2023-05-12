import { type NextPage } from "next"

import { CiCalendarDate, CiSearch } from "react-icons/ci"
import { CgProfile } from "react-icons/cg"
import { FiMoreHorizontal } from "react-icons/fi"
import { FaCalendarCheck, FaCubes, FaForward } from "react-icons/fa"

import Head from "next/head"
import Link from "next/link"

import {
  TasksItemRowWrapper,
  TeamsItemWrapper,
  CardWrapper,
} from "~/components/wrappers"
import Nav from "~/components/Nav"
import { ChartBG, ChartBar } from "~/components/Chart"

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

const Home: NextPage = () => {
  return (
    <div className="h-[85svh] w-[90vw] overflow-hidden rounded-[20px] bg-customBunker">
      <div className="grid h-full grid-cols-[20%_80%]">
        <Nav />
        <div className="flex flex-col space-y-6 p-8">
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
          <section className="flex flex-[0_0_300px] space-x-8">
            {/* 3 cards */}
            <div className="flex-[1_1_30%]">
              <CardWrapper>
                <div></div>
              </CardWrapper>
            </div>
            <div className="flex-[1_1_40%]">
              <CardWrapper>
                <div className="relative flex h-full flex-col">
                  <div className="flex h-6 items-center justify-between">
                    <h1 className="font-bold">Overall Infomation</h1>
                    <FiMoreHorizontal
                      size={24}
                      className="text-customIronsideGray "
                    />
                  </div>
                  <div className=" flex h-8 items-center space-x-2">
                    <h1 className="text-3xl ">57</h1>
                    <div className="h-6 w-[1px] translate-y-1 bg-customIron" />
                    <h1 className="text-3xl">124</h1>
                    <h4 className="translate-y-2 text-sm text-customIronsideGray ">
                      tasks done
                    </h4>
                  </div>
                  <div className=" flex h-full items-center justify-between">
                    <div className="flex h-[75%] w-[28%] flex-col items-center justify-center space-y-1 rounded-lg bg-customWarning text-customTuatara">
                      <div className="flex h-6 items-center ">
                        <FaCubes size={24} />
                      </div>
                      <p className="h-10 text-3xl font-bold ">42</p>
                      <p className="text-sm ">Projects</p>
                    </div>
                    <div className="flex h-[75%] w-[28%] flex-col items-center justify-center space-y-1 rounded-lg bg-customPelorous text-customTuatara">
                      <div className="flex h-6 items-center">
                        <FaForward size={22} />
                      </div>
                      <p className="h-10 text-3xl font-bold">08</p>
                      <p className="text-sm ">In Progress</p>
                    </div>
                    <div className="flex h-[75%] w-[28%] flex-col items-center justify-center space-y-1 rounded-lg bg-customTrinidad text-customTuatara">
                      <div className="flex h-6 items-center">
                        <FaCalendarCheck size={22} />
                      </div>
                      <p className="h-10 text-3xl font-bold">69</p>
                      <p className="text-sm ">Completed</p>
                    </div>
                  </div>
                </div>
              </CardWrapper>
            </div>
            <div className="flex-[1_1_30%]">
              <CardWrapper>
                <div className="relative flex h-full flex-col">
                  {/* label */}
                  <div className=" flex h-6 items-center justify-between ">
                    <h1 className="font-bold">Team Activity</h1>
                    <div className="rounded-full bg-customPelorous bg-opacity-30 px-3 py-1 mix-blend-screen ">
                      <p className="text-xs font-bold text-customPelorous">
                        96%
                      </p>
                    </div>
                  </div>
                  {/* label */}

                  <ChartBG />
                  {/* chart bars */}
                  <div className=" absolute bottom-0 h-full w-full pl-14">
                    <div className="flex  h-full items-end justify-evenly">
                      <ChartBar progress={69} color={"customWarning"} />
                      <ChartBar progress={92} color={"customPelorous"} />
                      <ChartBar progress={86} color={"customTrinidad"} />
                    </div>
                  </div>
                </div>
              </CardWrapper>
            </div>
          </section>
          <section className="flex-[1_1_30%] truncate ">
            <h1 className="pb-4 text-xl font-bold">Tasks Activity</h1>
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
              status={"In Progress"}
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
