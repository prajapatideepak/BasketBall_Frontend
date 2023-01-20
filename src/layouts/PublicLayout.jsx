/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, Outlet } from 'react-router-dom'

const PublicLayout = () => {
    return (
        <>
            <div className='bg-orange-500 py-3'>
                <ul className='flex justify-center items-center space-x-10 text-xl font-semibold text-white'>
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
                        <Link to={"/galary"}>
                        Galary
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
             <div className='bg-amber-50 rounded shadow-sm p-10 p-lg-15 mx-auto'>
                    <Outlet />
                </div>
          
        </>

    )
}

export default PublicLayout
