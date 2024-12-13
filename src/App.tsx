import { useState } from 'react'
import Greet from './components/Greet'
import Person from './components/Person'
import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Button from './components/Button';
import Input from './components/Input';

function App() {
  const [count, setCount] = useState(0);
  const personName = {
    first:"Bruno",
    last:"Mars"
  }
  const nameList = [
    {
      first:"Laim ",
      last:"Miler"
    },
    {
      first:"Clark ",
      last:"Kent"
    },
    {
      first:"Princes",
      last:"Diana"
    }
  ]
  const handleClick = (event) =>{
    console.log("click event!",event)
  }
  return (
    <div>
      {/* <Heading>This is Heading</Heading>
      <Greet name="One" count={9} isLoggin={true}/>
      <Greet name="No Messages" isLoggin={true}/>
      <Person name={personName} />
      <PersonList names={nameList}/>
      <Status status='error'/>
      <Oscar>
        <Heading>This is Oscar Heading</Heading>
      </Oscar> */}
      <Button handleClick={handleClick}/>
      <Input inputType='text' value='test' handleChange={e=>console.log(e.target.value)}/>
      
    </div>
  )
}

export default App
