const Button = (props: { text: string; color?: "primary" | "warning" }) => {
  const { text, color } = props
  let bgColor = "bg-customIronsideGray"
  if (color === "primary") {
    bgColor = "bg-customPelorous"
  } else if (color === "warning") {
    bgColor = "bg-customWarning"
  }
  return (
    <button className={` h-8 rounded-lg text-customTextWhite ${bgColor} px-4`}>
      {text}
    </button>
  )
}

export default Button
