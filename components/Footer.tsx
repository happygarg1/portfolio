import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'
import Image from 'next/image'
import Link from 'next/link'


const Footer = () => {
  return (
    <footer className='w-full lg:-mt-24 mb-[100px] pb-10 md:mb-2' id='contact'>
        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw]'>Ready to take <span className='text-purple'>Your</span> digital presece to the next level?</h1>
            <p className='text-white-200 md:mt-10 my-5 text-center'>Reach out to me today and let&apos;s discuss how I can help you to achieve you goals. </p>
            <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=himanigarg998@gmail.com" target="_blank" rel="noopener noreferrer">
    <MagicButton title="Let's get in touch" 
        icon={<FaLocationArrow />}
        position='right'
    />
            </Link>

        </div>

        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'><p className='md:text-base text-sm md:font-normal font-light'>Copyright © created by Himani Garg</p>
        <div className='flex items-center md:gap-3 gap-6'>
            {socialMedia.map((profile)=>(
                <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                    <Link href={profile.link} target="_blank" rel="noopener noreferrer">
                            <Image src={profile.img} alt="social" width={20} height={20} />
                        </Link>
                </div>
            ))}
        </div>
        </div>
    </footer>
  )
}

export default Footer