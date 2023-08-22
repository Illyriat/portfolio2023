import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from '../components/reusables/NavBar';

import Home from '../components/pages/Home';
import Portfolio from '../components/pages/Portfolio';
import Contact from '../components/pages/Contact';

import RockPaperScissors from '../components/miniGames/RockPaperScissors';
import TicTacToePVP from '../components/miniGames/TicTacToePVP';
import TictacToePVE from '../components/miniGames/TicTacToePVE';
import ConnectFour from '../components/miniGames/ConnectFour';
import Chess from '../components/miniGames/Chess';

import ErrorPage from '../components/pages/ErrorPage';


function MainContainer() {
    return(
        <Router>

            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/contact' element={<Contact />} />

                <Route path='/rockpaperscissors' element={<RockPaperScissors />} />
                <Route path='/tictactoe-pvp' element={<TicTacToePVP />} />
                <Route path='/tictactoe-pve' element={<TictacToePVE />} />
                <Route path='/connectfour' element={<ConnectFour />} />
                <Route path='/chess' element={<Chess />} />

                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    );
};

export default MainContainer;