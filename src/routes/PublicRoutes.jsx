import { Navigate, Route, Routes } from 'react-router-dom'
import PublicLayout from '../layouts/PublicLayout'
import AboutUs from '../pages/AboutUs'
import ContactUs from '../pages/ContactUs'
import LandingPage from '../pages/LandingPage'
import Login from '../pages/Login'
import News from '../pages/News'
import Register from '../pages/Register'
import "../App.css"
import Password from '../pages/Pass/Password'
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
            <Route path="/ForgetPassword" element={<ForgetPassword />} />
            <Route path="/term&condition" element={<TermsandConditions />} />
            <Route path="/Password" element={<Password />} />
            <Route path="/*" element={<PageNotFound />} /> 
            <Route index element={<LandingPage />} />
        </Route>
    </Routes>
)

export default PublicRoutes
 

