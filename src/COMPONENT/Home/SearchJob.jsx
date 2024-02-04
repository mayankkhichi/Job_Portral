import React from 'react'
import Style from './COMPONENT/HOME/Search.module.css'

function SearchJob() {
  return (
    <div  className='overflow-auto border-solid border-4 p-3 m-5 rounded-xl bg-slate-200  min-w-full max-w-4 shadow-xl' >
      <h1 className='text-4xl font-bold'>Search Job Here!</h1>
      <div className='p-2 m-2'>
        <div>
     
      <input
      className='py-1 px-1 rounded-md w-[100%] p-6 text-center font-bold text-2xl min-w-full max-w-4'
        placeholder="Enter Job Type"
     

       />
      </div>
      <br/>
      <div>

     
   
      <input
        type="text"
        placeholder="Enter Job Location"
        className='py-1 px-1 rounded-md w-[100%] p-6 text-center font-bold text-2xl min-w-full max-w-4' 
       

        
       
      />
      </div>
      </div>
       <br/>
       <div className='bg-black font-bold text-center text-4xl text-justify-center text-white justify-center rounded-[25px] py-2 min-w-full max-w-4'>
      <button >
        SEARCH HERE!
      </button>
      </div>
    </div>
  );
   
}

export default SearchJob;
