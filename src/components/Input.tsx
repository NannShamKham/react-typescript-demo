type InputProps = {
    value:string,
    handleChange:(e:React.ChangeEvent<HTMLInputElement>)=>void,
    inputType:string
}
const Input = (props:InputProps) => {
    const handleInputChage = (event:React.ChangeEvent<HTMLInputElement>) =>{
        console.log(event.target.value,"From Input Compo")
    }
  return (
    <input type="text" value={props.value} onChange={handleInputChage} />
  )
}

export default Input