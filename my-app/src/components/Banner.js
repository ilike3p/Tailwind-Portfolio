import React from 'react';
// images
import Image from '../assets/avatar.svg';
// icons
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';
// type animation
import { TypeAnimation } from 'react-type-animation';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

const Banner = () => {
  return (
    <section
      className='min-h-[85vh] lg:min-h-[78vh] flex items-center'
      id='home'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
              variants={fadeIn('up', 0.8)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'
            >
              Tray <span>Pearce</span>
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'
            >
              <span className='text-white mr-4'>I am a</span>
              <TypeAnimation
                sequence={[
                  'Web Developer',
                  3000,
                  'Designer',
                  3000,
                  'Content Creator',
                  3000,
                  'Digital Marketer',
                  3000,
                ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn('up', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-8 max-w-lg mx-auto lg:mx-0'
            >
              Passionate Web Developer with a background in Business Development and Cyber Security. 
              I'm currently seeking oppertunities to work with a team of like minded individuals to create innovative solutions to real world problems.
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'
            >
              <a href='https://ilike3p.github.io/My-Resume/' className='text-gradient btn-link'>

              <button className='btn btn-lg'>My Resume</button>
              </a>
              </motion.div>
            {/* socials */}
            <motion.div
              variants={fadeIn('up', 0.7)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'
            >
              <a href='https://www.linkedin.com/in/tray-pearce-04018a20/'>
                <FaLinkedinIn />
              </a>
              <a href='https://github.com/ilike3p'>
                <FaGithub />
              </a>
              <a href='https://twitter.com/ilike3p'>
                <FaTwitter />
              </a>
              <a href='https://www.instagram.com/ilike3p/'>
                <FaInstagram />
              </a>
              <a href='mailto:traypearce@gmail.com'>
                <FaEnvelope />
                </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial='hidden'
            whileInView={'show'}
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'
          >
            <img src={Image} alt='' />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
