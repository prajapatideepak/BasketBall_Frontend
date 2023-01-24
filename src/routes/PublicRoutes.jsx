import { Navigate, Route, Routes } from 'react-router-dom'
import PublicLayout from '../layouts/PublicLayout'
import AboutUs from '../pages/AboutUs'
import ContactUs from '../pages/ContactUs'
import Gallery from '../pages/Gallery'
import LandingPage from '../pages/LandingPage'
import Login from '../pages/Login'
import News from '../pages/News'
import Register from '../pages/Register'
import "../App.css"
import Passlink from '../pages/Pass/Passlink'
import Password from '../pages/Pass/Password'

const PublicRoutes = () => (
    <Routes>
        <Route element={<PublicLayout />}>
            <Route path='/' element={<LandingPage />}  />
            <Route path='/register' element={<Register/>}  />
            <Route path='/about' element={<AboutUs />}  />
            <Route path='/contact' element={<ContactUs />}  />
            <Route path="/login" element={<Login />} /> 
            <Route path="/news" element={<News />} />
            <Route path="/galary" element={<Galary />} /> 
            <Route path="/ForgetPass" element={<Passlink />} /> 
            <Route path="/Password" element={<Password />} /> 
            <Route index element={<LandingPage />} />

        </Route>
    </Routes>
)

export default PublicRoutes
 

