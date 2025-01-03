import React, { useRef } from 'react'

const App = () => {

  let body = useRef(document.body)
  let color  = useRef(null)
  let colorChange = (e)=>{
    
    body.current.style.backgroundColor = e.target.value
  }

  let colorhandler=()=>{
    color.current.click()
  }

  return (
    <div className='h-screen w-full flex justify-center items-center'>

      <div  onClick={colorhandler} className=' h-[200px] w-[200px] bg-teal-600 rounded-full'>
        <input ref={color}  type="color"
        hidden
        onChange={colorChange}
        />
      </div>
      
    </div>
  )
}

export default App
