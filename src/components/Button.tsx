type ButtonProps = {
    handleClick :(event:React.MouseEvent<HTMLButtonElement>) => void
}
const Button = (props:ButtonProps) => {
  return (
    <button className="text-white bg-purple-400 px-4 py-2 rounded-sm" onClick={props.handleClick}>Button</button>
  )
}

export default Button