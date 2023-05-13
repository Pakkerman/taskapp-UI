import { useEffect, useState } from "react"
import { FaTasks } from "react-icons/fa"
import { TiThLarge } from "react-icons/ti"

const TaskActivityMenuButtons = () => {
  const [view, setView] = useState(true)
  const selected = "bg-customPelorous text-customReviewBG"
  const unselected = "bg-customIronsideGray text-customTextWhite"

  useEffect(() => {
    const id = setInterval(() => {
      setView((prev) => !prev)
    }, 2000)
    return () => {
      clearInterval(id)
    }
  }, [view])

  return (
    <div className="flex space-x-4">
      <button
        className={`rounded-md  p-2 ${
          view ? selected : unselected
        } duration-200`}
        onClick={() => setView(!view)}
      >
        <FaTasks size={18} />
      </button>
      <button
        className={`rounded-md p-2  duration-200 ${
          view ? unselected : selected
        }`}
        onClick={() => setView(!view)}
      >
        <TiThLarge size={18} />
      </button>
    </div>
  )
}

export default TaskActivityMenuButtons
