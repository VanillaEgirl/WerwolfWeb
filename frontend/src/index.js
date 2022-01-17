import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import RoleSelectionPage from './components/RoleSelectionPage/RoleSelectionPage';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/setup/roleselection" element={<RoleSelectionPage />} />
        </Routes>
      </BrowserRouter>,
    document.getElementById('root')
);