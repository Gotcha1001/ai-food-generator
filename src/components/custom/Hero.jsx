import React from 'react';
import MotionWrapperDelay from '../FramerMotion/MotionWrapperDelay';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <div className='flex flex-col items-center gap-9'>
            <MotionWrapperDelay
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -100 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <h1 className='font-extrabold text-[50px] text-center mt-16 text-[#231f89]'>
                    <MotionWrapperDelay
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.9, delay: 0.8 }}
                        variants={{
                            hidden: { opacity: 0, x: -100 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <span className='text-[#6a50df]'>Create AI-Powered Recipes Instantly!</span>
                    </MotionWrapperDelay>
                    <br />
                    Your Personal AI Chef at Your Fingertips
                </h1>
            </MotionWrapperDelay>

            <MotionWrapperDelay
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.9, delay: 0.8 }}
                variants={{
                    hidden: { opacity: 0, x: -100 },
                    visible: { opacity: 1, x: 0 },
                }}
            >
                <p className='text-xl text-gray-500 text-center'>
                    Generate delicious, AI-crafted recipes based on your ingredients, preferences, and dietary needs.
                </p>
            </MotionWrapperDelay>

            <div className='flex flex-col items-center gap-9'>
                <Link to={'/create-recipe'}>
                    <Button variant='sex2' className='w-full mb-10 sm:w-auto px-6 py-3'>
                        Start Cooking with AI
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default Hero;
