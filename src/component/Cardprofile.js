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
      <div className='w-full border-2 rounded-2xl  container  bg-[#fefefe] '>
        {/* this div contain all profile section */}

        {
          loading?(<LoadingPage/>):(
        
        <div className='border-2 justify-between h-full flex m-5 gap-4'>


          {/* left side for image section */}
          <div className=' border-2 py-9 pl-3 pr-3  '>
            <img src={img} className='rounded-[100%] w-[150px]  h-[110px] ' />


          </div>


          {/* right side content  */}
          <div className='flex flex-col border-2 w-full py-9 '>
            {/* div for name and joined date */}
            <div className='flex items-center justify-between '>
              <h3 className='text-[26px] font-bold  text-[#2b3442] name'>{name} </h3>
              <p className='font-mono text-[#7f95b8]'> {joined} </p>
            </div>
            {/* div for id section */}
            <div className=''>
              <a href={url} target='blank' className='text-[#1c88ff] font-bold font-mono lowercase underline'> {id}</a>

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
            <div className='flex  mt-8 py-6  bg-[#f6f8ff] rounded-2xl items-center justify-evenly'>
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
            <div className='flex border-2 mt-5 gap-5 pr-3 pt-4 pb-4 pl-8 flex-col '>
              <div className='flex justify-between '>
                {/* left side bala div */}
                <div className='flex gap-2 items-center'>
                  {/* icon */}
                  <div className='text-xl'>
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

                <div className='flex justify-center items-center gap-2'>
                  {/* icon */}
                  <div className='text-xl'>
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
              <div className='flex justify-between'>
                {/* left side bala div */}
                <div className='flex items-center justify-center gap-3'>
                  {/* icon */}
                  <div className='text-xl'>
                    <FaTwitter />
                  </div>
                  <div>
                    {
                      twitterLink === null ? <span className='text-[#4b6ab5]'>NOT AVAILABLE</span> : (<span className='text-[#4b6ab5]'> {twitterLink} </span>)
                    }
                  </div>
                </div>
                {/* right section ke lie */}

                <div className='flex gap-3 items-center '>
                  {/* icon */}
                  <div className='text-xl'>
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
