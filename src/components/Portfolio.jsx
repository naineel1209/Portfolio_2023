/* eslint-disable react/prop-types */
import { useState } from "react";
import { HiArrowCircleDown, HiArrowCircleUp } from "react-icons/hi";
import Tilt from 'react-parallax-tilt';

const Portfolio = () => {
    const portfolioLinks = [
        {
            title: 'Blog Machine v2',
            description: `Blog Machine is a blog publishing site.\n
It is built using EJS, MongoDB, ExpressJS, Jsonwebtoken, NodeJS, and Bootstrap.\n
It has Register, Login and Logout functionality.\n
Users can view their own published blogs as well as those published by others and can edit their own blogs.\n
The site is secure and follows the Model-View-Controller (MVC) pattern for maintainability and scalability.`,
            demo: 'https://blogmachine-v2.cyclic.app/home',
            code: 'https://github.com/naineel1209/BlogMachineV2'
        },
        {
            title: 'Music Player',
            description: `Music player is built using HTML, CSS, and Javascript.\n
It allows users to play songs from a playlist, and has a looping feature to continuously play the songs.\n
The player also has a playlist feature, from where we can play any song we want from the playlist.\n
Adding new songs is simple, as it only requires adding a new object to the song array.\n
Overall, the music player provides a user-friendly and customizable experience for listening to music.`,
            demo: 'https://naineel1209.github.io/MusicPlayer.github.io/',
            code: 'https://github.com/naineel1209/MusicPlayer.github.io'
        },
        {
            title: 'Telegram Movies Bot',
            description: `Telegram Movies Bot is a bot for accessing movies.\n
It is built using HTML, CSS, and JavaScript.\n
Users can wake up the bot using the provided link and then visit the bot using the second link.`,
            wakeup: 'https://movies-bot-13323.glitch.me/',
            demo: 'https://web.telegram.org/k/#@BotKindBot',
            code: 'https://github.com/naineel1209/MoviesBot_Telegram'
        },
        {
            title: 'Telegram Photo and Location Bot',
            description: `Telegram Photo and Location Bot is a bot for managing photos and locations.\n
It is built using HTML, CSS, and JavaScript.\n
Users can wake up the bot using the provided link and then visit the bot using the second link.`,
            wakeup: 'https://periodic-power-name.glitch.me',
            demo: 'https://web.telegram.org/k/#@mediakingbot',
            code: 'https://github.com/naineel1209/MediaBot'
        },
        {
            title: 'Snake Game',
            description: 'Snake Game is a classic game built using HTML, CSS, and JavaScript.',
            demo: 'https://naineel1209.github.io/SnakeGame.github.io/',
            code: 'https://github.com/naineel1209/SnakeGame.github.io'
        },
        {
            title: 'To Do List',
            description: `To Do List is an application for managing tasks.\n
Users can easily create new tasks, view their task list, edit existing tasks, and delete tasks.\n
The application automatically saves changes using local storage.`,
            demo: 'https://naineel1209.github.io/ToDo_List.github.io/',
            code: 'https://github.com/naineel1209/ToDo_List.github.io'
        }
    ];

    return (
        <div name="portfolio" className='bg-gradient-to-b from-gray-800 to-gray-800'>
            <div className=' text-white mx-5 md:mx-20 p-10 h-full'>
                <p className='inline-block text-3xl font-bold border-b-4 border-gray-500'>Portfolio</p>

                <div className='mt-10 grid gap-10 place-items-center grid-rows-1 md:grid-cols-3 mx-1 text-gray-500 text-justify'>
                    {/* <Linklet /> */}
                    {
                        portfolioLinks.map(link => {
                            return <Linklet key={link.title} {...link} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}




function Linklet({ title, description, demo, code, wakeup }) {
    const [showDesc, setShowDesc] = useState(false);

    return (

        <Tilt glareEnable={true} glareMaxOpacity="0.3" glareColor="#fff" glareBorderRadius=".5rem" glarePosition="all" scale={1.1} className="shadow-md shadow-slate-200/40 z-1 w-full h-100 border-4 duration-200 border-gray-500 bg-gray-700 p-5 rounded-md">
            <div className='text-white text-2xl font-bold text-center'>{title}</div>

            <div className={`mt-5 text-justify ${showDesc ? 'show-desc' : 'hide-desc'}`}>
                {description}
            </div>
            <div className='text-white  flex flex-row items-center justify-center mt-5 gap-5 duration-200'>
                <a href={demo} target='_blank' rel="noreferrer" className='border-2 border-green-500 rounded-md p-1 hover:animate-pulse hover:bg-green-500 hover:text-white duration-200'>Demo</a>

                {
                    wakeup && <a href={wakeup} target='_blank' rel="noreferrer" className='border-2 border-green-500 rounded-md p-1 hover:animate-pulse hover:bg-green-500 hover:text-white duration-200'>Wake Up</a>
                }

                <p id="arrow" className="arrow hover:text-white duration-200 cursor-pointer text-4xl z-50" onClick={() => setShowDesc(!showDesc)}>{showDesc ? <HiArrowCircleUp /> : <HiArrowCircleDown />}</p>

                <a href={code} target='_blank' rel="noreferrer" className='text-white hover:animate-pulse border-2 border-green-500 rounded-md p-1 hover:bg-green-500 hover:text-white duration-200'>Code</a>
            </div>
        </Tilt>
    );
}
export default Portfolio