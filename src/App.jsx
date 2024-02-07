import { useState } from "react"


function App() {
  let [condition,setCondition]=useState(false)
  let handleClick=()=>{
    setCondition(!condition)

  }

  
  

  return (
    <>
    <div className="bg-blue-200 h-screen pt-20">
      <div className="bg-yellow-100 mx-auto w-[700px] p-5">
        <div className="flex justify-between">
          <h2 className="text-2xl font-semibold pb-2">What is your Name?</h2>
          <span onClick={handleClick} className="cursor-pointer text-2xl">{condition?"+":"-"}</span>
        </div>
        {
          condition&&
        <p className="text-base ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam itaque in reiciendis voluptatibus corporis possimus a pariatur voluptatem? Reiciendis, voluptatibus?</p>
        }
        
      </div>
    </div>
    
    </>
  )
}

export default App
