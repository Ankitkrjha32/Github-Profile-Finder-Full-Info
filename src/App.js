import logo from './logo.svg';
import './App.css';
import Cardprofile from './component/Cardprofile';
import Inputsearch from './component/Inputsearch';
import { TbSunHigh } from "react-icons/tb";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import "@fontsource/space-mono"; // Defaults to weight 400
import "@fontsource/space-mono/400.css"; // Specify weight
import "@fontsource/space-mono/400-italic.css"; // Specify weight and style
import LoadingPage from './component/Loadingpage';

function App() {

const [loading,setLoading]=useState(false)
const [validusername,setValidUsername]=useState('')

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
      setValidUsername('UserName NOT Valid')
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








  const [tag, setTag] = useState('ankitkrjha32')

  function changeHandler(e) {
    console.log(e.target.value)
    setTag(e.target.value)

  }
  function clickHandler1() {

    console.log('iske niche load nahi ho rha')
    fetchData()
    // 
    // toast.error("Sucessfully Searched")
    // fetchData()

    console.log('load hua ')
  }




  useEffect(() => {
    clickHandler1()
  }, [])

  // const [mode,setMode]=useState('LIGHT')
  // function modeChanger(){
  //   setMode('DARK')
  // }
  return (
    // background full width scrren size
    <div className='w-[100vw] h-[100vh] flex items-center justify-center bg-[#f6f8ff]'>
      {/* contain full content of width 48 percent of total screen */}
      <div className='w-[47%]  mx-auto flex flex-col mb-8'>
        {/* hall div for title and dark light button */}
        <div className='flex justify-between items-center'>
          {/* title tag h3 */}
          <h3 className='font-bold text-[2rem] font-mono  text-[#4b6a9b]  '> DevDetective</h3>
          {/* div for light button  */}
          <div className='flex gap-3'>
            <p className='font-mono font-extrabold text-[#697C9A] '>LIGHT</p>
            <div className='cursor-pointer'>
              <TbSunHigh className='text-[22px] rounded-md ' />
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
