import React, {useState} from 'react';

function CountApp(){
  const [count, setCount] = useState(0)
  return (
    <>
      <div>count test</div>
      <button onClick={()=>{setCount(count + 1)}}>+1</button>
      {count}
    </>
  )
}

export default CountApp