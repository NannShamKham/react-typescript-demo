type HeadingProps = {
    children:string
}
const Heading = (props:HeadingProps) => {
  return (
    <div className="text-2xl text-center">{props.children}</div>
  )
}

export default Heading