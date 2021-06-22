// import { useState } from "react";


// export function Button(){
  
  
  //   const [counter, setCounter] = useState(0);
  
  
  //   function increment(){
    //     setCounter( counter + 1 )
    //     // console.log(counter);
    //   }
    
    
    //   return (
      //     <button onClick={increment}>
      //       {counter}
      //     </button>
      //   )
      // }
      
import { useState } from "react";

export function Button(){
  const [counter, setCounter ] = useState(0)
  
  function addCounter(){
    setCounter(counter + 5)

    // counter++;
    // console.log(counter);
  }

  return (
    <button onClick={addCounter}>
      {counter}
    </button>
  )
}