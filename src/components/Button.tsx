import { useState } from "react"
export function Button(){



const [ counter, setCounter ] = useState(0);

function increment(){
  setCounter(counter +2);
  console.log(counter)
}




  return (
    <button onClick={increment}>
      {counter}
    </button>
  )
}