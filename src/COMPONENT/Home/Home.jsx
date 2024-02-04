import React from 'react'
import SearchJob from './SearchJob'
import JobCard from './JobCard'
import JobLines from './JobLines'


function Home() {
  return (
    <>
       
       {/**JOB LINES COMPONENTS */}
      <div className='flex h-[70px] justify-center w-full'><h1 className=' text-pretty text-7xl font-bold py-3 px-5 underline-offset-2 '>Job Connects Easy Way to Find The Job</h1></div>
       
       
       
       
       <div className='flex w-full'>


       {/*Search JOB COmponent */}
  <div className='w-[40%] justify-start items-start '>
      <div  className=' border-solid border-4 p-3 m-5 rounded-xl bg-slate-200  min-w-[200px] shadow-xl' >
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
                   <button > SEARCH HERE! </button>
                  </div>
      </div>
  </div>




  <div>
     <div>JOB CARDs</div>
  </div>
</div>

    </>
  )
}

export default Home
