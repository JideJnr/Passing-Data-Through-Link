import React from 'react'
import {useLocation} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function Go() {
    const location = useLocation()
    const {text} = location.state

    const navigate = useNavigate();

  return (

      <div className='w-screen h-screen p-5  bg-[#eeeeee]'>
        <p>
            This Text Was Passed Through The Link
        </p>
          <p>
                {text}

          </p>

          <div className='flex-col text-white text-center ' onClick={() => navigate(-1)}>
          <p>GO BACK</p>
        </div>
        </div>

  
  
  )
}

export default Go