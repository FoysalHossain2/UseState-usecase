import { useState } from 'react'
import './App.css'

function App() {
  const [status, setStatus] = useState(false)

  const [pStatus, setPStatus] = useState(false)
  const [menuStatus, setMenuStatus] = useState(false)



  return (
    <>   

        <button className='absolute' onClick={()=> setMenuStatus(!menuStatus)}>&#9776;</button>
        <div className="w-[80%] fixed h-[100vh] left-[-100%] bg-slate-600">

          <div  className={`menu${menuStatus ? 'activeMenu' : ''}`}>
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>FAQ</li>
          </div>

        </div>


      <div className='w-[1000px] mx-auto'>

       <input type={pStatus ? 'text' : 'password'} />
       <button onClick={() => setPStatus(!pStatus)}>
       {pStatus ? 'Hide' : 'Show'}
       </button>
       <br />




        <button  onClick={() => setStatus(!status)}>Show</button>
        {(status) ? 'Hide' : 'Show'}
       {
       (status) 
       ?  
       <p className='bg-green-600 w-[1000px] mx-auto'>  Welcome to Our World</p> 
        : 
        ""
        }
      </div>
    </>
  )
}

export default App
