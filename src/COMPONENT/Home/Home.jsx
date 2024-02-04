import React from 'react'
import SearchJob from './SearchJob'
import JobCard from './JobCard'
import JobLines from './JobLines'


function Home() {
  return (
    <>
     <div>
     <JobLines></JobLines> 
     </div>
       <div className='flex w-full'>

  <div className='w-[40%] justify-start items-start '>
    <SearchJob></SearchJob>
  </div>
  <div >
    <JobCard></JobCard>
  </div>
</div>

    </>
  )
}

export default Home
