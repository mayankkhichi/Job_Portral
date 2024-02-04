import React from 'react'
import styles from "./CssComponent/Header.module.css"

function Header() {
  return (
    <>
    <div className="w-[100%] bg-slate-200 shadow-md flex flex-wrap  py-2 ">
        <div className='flex justify-center w-[50%]'>
        <div className='w-[40%] my-auto mx-5 text-black text-xl flex justify-left font-bold'>LOGO NAME</div>
         <div className='w-[40%] my-auto text-black text-xl flex justify-left font-bold'> <a href=''>Available JOBS</a></div>
         </div>
         <div className='flex w-[50%]'>
         <div className='w-[40%] text-white text-2xl flex justify-center me-3  bg-black rounded-[20px] p-1 h-auto'><button className=" "> JOB SEARCH LOGIN</button></div>
         <div className='w-[40%] text-green text-2xl flex justify-center  ms-4  bg-white rounded-[20px] p-1 h-auto '><button className=" "> Company LOGIN</button></div>
         </div>
         <div>
         <i class="fa-solid fa-bars"></i>
         </div>
     </div>
    </>
       
   
  )
}

export default Header
