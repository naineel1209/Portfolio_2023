/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { FaArrowAltCircleDown, FaArrowAltCircleLeft, FaArrowAltCircleRight, FaRegArrowAltCircleLeft } from 'react-icons/fa'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'
import HeroImage from '../assets/zed-1.jpeg'

const Home = () => {
    scrollingFunc()
    return (<div name="home" className='w-full bg-gradient-to-b from-black to-gray-800'>


        <div className='flex flex-col-reverse md:flex-row-reverse mx-5 md:mx-20 p-10'>
            <div className='h-full w-full mx-auto my-5 justify-center flex flex-col md:flex-row-reverse items-center gap-2 md:gap-10 text-white px-4 md:justify-center'>
                <img src={HeroImage} className='my-10 hover:scale-105 duration-300  md:mr-[-5%] w-[40rem] shadow-white-lg rounded-3xl' />
                <div className=''>
                    <h1 className='font-bold text-4xl md:text-6xl text-white mb-10'>Hi, I&apos;m <span className='text-white-500 scrolling after:content-["|"] after:text-red-300'></span></h1>
                    <p className='text-gray-500 text-justify text-md md:text-xl justify-around mb-5'>
                        Hi, I'm Naineel, a passionate web developer experienced in frontend (HTML, CSS, JavaScript, ReactJS), backend (NodeJS, ExpressJS, MongoDB) and databases like (MySQL, MongoDB).

                        Explore my projects below to see my skills in action and the quality work I deliver as a dedicated web developer.
                    </p>
                    <div className='group border-blue-500 bg-gradient-to-tr from-green-400 to-blue-800 flex flex-row justify-center items-center gap-2 text-white p-2 rounded-2xl cursor-pointer hover:scale-110 duration-200 w-full md:w-52 text-center'>
                        <h1 className=''>My Projects</h1>
                        <Link to="portfolio" duration={500} smooth offset={-70}><HiArrowNarrowRight className='group-hover:rotate-90 duration-200'></HiArrowNarrowRight></Link>
                    </div>
                </div>
            </div>
        </div>
    </div >
    )
}

export default Home

function scrollingFunc() {
    const wordArr = ["Naineel Soyantar", "a Full Stack Developer", "a Student", "a Learner", "a Cinephile"]

    let i = 0, j = 0, n = wordArr.length

    let overStep = false, count = 0

    var animationID

    let scrolling

    function changeWords(timestamp) {
        if (timestamp && timestamp - previousTimestamp < 300) {
            animationID = requestAnimationFrame(changeWords)
            return
        }

        previousTimestamp = timestamp

        if (!overStep && j < wordArr[i].length) {

            scrolling.innerHTML += wordArr[i % n][j++]
            // console.log('started')

        } else if (!overStep && j === wordArr[i].length) {

            overStep = true
            scrolling.innerHTML = wordArr[i % n].substring(0, j--)

        } else if (overStep && j < wordArr[i].length && j > 0) {

            scrolling.innerHTML = wordArr[i % n].substring(0, j--)
            // console.log('started')

        }
        else if (overStep && j === 0) {

            overStep = false
            scrolling.innerHTML = ''
            i = (i + 1) % n

        }

        count++

        if (count === 2000) {
            cancelAnimationFrame(animationID)
            i = 0
            scrolling.innerHTML = wordArr[i % n]
        }

        animationID = requestAnimationFrame(changeWords)
    }

    let previousTimestamp = 0

    window.addEventListener('load', (e) => {
        scrolling = document.querySelector('.scrolling')
        animationID = requestAnimationFrame(changeWords)
    })
}
