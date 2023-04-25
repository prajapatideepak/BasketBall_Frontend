import React from 'react'
import {useParams} from 'react-router-dom'
import {MdVerified} from 'react-icons/md'
import { useVerifyAccountQuery } from '../../services/authentication'

function VerifyAccount() {
  const {user_id, token} = useParams()

  const { data, isLoading, error, isError } = useVerifyAccountQuery({user_id, token})
  return (
    <div className='flex justify-center items-center' style={{minHeight: '100vh'}}>
      {
        isLoading
        ?
          <h3 className='text-base sm:text-lg md:text-xl font-semibold text-gray-600'>Verifying account, Please wait...</h3>
        :
          isError
          ?
            <h3 className='text-base sm:text-lg md:text-xl font-semibold text-red-500'>
              {error.data.message}
            </h3>
          :
            <h3 className='text-base sm:text-lg md:text-xl font-semibold text-green-700 flex justify-center items-center'>
              <MdVerified className="text-lg sm:text-xl md:text-2xl mr-2"/>
              { data.message }
            </h3>
      }
    </div>  
  )
}

export default VerifyAccount