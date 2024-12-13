type PersonListProps = {
    names:{
        first:string,
        last:string,
    }[]
}


const PersonList = (props:PersonListProps) => {

  return (
    <div>
        <p className="text-center">PersonList</p>
          {props.names.map(el=><h1 className="text-center text-red-200" key={el.first}>{el.first} {el.last}</h1>)}
    </div>
  )
}

export default PersonList