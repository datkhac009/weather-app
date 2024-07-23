import {  Route, BrowserRouter as Router, Routes, } from "react-router-dom";
import Home from "../Pages/Home";
import Test from './../Pages/test/test';



function Mainlayout() {
    return (
        <div>
           <Router>
           <Home/>
            {/* <Test/> */}
           </Router> 
        </div>
    );
}

export default Mainlayout;