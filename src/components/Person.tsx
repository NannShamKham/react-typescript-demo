type propsPerson = {
   name:{
     first:string,
    last:string
   }
}
const Person = (props:propsPerson) => {
    
  return (
    <div className="text-2xl text-blue-500 font-bold text-center">{props.name.first} {props.name.last}</div>
  )
}

export default Person