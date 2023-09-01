import './reusableStyles/NavBar.css';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as GameIcon} from './reusableStyles/navicons/gamepad.svg';
import { ReactComponent as LinkedIn } from './reusableStyles/navicons/linkedin.svg';
import { ReactComponent as Github } from './reusableStyles/navicons/github.svg';
import { ReactComponent as Email } from './reusableStyles/navicons/email.svg';
import { ReactComponent as Settings} from './reusableStyles/navicons/settings.svg';
import { ReactComponent as Home } from './reusableStyles/navicons/home.svg';
// import { ReactComponent as Toggle } from './reusableStyles/navicons/toggle.svg';
import { ReactComponent as Portfolio } from './reusableStyles/navicons/portfolio.svg';

import { CSSTransition  } from 'react-transition-group';

function NavBar() {
    return (
        <NavMain>
            <Link to='/' className='nav-item'><NavItem icon={<Home />} /></Link>
            <Link to='/portfolio' className='nav-item'><NavItem icon={<Portfolio />} /></Link>
            <NavItem icon={<GameIcon />}>
                <DropdownMenu></DropdownMenu>
            </NavItem>
            <Link to='https://www.linkedin.com/in/james-robson-m/' target='_blank' className='nav-item'><NavItem icon={<LinkedIn />} /> </Link>
            <Link to='https://github.com/Illyriat' target='_blank' className='nav-item'><NavItem icon={<Github />} /> </Link>
            <Link to='/contact' className='nav-item'><NavItem icon={<Email />} /></Link>
            <NavItem icon={<Settings />}>
                <DropdownMenuSettings></DropdownMenuSettings>
            </NavItem>    
        </NavMain>
    );
}

function NavMain(props) {
    return ( 
        <nav className='navbar'>
            <ul className='navbar-nav'>
                {props.children}
            </ul>
        </nav>
        );
}

function NavItem(props) {

    const [open, setOpen] = useState(false);

    return (
        <li className='nav-item'>
            <a className='icon-button' onClick={() => setOpen(!open)}>
                {props.icon}
            </a>

            {open && props.children}
        </li>
    );
};

function DropdownMenu() {

    const [activeMenu, setActiveMenu] = useState('main');

    function DropdownItem(props) {

        return (
            <a className='menu-item' onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className='icon-button'>{props.leftIcon}</span>
                {props.children}
                <span className='icon-right'>{props.rightIcon}</span>
            </a>
        );
    };

    return (
        <div className='dropdown'>
            <CSSTransition in={activeMenu === 'main'} unmountOnExit timeout={500} classNames="menu-primary">
                <div className='menu'>
                    <DropdownItem leftIcon><Link to='/tictactoe-pvp'>TicTacToe PvP</Link></DropdownItem>
                    <DropdownItem leftIcon><Link to='/tictactoe-pve'>TicTacToe PVE</Link></DropdownItem>
                    <DropdownItem leftIcon><Link to='/rockpaperscissors'>RockPaperScissors</Link></DropdownItem>
                    <DropdownItem leftIcon><Link to='/hangman'>Hangman</Link></DropdownItem>
                    <DropdownItem leftIcon><Link to='/connectfour'>ConnentFour</Link></DropdownItem>
                    <DropdownItem leftIcon><Link to='/snake'>Snake</Link></DropdownItem>
                    <DropdownItem leftIcon><Link to='/tetris'>Tetris</Link></DropdownItem>
                    <DropdownItem leftIcon><Link to='/pacman'>Pacman</Link></DropdownItem>
                    <DropdownItem leftIcon><Link to='/chess'>Chess</Link></DropdownItem>
                </div>
            </CSSTransition>
        </div>
    )
};

function DropdownMenuSettings() {

    const [activeMenu, setActiveMenu] = useState('secondary');

    function DropdownItem(props) {

        return (
            <a className='menu-item' onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className='icon-button'>{props.leftIcon}</span>
                {props.children}
                <span className='icon-right'>{props.rightIcon}</span>
            </a>
        );
    };

    return (
        <div className='dropdown'>
            <CSSTransition in={activeMenu === 'secondary'} unmountOnExit timeout={500} classNames="menu-secondary">
                <div className='menu'>
                    <DropdownItem leftIcon>Dark Mode</DropdownItem>
                    <DropdownItem leftIcon>Light Mode</DropdownItem>
                </div>
            </CSSTransition>
        </div>
    )
};


export default NavBar;