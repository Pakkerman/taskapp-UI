export const MenuItemWrapper = (props: {
  title: string
  children: JSX.Element
  selected: boolean
}) => {
  console.log(props.selected)
  return (
    <li
      className={`group flex h-8 items-center space-x-2 rounded-lg p-2 py-5  duration-200 hover:cursor-pointer hover:bg-customTuatara ${
        props.selected ? "cursor-pointer bg-customTuatara" : ""
      }`}
    >
      {props.children}
      <p
        className={`text-customIron duration-200 group-hover:text-customPelorous ${
          props.selected ? "text-customPelorous" : ""
        }`}
      >
        {props.title}
      </p>
    </li>
  )
}

export const TeamsItemWrapper = (props: {
  title: string
  color?: string
  children: JSX.Element
}) => {
  return (
    <li className="group flex h-8 items-center space-x-2 rounded-lg p-2 py-5  duration-200 hover:cursor-pointer hover:bg-customTuatara">
      {props.children}
      <p className="text-customIron duration-200 group-hover:text-customPelorous">
        {props.title}
      </p>
    </li>
  )
}

export const TasksItemRowWrapper = (props: {
  name: string
  deadline: string
  task: string
  status: "In Progress" | "Review" | "Done"
  project: string
  children?: JSX.Element
}) => {
  const { name, deadline, task, status, project } = props

  let statusColor = "bg-customTrinidad"
  switch (status) {
    case "In Progress":
      statusColor = "bg-customTrinidad text-customTrinidad"
      break
    case "Review":
      statusColor = "bg-customWarning text-customWarning"
      break
    case "Done":
      statusColor = "bg-customPelorous text-customPelorous"
      break
  }

  return (
    <div className="flex h-10 items-center justify-between space-x-4 py-6  text-sm text-customIron">
      <div className="flex h-10 flex-[1_0_15%] items-center space-x-2">
        {props.children}
        <p>{name}</p>
      </div>
      <div className="flex-[1_1_15%] truncate">
        <h4>{deadline}</h4>
      </div>
      <div className="flex w-40 flex-[1_1_40%] justify-between">
        <p className="w-[60%] truncate">{task}</p>
        <div
          className={`max-w-[35%] truncate rounded-full ${statusColor}  bg-opacity-30 px-3 text-center text-xs leading-6 mix-blend-screen `}
        >
          {status}
        </div>
      </div>
      <div className="flex flex-[1_1_30%] items-center justify-between">
        <h4 className="">{project}</h4>
        <button className=" rounded-lg bg-customMenuBackground p-2 text-xs  ">
          Details
        </button>
      </div>
    </div>
  )
}

export const CardWrapper = (props: { children: JSX.Element }) => {
  return (
    <div className="flex h-full w-full flex-col space-y-2 rounded-[15px] bg-customMenuBackground p-6">
      {props.children}
    </div>
  )
}
