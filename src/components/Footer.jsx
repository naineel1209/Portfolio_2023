/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React from 'react';
import { FaGithub, FaInstagramSquare, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = props => {
    return (<div name="skills" className='bg-gradient-to-b from-gray-800 to-black'>
        <div className='place-items-center grid gap-5 md:grid-cols-2 text-white mx-5 md:mx-20 p-10 h-full'>
            {/* <p className='inline-block text-3xl font-bold border-b-4 border-gray-500'>Skills</p>

            <p className="mt-10">These are the technologies i have worked with: </p>

            <div className='mt-10 w-full h-full grid gap-10 md:gap-20 place-items-center  grid-cols-3 md:grid-cols-5 mx-1 text-gray-500 text-justify'>

            </div> */}

            <div className='mt-10 h-full'>
                <p className='text-center text-3xl font-bold border-b-4 border-gray-500'>Socials</p>
                <div className='mt-5 grid grid-cols-4 gap-10 text-center text-2xl text-gray-500 '>
                    <a className='flex flex-row gap-3 items-center justify-center hover:text-white duration-200' href="https://twitter.com/"> <FaTwitter /> </a>
                    <a className='flex flex-row gap-3 items-center justify-center hover:text-white duration-200' href="https://www.instagram.com/_naineel/"> <FaInstagramSquare />
                    </a>
                    <a className='flex flex-row gap-3 items-center justify-center hover:text-white duration-200' href="https://www.linkedin.com/in/naineel-soyantar-3b1b371b7/"> <FaLinkedin />
                    </a>
                    <a className='flex flex-row gap-3 items-center justify-center hover:text-white duration-200' href="https://github.com/naineel1209"> <FaGithub />
                    </a>
                </div>
            </div>
            <div>
                <p className='mt-10 text-center text-3xl font-bold border-b-4 border-gray-500'>Credits</p>
                <div className='mt-5 text-center text-xl text-gray-500 '>
                    Image: <a className='flex flex-row gap-3 items-center justify-center hover:text-white duration-200' href="https://twitter.com/TransAlchemy">[P]articleion <FaTwitter />
                    </a>
                </div>
            </div>
        </div>
    </div>)
}

Footer.propTypes = {}

export default Footer