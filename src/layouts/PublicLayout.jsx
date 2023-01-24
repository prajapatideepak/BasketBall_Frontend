/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, Outlet } from 'react-router-dom'
import logo from "/images/cbl.webp"
const PublicLayout = () => {
    return (
        <div className='min-h-screen'>
            <div className='bg-orange-600  py-4 px-6 flex items-center justify-between'>
               <div className='inline-block'>
                <h1 className='font-bold text-3xl font-mono '>TheCBL</h1>
                        {/* <img className='h-16 w-16'  src={logo} /> */}
               </div>
               <div>
                 <ul className='flex justify-center items-center space-x-10 text-xl font-semibold text-gray-800'>
                    <li className='cursor-pointer'>
                        <Link to={"/"}>
                        Home
                        </Link>
                    </li>
                    <li className='cursor-pointer'>
                        <Link to={"/about"}>

                        About
                        </Link>
                    </li>
                    <li className='cursor-pointer'>
                        <Link to={"/contact"}>

                        Contact
                        </Link>
                    </li>
                           <li className='cursor-pointer'>
                        <Link to={"/news"}>
                        News
                        </Link>
                    </li>
                      <li className='cursor-pointer'>
                        <Link to={"/gallery"}>
                        Gallery
                        </Link>
                    </li>
                     <li className='cursor-pointer'>
                        <Link to={"/login"}>

                        login
                        </Link>
                    </li>
                     <li className='cursor-pointer'>
                        <Link to={"/register"}>
                        Register
                        </Link>
                    </li>
               
                     
                </ul>
               </div>
            </div>
             <div className='bg-[#F5F5F7] w-full'>
                    <Outlet />
            </div>
          
        </div>

    )
}

export default PublicLayout
