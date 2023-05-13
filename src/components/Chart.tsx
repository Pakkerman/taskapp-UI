import { useEffect, useState } from "react"

export const ChartBar = (props: { progress: number; color: string }) => {
  const [progress, setProgress] = useState(0 + props.progress)
  const bgColor = `bg-${props.color}`

  useEffect(() => {
    const id = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) prev = 0
        return prev + 2
      })
    }, 100)
    return () => {
      clearInterval(id)
    }
  }, [])
  return (
    <div className=" relative flex h-[81%] w-8 flex-col items-center justify-end">
      <div
        style={{ height: progress.toString() + "%" }}
        className={` w-full rounded-md ${bgColor}`}
      ></div>
      <p className="absolute pb-1 text-xs font-bold text-customMenuBackground">
        {progress}%
      </p>
    </div>
  )
}

export const ChartBG = () => {
  const percentage: number[] = [100, 80, 60, 40, 20]
  return (
    <div className=" flex h-full flex-col ">
      {percentage.map((num) => (
        <div key={num} className=" flex h-full items-center justify-between">
          <div className="flex w-full flex-col">
            <div className="flex-[1_1_20%] text-customIronsideGray">
              <div className="flex justify-between">
                <p>{num}%</p>
                <div className="truncate">-------------------------</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
