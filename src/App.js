// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HomeOne from './compontents/Pages/HomeOne/HomeOne';
import Header from './compontents/Shared/Header/Header';
import Footer from './compontents/Shared/Footer/Footer';
import WebHosting from './compontents/Pages/WebHosting/WebHosting';
import SupportDesk from './compontents/Pages/SupportDesk/SupportDesk';
import AppsLanding from './compontents/Pages/AppsLanding/AppsLanding';
import CloudBasedSaas from './compontents/Pages/CloudBasedSaas/CloudBasedSaas';
import AboutUs from './compontents/Pages/AboutUs/AboutUs';
import ContactUs from './compontents/Pages/ContactUs/ContactUs';
import AboutCompany from './compontents/Pages/AboutCompany/AboutCompany';
import ServiceOne from './compontents/Pages/Service/ServiceOne';
import ServiceTwo from './compontents/Pages/Service/ServiceTwo';
import CaseStudy from './compontents/Pages/Cases/CaseStudy';
import CaseDetails from './compontents/Pages/Cases/CaseDetails';
import JobListing from './compontents/Pages/Jobs/JobListing';
import JobDetails from './compontents/Pages/Jobs/JobDetails';
import Team from './compontents/Pages/Team/Team';
import PriceAndPlaning from './compontents/Pages/PriceAndPlaning/PriceAndPlaning';
import Login from './compontents/Pages/Login/Login';
import Register from './compontents/Pages/Register/Register';
import Faq from './compontents/Pages/Faq/Faq';
import PageNotFound from './compontents/Pages/PageNotFound/PageNotFound';
import BlogClassic from './compontents/Pages/Blogs/BlogClassic';
import Blogs from './compontents/Pages/Blogs/Blogs';
import BlogDetails from './compontents/Pages/Blogs/BlogDetails';


function App() {
  return (
   
    <Router>
      <Header></Header>
      <Routes>
        {/* <Route exact path="/" element={<HomeOne/>}> */}
        <Route exact path="/" element={<HomeOne/>}></Route>
        <Route  path="/web-hosting" element={<WebHosting/>}></Route>
        <Route  path="/support-desk" element={<SupportDesk/>}></Route>
        <Route  path="/apps-landing" element={<AppsLanding/>}></Route>
        <Route  path="/cloud-base-saas" element={<CloudBasedSaas/>}></Route>
        <Route path="/about-us" element={<AboutUs/>}></Route>
        <Route path="/about-company" element={<AboutCompany/>}></Route>
        <Route path="/service-one" element={<ServiceOne/>}></Route>
        <Route path="/service-two" element={<ServiceTwo/>}></Route>
        <Route path="/case-study" element={<CaseStudy/>}></Route>
        <Route path="/case-study-details" element={<CaseDetails/>}></Route>
        <Route path="/job-listing" element={<JobListing/>}></Route>
        <Route path="/job-details" element={<JobDetails/>}></Route>
        <Route path="/our-team" element={<Team/>}></Route>
        <Route path="/pricing-plans" element={<PriceAndPlaning/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/faq" element={<Faq/>}></Route>
        <Route path="/blog" element={<Blogs/>}></Route>
        <Route path="/blog-classic" element={<BlogClassic/>}></Route>
        <Route path="/blog-details" element={<BlogDetails/>}></Route>





        
        <Route path="*" element={<PageNotFound/>}></Route>
        <Route path="/contact" element={<ContactUs/>}></Route>
        
        {/* <Route  path="/" element={<SupportDesk/>}></Route> */}
      </Routes>
      <Footer></Footer>
    </Router>
       
  );
}

export default App;
