import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import Clock from './components/Clock';
import DrumApp from "./components/Drum";
import Calculator from "./components/Calculator";
import Quote from './components/Quote';
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Clock />} />
        <Route path="/drum" element={<DrumApp />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);