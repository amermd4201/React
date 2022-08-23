import React from 'react'
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom'
import Dashboard from './Dashboard'
import Login from './Login'
import Register from './Register'

function Navbar() {
    return (
        <div>
            <BrowserRouter>
            <ul>
                <li><Link to="/login">Sighn In</Link></li>
                <li><Link to="/register">Sighn up</Link></li>
            </ul>
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/dashboard" element={<Dashboard/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Navbar