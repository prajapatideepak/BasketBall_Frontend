import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import AsideMenuMain from '../Component/aside/AsideMenuMain'

const PrivateLayout = () => {
    return (
        <>
            <AsideMenuMain/>
        </>
    )
}

export default PrivateLayout
