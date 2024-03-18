import React, { useEffect, useState } from 'react'
import '../component/cardprofile.css'
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { FaTwitter } from "react-icons/fa6";
import LoadingPage from './Loadingpage';
// import tag from "../component/Inputsearch"

const Cardprofile = ({ img, name, joined, url, id, bio, repos, followers, following, locate, email, twitterLink, bussinessLink,loading }) => {








  // const [bio,setBio]=useState('')
  // const [bio,setBio]=useState('')







  return (
    <div className='mt-3'>
      <div className=' border-2 rounded-2xl  container  bg-[#fefefe] '>
        {/* this div contain all profile section */}

        {
          loading?(<LoadingPage/>):(
        
        <div className='border-2 justify-between h-full flex  m-2 lg:m-5 lg:gap-4 lg:flex-row '>


          {/* left side for image section */}
          <div className=' border-2 py-9 pl-3 pr-3  '>
            <img src={img} className='rounded-[100%] w-[60px] h-[60px] lg:w-[150px]  lg:h-[110px] ' />


          </div>


          {/* right side content  */}
          <div className='flex flex-col border-2 w-full py-9 '>
            {/* div for name and joined date */}
            <div className='flex items-center justify-between '>
              <h3 className=' text-[20px] lg:text-[26px] font-bold  text-[#2b3442] name'>{name} </h3>
              <p className='font-mono text-[#7f95b8]  lg:visible'> {joined} </p>
            </div>
            {/* div for id section */}
            <div className=''>
              <a href={url} target='blank' className='text-[#1c88ff] font-bold font-mono lowercase underline'>@{id}</a>

            </div>
            {/* div for bio section */}
            <div className='mt-6'>
              {
                bio === null ? <p className='font-mono bio text-[#2b3442]'>BIO NOT AVAILABLE </p> :
                  <span className='font-mono text-[#2b3449]  bio'>
                    {bio} </span>
              }
            </div>
            {/* common div for  3 individeual section repo follower lilkes */}
            <div className='flex  mt-8 py-6  bg-[#f6f8ff] rounded-2xl items-center justify-evenly  lg:flex-row'>
              <div className='flex flex-col gap-1 items-center'>
                <p className='text-sm'> Repos </p>
                <p className='text-[#2b3444] text-2xl font-bold '>{repos}</p>
              </div>
              <div className='flex flex-col gap-1 items-center'>
                <p className='text-sm'>Followers</p>
                <p className='text-[#2b3444] text-2xl font-bold '>{followers}</p>
              </div>
              <div className='flex flex-col gap-1 items-center'>
                <p className='text-sm'>Following</p>
                <p className='text-[#2b3444] text-2xl font-bold '> {following}</p>
              </div>

            </div>
            {/* location  and links diiv niche banega  */}
            <div className=' flex border-2 mt-5 gap-1 lg:gap-5  pt-4 lg:pb-4 lg:pl-8 pl-3 flex-col  text-[18px] lg:text-[15px]'>
              <div className='flex lg:justify-between  gap-1 flex-col lg:flex-row '>
                {/* left side bala div */}
                <div className='flex gap-4 lg:gap-2 items-center'>
                  {/* icon */}
                  <div className='text-2xl lg:text-xl text-red-600'>
                    <FaMapMarkerAlt />
                  </div>


                  <div>
                    {/* <p className='text-[#4b6ab5]'> {locate} </p> */}

                    {
                      locate === null ? <span className='text-[#4b6ab5]'>NOT AVAILABLE</span> : (<span className='text-[#4b6ab5]'> {locate} </span>)
                    }



                  </div>
                </div>
                {/* right section ke lie */}

                <div className='flex lg:justify-center items-center gap-4 lg:gap-2 '>
                  {/* icon */}
                  <div className='text-2xl lg:text-xl text-red-600'>
                    <FaLink />
                  </div>
                  <div>
                    {
                      email === '' ? <span className='text-[#4b6ab5]'>NOT AVAILABLE</span> : (<span className='text-[#4b6ab5]'> {email} </span>)
                    }
                  </div>
                </div>




              </div>
              {/* second row section for  */}
              <div className='flex justify-between gap-1 flex-col lg:flex-row'>
                {/* left side bala div */}
                <div className='flex items-center lg:justify-center gap-4 lg:gap-2'>
                  {/* icon */}
                  <div className='text-2xl lg:text-xl text-red-600'>
                    <FaTwitter />
                  </div>
                  <div>
                    {
                      twitterLink === null ? <span className='text-[#4b6ab5]'>NOT AVAILABLE</span> : (<span className='text-[#4b6ab5]'> {twitterLink} </span>)
                    }
                  </div>
                </div>
                {/* right section ke lie */}

                <div className='flex items-center gap-4 lg:gap-2 '>
                  {/* icon */}
                  <div className='text-2xl lg:text-xl text-red-600'>
                    <HiOutlineOfficeBuilding />
                  </div>
                  <div>
                    {/* */}
                    {/* <p className='text-[#4b6ab5]'> {locate} </p> */}
                    {
                      bussinessLink === null ? <span className='text-[#4b6ab5]'>NOT AVAILABLE</span> : (<span className='text-[#4b6ab5]'> {bussinessLink} </span>)
                    }
                  </div>
                </div>




              </div>
            </div>
          </div>
        </div>
          )}
      </div>
    </div>

  )
}

export default Cardprofile
