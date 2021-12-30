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
        
        {/* <Route  path="/" element={<SupportDesk/>}></Route> */}
      </Routes>
      <Footer></Footer>
    </Router>
       
  );
}

export default App;
