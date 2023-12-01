import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Candy from './Candy';
import Chips from './Chips';
import Soda from './Soda';
import NavBar from "./NavBar";

const App = () => {
    return (
        <Router>
               <NavBar />
            <Routes>
                <Route path="/" element={<VendingMachine />} />
                <Route path="/Candy" element={<Candy />} />
                <Route path="/Chips" element={<Chips />} />
                <Route path="/Soda" element={<Soda />} />
            </Routes>
        </Router>
    );
};

export default App;