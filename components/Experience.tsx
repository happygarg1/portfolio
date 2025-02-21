import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorders'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Experience = () => {
  return (
    <div className='py-2' id='Achievements'>
        <h1 className='heading'>
            My
            <span className='text-purple'> Work Experience & Achievements</span>
        </h1>
        <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
            {workExperience.map((card) => {
                const duration = Math.floor(Math.random() * 10000) + 10000; // Prevents hydration issues
                return (
                    <Button 
                        key={card.id} 
                        duration={duration} 
                        borderRadius='1.75rem' 
                        className='flex-1 text-white border-neutral-200 dark:border-slate-800'
                    >
                        <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                            <img src={card.thumbnail} alt={card.title} className='lg:w-32 md:w-20 w-16' />
                            <div className='lg:ms-5'>
                                <h1 className='text-start text-xl md:text-3xl font-bold'>{card.title}</h1>
                                <p className='text-start text-white mt-3 font-semibold'>{card.desc}</p>
                               <a href={card.tit}>
                               <MagicButton title="Know More" 
                                 icon={<FaLocationArrow/>}
                                 position='right'
                                 
                              />
                               </a>
                            </div>
                        </div>
                    </Button>
                );
            })}
        </div>
    </div>
  )
}

export default Experience;
