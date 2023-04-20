import { Navigate, Route, Routes } from 'react-router-dom'
import PublicLayout from '../layouts/PublicLayout'
import AboutUs from '../pages/AboutUs'
import ContactUs from '../pages/ContactUs'
import LandingPage from '../pages/LandingPage'
import Login from '../pages/Login'
import News from '../pages/News'
import Register from '../pages/Register'
import "../App.css"
import ResetPassword from '../pages/Pass/ResetPassword'
import Gallery from '../pages/Gallery'
import ForgetPassword from "../pages/Pass/ForgetPassword"
import Role from '../pages/Role'
import PageNotFound from "../pages/Error";
import TermsandConditions from '../pages/Term&Condistions'

const PublicRoutes = () => (
    <Routes>
        <Route element={<PublicLayout />}>
            <Route path='/' element={<LandingPage />}  />
            <Route path='/register' element={<Register/>}  />
            <Route path='/about' element={<AboutUs />}  />
            <Route path='/contact' element={<ContactUs />}  />
            <Route path="/login" element={<Login />} /> 
            <Route path="news/*" element={<News />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path='/role' element={<Role />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route path="/terms-and-condition" element={<TermsandConditions />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/*" element={<PageNotFound />} /> 
            <Route index element={<LandingPage />} />
        </Route>
    </Routes>
)

export default PublicRoutes
 

