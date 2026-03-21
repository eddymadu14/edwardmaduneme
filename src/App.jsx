
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio  from "./pages/port";





function AppRoutes() {
  return (
    <Routes>
      {/* Public routes */}
      
      <Route path="/" element={<Portfolio />} />
      

<Route path="/profile" element={<Portfolio />} />




      
      
         {/* <Route path="verify-success" element={< VerifyEmailSuccess />} />
         <Route path="verify-failed" element={< VerifyEmailFailed />} />    

     */}
    
    </Routes>
  );
}

function App() {
  return (
 
      <Router>
        <AppRoutes />
      </Router>

  );
}

export default App;
