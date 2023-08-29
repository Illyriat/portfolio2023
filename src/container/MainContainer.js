import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from '../components/reusables/NavBar';

import Home from '../components/pages/Home';
import Portfolio from '../components/pages/Portfolio';
import Contact from '../components/pages/Contact';

import RockPaperScissors from '../components/miniGames/RockPaperScissors';
import TicTacToePVP from '../components/miniGames/TicTacToePVP';
import TictacToePVE from '../components/miniGames/TicTacToePVE';
import Hangman from '../components/miniGames/Hangman';
import ConnectFour from '../components/miniGames/ConnectFour';
import Snake from '../components/miniGames/Snake';
import Tetris from '../components/miniGames/Tetris';
import Pacman from '../components/miniGames/Pacman';
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
                <Route path='/hangman' element={<Hangman />} />
                <Route path='/connectfour' element={<ConnectFour />} />
                <Route path='/snake' element={<Snake />} />
                <Route path='/tetris' element={<Tetris />} />
                <Route path='/pacman' element={<Pacman />} />
                <Route path='/chess' element={<Chess />} />

                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    );
};

export default MainContainer;