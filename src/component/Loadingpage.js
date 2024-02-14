import React from 'react'
import '../component/loadingpage.css'
const LoadingPage = () => {
    return (
        <div className=' flex  flex-col justify-center items-center max-h-[600px] min-h-[400px]'> 
                 <div class="spinner  "></div>
                 <div className='text-green-400 font-semibold pt-4'>Fetching Data</div>
                 <div className='font-[900] text-red-600 pt-6'>Please Check Your Internet Connection </div>


        </div>
       
        
    )
}

export default LoadingPage
