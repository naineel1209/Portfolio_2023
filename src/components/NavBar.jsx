import { useState } from 'react';
import { FaBars, FaGithub, FaInstagramSquare, FaLinkedinIn, FaTimes, FaTwitter } from 'react-icons/fa';
import img from '../assets/android-chrome-192x192.png';

import { Link } from 'react-scroll';

function NavBar() {

    const [scrolled, setScrolled] = useState(false);

    window.addEventListener('scroll', (e) => {
        if (e.target.scrollingElement.scrollTop > 30) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    });


    const menuItems = [
        {
            id: "0",
            label: "Home",
            link: "home",
        },
        {
            id: "1",
            label: "About",
            link: "about",
        },
        {
            id: "2",
            label: "Projects",
            link: "portfolio",
        },
        {
            id: "3",
            label: "Skills",
            link: "skills"
        },
        {
            id: "4",
            label: "Connect With Me",
            link: "connect",
        },
    ];

    const [current, setCurrent] = useState(menuItems[0].label);
    const [showMenu, setShowMenu] = useState(false);

    const liClick = (e) => {
        // console.log(e.target.id);
        setCurrent(menuItems[e.target.id].label);
        setShowMenu(false);
    }


    return (
        <div className={((scrolled) ? 'shadow-md ' : 'shadow-none ') + ' z-50 shadow-md shadow-blue-500/50 duration-200 sticky px-4 bg-black flex justify-between items-center w-full h-20 text-white top-0'}>
            <div className='pl-4'>
                <img src={img} className='hover:scale-105 duration-200 cursor-pointer w-10 sign'>
                </img>
            </div>


            {/* Navbar for the Big Screens hidden originally and flexed on PC screen */}
            <ul className='hidden md:flex'>
                {menuItems.map((item) => (
                    <li
                        key={item.id}
                        className={
                            (current === item.label ? 'text-white-500 ' : 'text-gray-500 ') +
                            'text-2xl cursor-pointer inline-block px-4 py-2 hover:scale-110 duration-200'
                        }
                    >
                        {/* <a id={item.id} href={item.link}>
                            {item.label}
                        </a> */}
                        <Link offset={-70} to={item.link} id={item.id} onClick={liClick} smooth duration={500}>{item.label}</Link>
                    </li>
                ))}
            </ul>

            <div className='md:hidden text-white-500'>
                <button className='hover:scale-110 pr-8 text-3xl absolute top-5 right-0 z-50 duration-200' onClick={() => setShowMenu(!showMenu)}>
                    {showMenu ? <FaTimes /> : <FaBars />}
                </button>
            </div>


            {/* Navbar for the Mobile Screens absolute originally and hidden on PC screens */}
            <ul className={((!showMenu) ? 'hidden ' : ' ') + 'w-full h-screen absolute top-0 left-0 flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-600 text-gray-50 border-2 md:hidden'}>
                {
                    menuItems.map((item) => {
                        return <li
                            key={item.id}
                            className={
                                (current === item.label ? 'text-white-500 ' : 'text-gray-500 ') +
                                'text-3xl cursor-pointer inline-block px-4 py-2 hover:scale-110 duration-200'
                            }>
                            {/* <a id={item.id} onClick={liClick} href={item.link}>
                                {item.label}
                            </a> */}
                            <Link offset={-70} to={item.link} id={item.id} onClick={liClick} smooth duration={500}>{item.label}</Link>
                        </li>
                    })
                }

                <div className='absolute bottom-10 flex flex-row gap-5'>
                    <a href="https://www.instagram.com/_naineel/" target='_blank' rel="noreferrer"><FaInstagramSquare className='hover:scale-110 duration-200 text-3xl cursor-pointer' href='https://nigger.com' /></a>
                    <a href='https://github.com/naineel1209' target='_blank' rel="noreferrer"><FaGithub className='hover:scale-110 duration-200 text-3xl cursor-pointer' /></a>
                    <a href='https://twitter.com/' target='_blank' rel="noreferrer"><FaTwitter className='hover:scale-110 duration-200 text-3xl cursor-pointer' /></a>
                    <a href='https://www.linkedin.com/in/naineel-soyantar-3b1b371b7/' target='_blank' rel="noreferrer"><FaLinkedinIn className='hover:scale-110 duration-200 text-3xl cursor-pointer' /></a>
                </div>
            </ul>
        </div >
    )
}

export default NavBar;