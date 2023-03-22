import React from 'react';
// icon
import { BsArrowUpRight } from 'react-icons/bs';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

// skills data
const skills = [
  {
    name: 'Freelance Project',
    description:
      'Professional freelance development is the practice of developing websites or applications for other people for a fee.',
    link: 'Learn more',

   },
  {
    name: 'Frontend Project',
    description:
      'Frontend development is the practice of developing the front end of a website or application',
    link: 'Learn more',
  },
  {
    name: 'Backend Project',
    description:
      'Backend development is the practice of developing the back end of a website or application.',
    link: 'Learn more',
  },
  {
    name: 'Fullstack Project',
    description:
      'Fullstack development is the practice of developing both the front and back ends of a website or application at the same time.',
    link: 'Learn more',
  },
];

const Skills = () => {
  return (
    <section className='section' id='skills'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text & image */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'
          >
            <h2 className='h2 text-accent mb-6'>What I Do.</h2>
            <h3 className='h3 max-w-[455px] mb-16'>
             UCLA Bootcamp Graduate with a passion for creating dynamic & userfriendly applications.
            </h3>
            <a href= 'https://github.com/ilike3p'>
            <button className='btn btn-sm'>See my work</button>
            </a>
          </motion.div>
          {/* skills */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            {/* skills list */}
            <div>
              {skills.map((skills, index) => {
                // destructure skills
                const { name, description, link } = skills;
                return (
                  <div
                    className='border-b border-white/20 h-[146px] mb-[38px] flex'
                    key={index}
                  >
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>
                        {name}
                      </h4>
                      <p className='font-secondary leading-tight'>
                        {description}
                      </p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                     <a
                        href='#'
                        className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                        <BsArrowUpRight />
                      </a>
                      <a href='#' className='text-gradient text-sm'>
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
