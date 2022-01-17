import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './components/MainPage/MainPage';
import RoleSelectionPage from './components/RoleSelectionPage/RoleSelectionPage';
import EnterPlayersPage from "./components/EnterPlayersPage/EnterPlayersPage";

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/setup/roleselection" element={<RoleSelectionPage/>}/>
            <Route path="/setup/enterplayers" element={<EnterPlayersPage/>}/>
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);