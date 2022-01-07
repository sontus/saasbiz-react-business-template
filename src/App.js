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




        
        <Route path="/contact" element={<ContactUs/>}></Route>
        
        {/* <Route  path="/" element={<SupportDesk/>}></Route> */}
      </Routes>
      <Footer></Footer>
    </Router>
       
  );
}

export default App;
