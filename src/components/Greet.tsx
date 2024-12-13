
type GreetPorps = {
    name:string,
    count?:number,
    isLoggin:boolean,
}
const Greet = (props:GreetPorps) => {
  const {count = 0} = props;
  return (
    <div>
        <h1 className="py-10 text-2xl font-bold text-center"> {props.isLoggin ?`Welcome ${count} ! You have read ${props.count} messages }`:`Please Login`} </h1>
    </div>
  )
}

export default Greet
