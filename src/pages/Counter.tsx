import { useEffect, useState } from "react";


export function Counter(){
  

  const [ counter, setCounter] = useState(0);
  
  function handleClick(){
    setCounter(counter + 1)
    console.log(counter)
  }
  
   useEffect(() => {
    document.title= `foi ${counter} ` 
 }, [counter])
  
  return(
    <button 
    onClick={handleClick}>
      {counter}
    </button>
  );
}