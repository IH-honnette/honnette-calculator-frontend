import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Dashboard  from './pages/Dashboard';
import "./App.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
          </div>
          {/* navigationBar*/}
            <div>
              <Routes>
                {/* Dashboard */}
                <Route path="/" element={<Dashboard />} />
              </Routes>
            </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
