import React from 'react'
import {assets} from '@/assets/assets'
import Image from 'next/image'

const About = () => {
    return(
        <div className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
            <h2 className='text-centr text-5xl font-Ovo'>About</h2>

            <div>
                <div>
                    <Image src={assets.user_image} alt="user" className='w-full rounded-3xl' />
                </div>
                <div className='flex-1'>

                </div>
            </div>
        </div>
    )
}

export default About