import React from 'react';
// import '../index.css';
import { IoLocationSharp } from 'react-icons/io5';
import { HiPhone } from 'react-icons/hi';
import { IoMdMailOpen } from 'react-icons/io';
import { IoMdPerson } from 'react-icons/io';
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import * as Yup from 'yup';
import { useFormik } from 'formik';


const ContactUs = () => {
    const initialValues={
        name: '',
        email: '',
        message: ''
    }
    const validationSchema = Yup.object({
        name: Yup.string().matches(/^[a-zA-Z]+$/, "Please enter only characters").min(2).max(25).required("Name is required"),
        email: Yup.string().email().required("Email is required"),
        message: Yup.string().required("Message is required"),
    })


    const {values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit} = useFormik({
        validationSchema,
        initialValues,
        onSubmit : (data) => {
            console.log(data)
        }
    })
  
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <>
      <section className=''>
        <div className=' flex justify-center  items-center h-24 sm:h-32 md:h-48 bg-black'>
          <span className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>
            Contact Us
          </span>
        </div>
        <div className='flex justify-start'>
          <div className='right-content w-full sm:w-2/4 lg:mx-32 md:mx-28 sm:mx-20 mx-10 my-2'>
            <h1 className='capitalize lg:mt-32 mb-5 sm:text-4xl text-xl font-medium text-[#ee6730]'>Get in touch</h1>
            <form onSubmit={handleSubmit}>
              <div className="">
                <div>
                  <label htmlFor="input-group-1" className="block mb-2 font-medium text-gray-900">Name</label>
                  <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <IoMdPerson aria-hidden="true" className='w-5 h-5 text-slate-900' fill="currentColor" />
                    </div>
                    <input
                      type="text"
                      id="input-group-1"
                      name="name"
                      className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 block w-full pl-10 p-2.5"
                      placeholder="Enter your name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className="mb-6">
                    {
                      errors.name && touched.name
                        ?
                        <small className='text-red-600'>{errors.name}</small>
                        :
                        null
                    }
                  </div>
                </div>

                <div>
                  <label htmlFor="input-group-1" className="block mb-2 font-medium text-gray-900">Email</label>
                  <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <IoMdMailOpen aria-hidden="true" className='w-5 h-5 text-slate-900' fill="currentColor" />
                    </div>
                    <input
                      type="text"
                      id="input-group-1"
                      name="email"
                      className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 block w-full pl-10 p-2.5"
                      placeholder="Enter your email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className="mb-6">
                    {
                      errors.email && touched.email
                        ?
                        <small className='text-red-600'>{errors.email}</small>
                        :
                        null
                    }

                  </div>
                </div>

                <div>
                  <label htmlFor="input-group-1" className="block mb-2 font-medium text-gray-900">Your message</label>
                  <textarea
                    id="message"
                    rows="5"
                    name="message"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-400 focus:outline-none focus:ring-2"
                    placeholder="Enter your message..."
                    value={values.message}
                    onChange={handleChange}
                      onBlur={handleBlur}
                  />
                </div>
                <div className="mb-6">
                  {
                    errors.message && touched.message
                      ?
                      <small className='text-red-600'>{errors.message}</small>
                      :
                      null
                  }

                </div>


                <div>
                  <button type="submit" className="bg-slate-900 my-10 relative inline-flex items-center justify-center w-full px-4 py-1.5 sm:px-8 sm:py-3 overflow-hidden font-mono font-medium tracking-tighter text-white rounded-lg cursor-pointer group">
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#ee6730] rounded-lg group-hover:w-full group-hover:h-56"></span>
                    <span className="relative">Submit</span>
                  </button>
                </div>

              </div>
            </form>
          </div>
        </div>
      </section>

      <section className='FAQs'>
        <div className='flex justify-start lg:mx-32 md:mx-28 sm:mx-20 mx-10 my-2'>
          <div className='left-content w-3/4 lg:my-24 md:mt-16 mt-12'>
            <div className=''>
              <h1 className='capitalize mt-2 mb-5 sm:text-4xl text-xl font-medium text-[#ee6730]'>Frequently asked questions</h1>
            </div>
            <div className='mt-12'>
              <Accordion className='mb-5' open={open === 1}>
                <AccordionHeader className='text-slate-900 text-lg sm:text-xl font-medium text-left' onClick={() => handleOpen(1)}>
                  How many types of registrations are there?
                </AccordionHeader>
                <AccordionBody className="font-medium text-gray-500 mt-2 text-justify">
                  There are 4 types of registrations: <br></br>
                  1) visitor (Normal user) <br></br>
                  2) player (Can register as player to play in team) <br></br>
                  3) team (Can register a team to participate in tournaments) <br></br>
                  4) tournament (Can host the tournament)
                </AccordionBody>
              </Accordion>
              <Accordion className='mb-5' open={open === 2}>
                <AccordionHeader className='text-slate-900 text-lg sm:text-xl font-medium text-left' onClick={() => handleOpen(2)}>
                  Can I see live score of the match?
                </AccordionHeader>
                <AccordionBody className="font-medium text-gray-500 mt-2 text-justify">
                  Yes you can. Simply create and account and login. If any match is going on, then live score will be appear on your home page.
                </AccordionBody>
              </Accordion>
              <Accordion className='mb-5' open={open === 3}>
                <AccordionHeader className='text-slate-900 text-lg sm:text-xl font-medium text-left' onClick={() => handleOpen(3)}>
                  How can I register as player?
                </AccordionHeader>
                <AccordionBody className="font-medium text-gray-500 mt-2 text-justify">
                  Steps for player registration: <br></br>
                  1) If you visiting first time then go to the registration page and create an account else login and go to registration page and follow the steps 4, 5 and 6. <br></br>
                  2) Verify the email received to your email address. <br></br>
                  3) Page will open after clicking verify button. Click the "Next" button appeared on the page.<br></br>
                  4) Click on "Player". <br></br>
                  5) Fill some basic detail and click "Next".<br></br>
                  6) Fill some game related information and submit. And you have done.
                </AccordionBody>
              </Accordion>
              <Accordion className='mb-5' open={open === 4}>
                <AccordionHeader className='text-slate-900 text-lg sm:text-xl font-medium text-left' onClick={() => handleOpen(4)}>
                  How can I create my team?
                </AccordionHeader>
                <AccordionBody className="font-medium text-gray-500 mt-2 text-justify">
                  Steps to create team: <br></br>
                  1) If you visiting first time then go to the registration page and create an account else login and go to registration page and follow the steps 4, 5 and 6. <br></br>
                  2) Verify the email received to your email address. <br></br>
                  3) Page will open after clicking verify button. Click the "Next" button appeared on the page.<br></br>
                  4) Click on "Team". <br></br>
                  5) Fill some details.<br></br>
                  6) Search your players and add them in your team and submit. And your team is ready.
                </AccordionBody>
              </Accordion>
              <Accordion className='mb-5' open={open === 5}>
                <AccordionHeader className='text-slate-900 text-lg sm:text-xl font-medium text-left' onClick={() => handleOpen(5)}>
                  How can I host tournament?
                </AccordionHeader>
                <AccordionBody className="font-medium text-gray-500 mt-2 text-justify">
                  Steps to host a tournament: <br></br>
                  1) If you visiting first time then go to the registration page and create an account else login and go to registration page and follow the steps 4 and 5. <br></br>
                  2) Verify the email received to your email address. <br></br>
                  3) Page will open after clicking verify button. Click the "Next" button appeared on the page.<br></br>
                  4) Click on "Tournament Host". <br></br>
                  5) Fill some details. And there you go.
                </AccordionBody>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <section className='quick-support'>
        <div className='grid grid-cols-1 lg:mx-32 md:mx-28 sm:mx-20 mx-10 my-2'>
          <div className='bottom-content lg:mb-32 md:mb-28 mb-20'>
            <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
              <div className='location mx-0 mb-10'>
                <div className='flex flex-row sm:flex-col'>
                  <IoLocationSharp className='text-[#ee6730] text-2xl' />
                  <h1 className='ml-2 sm:ml-0 capitalize text-[#ee6730] font-medium mb-4'>Visit us</h1>
                </div>
                <p className='text-gray-800 tracking-wide mb-1'>LJ Campus, LJ College Rd,</p>
                <p className='text-gray-800 tracking-wide'>Sarkhej-Okaf, Gujarat 382210</p>
              </div>

              <div className='call mx-0 mb-10'>
                <div className='flex flex-row sm:flex-col'>
                  <HiPhone className='text-[#ee6730] text-2xl' />
                  <h1 className='ml-2 sm:ml-0 capitalize text-[#ee6730] font-medium mb-4'>Call us</h1>
                </div>
                <p className='text-gray-800 tracking-wide mb-1'>Phone +91 70411 06701</p>
                <p className='text-gray-800 tracking-wide'>Phone +91 72848 55130</p>
              </div>

              <div className='email mx-0 mb-10'>
                <div className='flex flex-row sm:flex-col'>
                  <IoMdMailOpen className='text-[#ee6730] text-2xl' />
                  <h1 className='ml-2 sm:ml-0 capitalize text-[#ee6730] font-medium mb-4'>Email us</h1>
                </div>
                <p className='text-gray-800 tracking-wide mb-1'>support@wellbenix.com</p>
                <p className='text-gray-800 tracking-wide'>sales@wellbenix.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactUs