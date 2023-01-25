import React from "react"
import { Link, Outlet } from 'react-router-dom'



 function Login() {
    return (
            <>
                <div className="flex flex-col space-y-5 justify-center items-center h-screen">
                <h1 className="text-5xl">Login</h1>
                <Link to={"/ForgetPass"}>
                    Forget Password
                </Link>
                </div>
            </>
    )
}

export default Login
