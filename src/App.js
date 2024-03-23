import './App.css';
import Cardprofile from './component/Cardprofile';
import Inputsearch from './component/Inputsearch';
import { MdNightlight } from "react-icons/md";
// import { MdOutlineLightMode } from "react-icons/md";
import { BsSunFill } from "react-icons/bs";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import "@fontsource/space-mono"; // Defaults to weight 400
import "@fontsource/space-mono/400.css"; // Specify weight
import "@fontsource/space-mono/400-italic.css"; // Specify weight and style
import LoadingPage from './component/Loadingpage';

function App() {

  const [loading, setLoading] = useState(false)


  async function fetchData() {
    try {
      setLoading(true)
      const Url = `https://api.github.com/users/${tag}`
      const output = await axios.get(Url);
      setLoading(false)
      toast.success('Sucessfully Searched')
      const { data } = output
      setName(data.name)
      setBio(data.bio)
      setId(data.login)
      setJoined(data.created_at)
      setFollowers(data.followers)
      setFollowing(data.following)
      setRepos(data.public_repos)
      setImg(data.avatar_url)

      setEmail(data.blog)
      setLocate(data.location)
      setTwitterLink(data.twitter_username)
      setBussinessLink(data.company)
      setUrl(data.html_url)

    }

    catch {

      console.log('Username Not Valid')

      // <h1>username </h1>
      setLoading(false)
      // setValidUsername('UserName NOT Valid')
      toast.error('username Not Valid')
    }


  }





  const [name, setName] = useState('')
  const [id, setId] = useState('')
  const [bio, setBio] = useState('')
  const [repos, setRepos] = useState('')
  const [followers, setFollowers] = useState('')
  const [following, setFollowing] = useState('')
  const [joined, setJoined] = useState('')
  const [img, setImg] = useState('')
  const [email, setEmail] = useState('')
  const [locate, setLocate] = useState('')
  const [twitterLink, setTwitterLink] = useState('')
  const [bussinessLink, setBussinessLink] = useState('')
  const [url, setUrl] = useState('')








  const [tag, setTag] = useState("ankitkrjha32")

  function changeHandler(e) {

    setTag(e.target.value)

  }

  function clickHandler1() {
    console.log('submit kr dia ab fetch data call hua ')
    // checking null value pe enter tho nahi maar rha 
    {
      tag === '' ? alert('Please Enter Username') : (fetchData())
    }
    console.log('info load ho gya ')
  }








  


  const [mode, setMode] = useState('LIGHT')


  function modeSetter() {
    console.log('clicked')

    setMode(mode=="DARK"?("LIGHT"):("DARK"))
  
  }

  
  useEffect(() => {
    
    if (mode == 'DARK') {
      // setMode('LIGHT')
      document.documentElement.classList.remove("dark")

    }

    else if (mode == 'LIGHT') {
      // setMode('DARK')
      document.documentElement.classList.add("dark")



    }
  
  }, [mode])

  useEffect(()=>{
    clickHandler1()
  },[])

  return (
    // background full width scrren size
    <div className=" 
    
    bg-[#f6f8ff] w-[100vw] h-[100vh] flex items-center justify-center overflow-hidden 
    dark:bg-[#141D2F]
    ">
      {/* contain full content of width 48 percent of total screen */}
      <div className=' w-[500px] lg:w-[700px] mx-auto flex flex-col  lg:mb-2 lg:mt-10  '>
        {/* hall div for title and dark light button */}
        <div className='flex  px-3 justify-between  items-center w-full   '>
          {/* title tag h3 */}
          <h3 className=' font-[700] text-[30px] lg:text-[30px] font-mono   text-[#4b6a9b] dark:text-[#FFFFFF] '> DevDetective</h3>
          {/* div for light button  */}
          <div onClick={modeSetter} className='flex gap-x-2'>
            <p className='font-mono  tracking-wider font-bold leading-6  lg:visible text-[#4b6a9b] dark:text-[#FFFFFF] '>{mode}</p>
            <div className='cursor-pointer'>
              {mode == 'DARK' ? (<MdNightlight className='text-[22px] rounded-md ' />) : (< BsSunFill className='text-[22px] rounded-md dark: text-[#FFFFFF]' />)
              }
            </div>
          </div>

        </div>
        {/* <div className='flex justify-end text-red-700 font-extrabold'>
            {validusername}
        </div> */}
        <div>


          <Inputsearch tag={tag} changeHandler={changeHandler}
            clickHandler1={clickHandler1} />
          <Cardprofile tag={tag}
            changeHandler={changeHandler}
            clickHandler1={clickHandler1} loading={loading}
            img={img} joined={joined} url={url} name={name} id={id} bio={bio} repos={repos} followers={followers} following={following} locate={locate} email={email} twitterLink={twitterLink} bussinessLink={bussinessLink} />

        </div></div>


    </div>
  );
}

export default App;
