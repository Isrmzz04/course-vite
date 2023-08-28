
const index = (
  {
    children = "button",
    variant = "bg-[#FF6161]",
    onClick = () => { }
  }
) => {
  return (
    <button
      className={`text-[14px] py-[10px] px-[24px] rounded-[50px] ${variant}`}
      onClick={onClick}>
      {children}
    </button>
  )
}

export default index