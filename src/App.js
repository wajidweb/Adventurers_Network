import React from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import "./App.css"
import Home from "./pages/Home";
export default function App() {
  return (
    <Router>
    <Routes>
       <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
      
       </Route>

       {/* <Route path="/mazdoor" element={<Layout />}>
          <Route index element={<SignUp />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<MazdoorDashboard />} />
          
       </Route> */}
       
     </Routes>
   </Router>
  )
}
