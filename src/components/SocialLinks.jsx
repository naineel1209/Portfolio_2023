/* eslint-disable react/prop-types */
import { } from 'react';
import { FaGithubSquare, FaLinkedinIn, FaUser } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const SocialLinks = () => {
    const socialsArr = [
        {
            id: 1,
            text: 'Github',
            url: 'https://github.com/naineel1209',
            icon: <FaGithubSquare />,
        },
        {
            id: 2,
            text: "LinkedIn",
            url: "https://www.linkedin.com/in/naineel-soyantar-3b1b371b7/",
            icon: <FaLinkedinIn />,
        },
        {
            id: 3,
            text: "Mail",
            url: "mailto://naineelsoyantar@gmail.com",
            icon: <HiMail />

        },
        {
            id: 4,
            text: "Resume",
            url: "./Naineel_Soyantar_Resume.pdf",
            download: true,
            icon: <FaUser />
        }
    ]

    return (
        <div className='z-50 hidden md:flex top-[35%] hover:ml-[-10px] ml-[-110px] duration-500 text-3xl text-white fixed md:text-xl'>
            {/* <FaFacebookSquare className=' hover:scale-110 duration-150 hover:left-[2%]' /> */}

            <ul>
                {
                    socialsArr.map(link => {
                        return <LiLet key={link.id} link={link} className='flex justify-center items-center w-full h-14 hover:rounded-md bg-gray-500 px-4 my-2' />
                    })
                }
            </ul>
        </div>
    )
}


function LiLet({ link }) {
    return (<li className='flex justify-center items-center w-full h-14 hover:rounded-md bg-gray-500 px-4 my-2'>

        <a className='flex flex-row justify-between w-full items-center gap-5 duration-200 hover:animate-pulse' href={link.url} download={link.download || false} target="_blank" rel="noreferrer"><span>{link.text}</span> <span>{link.icon}</span></a>

    </li>);
}
export default SocialLinks  