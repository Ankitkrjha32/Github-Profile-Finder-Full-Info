import React, { useState } from 'react'
import { TfiSearch } from "react-icons/tfi";
import Cardprofile from './Cardprofile';
import { useEffect } from 'react';
// import fetchData from "../component/Cardprofile"

const Inputsearch = ({ tag, changeHandler, clickHandler1 }) => {

// Function to control enter event on input tag

function enterHandler(e){
if(e.key==='Enter'){
  e.preventDefault()
  clickHandler1()
}


}

  {/* <Cardprofile clickHandler1={clickHandler1}/> */ }


  return (



    <div className='mt-6  '>


      <div className=' flex w-full   justify-between items-center h-[80px] bg-[#fefefe]  rounded-2xl '>
        <div className='flex  w-full items-center px-3'>

          <TfiSearch className='w-[30px] h-[25px] text-blue-500 ' />


          <div className='  w-9/12 '>
            <label>
              <input type="text" onKeyDown={enterHandler} onChange={changeHandler} value={tag} placeholder='Enter a GitHub Username...' className=' px-5  outline-none  py-3  bg-[#fefefe]  text-[#627AA1] w-full   font-mono text-xl' />
            </label>
          </div>
        </div>

        <div onClick={clickHandler1} className='full '>
          <button className='bg-[#0079ff] mr-2 text-lg px-6 py-3 rounded-lg font-mono text-[#FFFFFF] font-extrabold  hover:bg-red-400 transition all duration-300 ease-in-out   '>
            Search
          </button>
        </div>

      </div>



    </div>


  )
}

export default Inputsearch
