import { useEffect, useState } from "react"

const ProgressBar = () => {
  const [progress, setProgress] = useState(0)

  const section1 = Math.min((progress / 25) * 100, 100).toString() + "%"
  const section2 =
    Math.min((Math.max(progress - 25, 0) / 25) * 100, 100).toString() + "%"
  const section3 =
    Math.min((Math.max(progress - 50, 0) / 25) * 100, 100).toString() + "%"
  const section4 =
    Math.min((Math.max(progress - 75, 0) / 25) * 100, 100).toString() + "%"

  useEffect(() => {
    const id = setInterval(() => {
      setProgress((prev) => {
        if (prev === 100) return 0
        return prev + 1
      })
    }, 100)
    return () => {
      clearInterval(id)
    }
  }, [])

  return (
    <div className="relative h-full w-full">
      <div className="flex h-full w-full items-center space-x-2">
        <div className="h-1 w-[22%] rounded-full bg-customIronsideGray" />
        <div className="h-1 w-[22%] rounded-full bg-customIronsideGray" />
        <div className="h-1 w-[22%] rounded-full bg-customIronsideGray" />
        <div className="h-1 w-[22%] rounded-full bg-customIronsideGray" />
      </div>
      <div className="absolute bottom-0 flex h-full w-full items-center space-x-2">
        <div className="h-1 w-[22%]">
          <div
            className="h-1  rounded-full bg-customWarning"
            style={{ width: section1 }}
          />
        </div>
        <div className="h-1 w-[22%]">
          <div
            className="h-1  rounded-full bg-customWarning"
            style={{ width: section2 }}
          />
        </div>
        <div className="h-1 w-[22%]">
          <div
            className="h-1  rounded-full bg-customWarning"
            style={{ width: section3 }}
          />
        </div>
        <div className="h-1 w-[22%]">
          <div
            className="h-1  rounded-full bg-customWarning"
            style={{ width: section4 }}
          />
        </div>
      </div>
    </div>
  )
}
export default ProgressBar
