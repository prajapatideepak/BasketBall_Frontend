import { lazy } from 'react'
import { Route, Routes, Navigate, NavLink } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { TbFilePlus } from "react-icons/tb"
import { MdOutlineDelete } from "react-icons/md"
import { FiEdit } from "react-icons/fi"
import { toast } from "react-toastify";



const NewsList = () => {
  const navigate = useNavigate();
  const notify = () => toast("Login Successfull!!");

  return (
    <>
      <div className='px-10 h-full'>
        <div className='flex justify-between  py-5'>
          <h1 className=' font-semibold text-2xl'>
            News List
          </h1>
          <button
            onClick={() => { navigate("/news/add-edit"); }}
            type="submit"
            className="bg-slate-900  relative inline-flex items-center justify-center  px-4 py-1.5 sm:px-8 sm:py-[8px] overflow-hidden font-medium tracking-tighter text-white rounded-lg cursor-pointer group"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#ee6730] rounded-lg group-hover:w-full group-hover:h-56"></span>
            <div className='flex items-center space-x-2'>

              <span className="relative">Add News</span>
              <TbFilePlus className='relative text-xl' />
            </div>
          </button>
        </div>
        <div>
          <div className=' h-full '>
            <ul className='flex px-10 justify-between bg-gray-300 rounded-lg py-[10px] shadow-sm text-black font-medium'>
              <li className='w-20 text-center'>Sr No</li>
              <li className='w-20 text-center'>Photo</li>
              <li className='w-20 text-center'>Title</li>
              <li className='w-52 text-center'>Description</li>
              <li className='w-20 text-center'>Date</li>
              <li className='w-20 text-center'>Action</li>
            </ul>
            <ul className='flex items-center justify-between font-normal px-10 py-2 rounded-lg cursor-pointer hover:bg-gray-100 bg-white shadow-sm my-3'>
              <li className='w-20  text-center'>1</li>
              <li className='w-20 flex justify-center items-center'>
                  <img src="CBL_Images/logo5.png" alt="" />
              </li>
              <li className='w-20 text-center'>Title</li>
              <li className='w-52 text-start overflow-hidden'>Lorem ipsum dolor sit amet consectekjdbfvjdjfbhvjdbfvjdbhfjhbbdjfbhjdhbfvjbdfjvhbt..</li>
              <li className='w-20 text-center'>Date</li>
              <li className='w-20 text-center'>Action</li>
            </ul>
          </div>
        </div>


      </div>
    </>
  );
};

export default NewsList
