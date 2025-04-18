import React from 'react'
import { motion } from 'motion/react'
import { AppWrap } from '../../wrapper'
import { images } from '../../constants'
import './Header.scss'

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => (
  <div className='app__header app__flex'>
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className='app__header-info'
    >
      <div className='app__header-badge'>
        <div className='badge-cmp app__flex'>
          <span>👋</span>
          <div>
            <p className='p-text'>Hello, I am</p>
            <h1 className='head-text'>Vo Bao Long</h1>
          </div>
        </div>

        <div className='tag-cmp app__flex'>
          <p className='p-text'>Web Developer</p>
          <p className='p-text'>Freelancer</p>
        </div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className='cv-btn app__flex'
        >
          <a
            href='/CV-Vo_Bao_Long.pdf'
            target='_blank'
            rel='noopener noreferrer'
            className='cv-link'
          >
            View My CV
          </a>
        </motion.div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className='app__header-img'
    >
      <img src={images.profile} alt='profile_bg' />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt='profile_circle'
        className='overlay_circle'
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className='app__header-circles'
    >
      {[images.javascript, images.react, images.ant, images.tailwindcss].map(
        (circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt='profile_bg' />
          </div>
        )
      )}
    </motion.div>
  </div>
)

const HeaderWithWrapper = AppWrap(Header, 'home')
export default HeaderWithWrapper
