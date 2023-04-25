import React from 'react'
import { toast } from "react-toastify";
import { useResendVerificationLinkMutation } from '../../services/authentication'

function ResendVerificationEmail() {

  const [resendVerificationLink,{isLoading}] = useResendVerificationLinkMutation()

  const handleResendEmail = async () =>{
    const response = await resendVerificationLink()
    if (response.error) {
      toast.error(response.error.data.message);
    }
    else if (response.data.success) {
      toast.success(response.data.message)
    }
  }

  return (
    <div className='flex flex-col justify-center items-center' style={{minHeight: '100vh'}}>
      <h3 className='text-base xs:text-lg sm:text-xl md:text-2xl text-gray-600 font-medium '>Please verify your account</h3>
      <button disabled={isLoading} className={`${isLoading ? 'cursor-default' : 'cursor-pointer'} text-blue-600 font-medium mt-6`} onClick={handleResendEmail}>
        {isLoading ? 'Sending...' : 'Resend Email'}
      </button>
    </div>
  )
}

export default ResendVerificationEmail