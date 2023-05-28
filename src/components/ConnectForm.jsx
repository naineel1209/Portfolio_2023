/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';

import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';

const ConnectForm = () => {
    return (
        <div name="connect" className='bg-gradient-to-b from-black to-gray-800'>
            <div className=' text-white mx-5 md:mx-20 p-10 h-full'>
                <p className='inline-block text-3xl font-bold border-b-4 border-gray-500'>Connect With Me</p>

                <p className="mt-10">
                    Let's collaborate, share thoughts, and talk movies! 🎥💭<br />

                    Have a cool idea? Let's team up and make it happen! 🤝💡<br />


                    Love movies? Let's chat about our favorites! 🎬🍿<br />

                    Share your thoughts or opinions! Your input is valuable to me. 😊📝<br />

                    Get in touch through the contact form or any other way you prefer. Excited to connect with you! 📩🌟<br />
                </p>

                <div className='mt-10 w-full h-full'>
                    <form action="https://getform.io/f/012f71ac-717c-4415-8166-5eee870b33e6" method='POST'>
                        <FormControl className='w-full h-full'>
                            <div className='grid grid-cols-1 place-items-center md:grid-col gap-5'>
                                <div className='flex flex-col w-full md:w-1/2 md:mx-auto'>
                                    <label className='text-gray-500 text-xl'>Full Name</label>
                                    <input className='w-full h-10 px-2 text-gray-500 border-2 border-gray-500 rounded-lg focus:outline-none focus:border-gray-500' placeholder='Your Full Name' name='name' required />
                                </div>
                                <div className='flex flex-col w-full justify-center md:w-1/2 md:mx-auto'>
                                    <label className='text-gray-500 text-xl'>Message </label>
                                    <textarea className='items-center justify-center flex w-full h-10 px-2 text-gray-500 border-2 border-gray-500 rounded-lg focus:outline-none focus:border-gray-500 p-[.35rem]' placeholder='Your Message' name='message' required />
                                </div>
                                <input type="hidden" name="_gotcha" style={{ display: "none", important: true }}></input>
                                <div className='mt-3 md:w-1/4 h-full '>
                                    <Button type='submit' fullWidth size="large" variant='outlined' className='w-50 md:text-2xl' color='success'>
                                        Send Message! 📮
                                    </Button>
                                </div>
                            </div>
                        </FormControl>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ConnectForm