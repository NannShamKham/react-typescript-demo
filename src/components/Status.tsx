type StatusProps ={
    status:string,
}
const Status = (props:StatusProps) => {
    let message ;
    if(props.status == 'loading'){
        message=`Loading..`;
    }else if(props.status == 'success'){
        message= "Data Fetch Successfully";
    }else if(props.status == 'error'){
        message ="Error Fetching data"
    }

   
  return (
    <div>
        <h1 className='text-2xl text-center'>{message}</h1>
        
    </div>
  )
}

export default Status