import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const addValue=()=>{
    setCount(count+1);
  }
  const removeValue=()=>{
    if(count>0){
      setCount(count-1);
    }
    else{
      alert("Count cannot be negative");
    }
  }
  return (
    <>
      <p>Counter {count}</p>
      <button onClick={addValue}>Add +1 on {count}</button>
      <br />
      <button onClick={removeValue}>Remove 1 from {count}</button>
    </>
  )
}

export default App
