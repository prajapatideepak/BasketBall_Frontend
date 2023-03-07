import React, { lazy } from 'react'
import { Route, Routes, Navigate, NavLink } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { TbFilePlus } from "react-icons/tb"
import { MdDelete } from "react-icons/md"
import { FiEdit } from "react-icons/fi"
import { toast } from "react-toastify";
import { TbNews } from "react-icons/tb"




const NewsList = () => {
  const navigate = useNavigate();
  const notify = () => toast("Login Successfull!!")
  const [NewsList, setNewsList] = React.useState(
    [
      {
        News_id: 1,
        photo: "CBL_Images/FWCAQ_Luanda_358.webp",
        Title: "The LJ Cup",
        Description: "Lorem ipsum dolor sit amet consectekjdbfvjdjfbhvjdbfvjdb",
        Date: "20/04/2022"
      },
      {
        News_id: 2,
        photo: "CBL_Images/FWCAQ_Luanda_358.webp",
        Title: "NBA National",
        Description: "Lorem ipsum dolor sit amet consectekjdbfvjdjfbhvjdbfvjdb",
        Date: "20/10/2022"
      },
      {
        News_id: 3,
        photo: "CBL_Images/FWCAQ_Luanda_358.webp",
        Title: "The Basketball Legue",
        Description: "Lorem ipsum dolor sit amet consectekjdbfvjdjfbhvjdbfvjdb",
        Date: "04/12/2022"
      },
      {
        News_id: 4,
        photo: "CBL_Images/FWCAQ_Luanda_358.webp",
        Title: "The LJ",
        Description: "Lorem ipsum dolor sit amet consectekjdbfvjdjfbhvjdbfvjdb",
        Date: "25/12/2022"
      }
    ]
  )


  function handleDelete (deletingNews) {
    const newNewsList = NewsList.filter((News) => News != deletingNews);
    setNewsList(newNewsList)
  }
  
  return (
    <>
      <div className='px-10 h-full'>
        <div className='flex justify-between  py-10'>
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
            <div>

            </div>
            <ul className='flex px-10 justify-between bg-gray-300 rounded-lg py-[10px] shadow-sm text-black font-medium'>
              <li className='w-20 text-center'>Sr No</li>
              <li className='w-20 text-center'>Photo</li>
              <li className='w-20 text-center'>Title</li>
              <li className='w-52 text-center'>Description</li>
              <li className='w-20 text-center'>Date</li>
              <li className='w-20 text-center'>Action</li>
            </ul>
            {
              NewsList.length > 0 ?
                NewsList.map((News, index) => {
                  return (
                    <ul className='flex items-center justify-between font-normal px-10 py-2 rounded-lg cursor-pointer hover:bg-gray-100 bg-white shadow-sm my-3'>
                      <li className='w-20  text-center'>{News.News_id}</li>
                      <li className='w-20 flex justify-center items-center'>
                        <img src={News.photo} alt="" className='rounded-full border-[3px] shadow-sm w-20 h-20' />
                      </li>
                      <li className='w-20 text-center text-sm '>{News.Title}</li>
                      <li className='w-52 text-start text-sm overflow-hidden'>{News.Description}</li>
                      <li className='w-20 text-center text-sm'>{News.Date}</li>
                      <li className='w-20 text-center flex items-center justify-center space-x-3'>
                        <FiEdit className='text-[19px] ' />
                        <MdDelete className='text-[21px] text-red-500 ' onClick={handleDelete(News.News_id)} />
                      </li>
                    </ul>
                  )
                })
                :
                <div className='flex justify-center items-center w-full py-10'>
                  <TbNews className=" text-2xl sm:text-3xl md:text-[30px] text-gray-400 mr-2" />
                  <p className='text-xs xs:text-sm sm:text-lg 2xl:text-[23px] font-medium text-gray-400'>New Not Found</p>
                </div>
            }
          </div>
        </div>


      </div>
    </>
  );
};

export default NewsList
