import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
    return (
        
        <div style={{ height: '100vh' }}>
            <motion.h1 initial={{ x: -200 }} animate={{ x: 0 }}>I'm Elyes Web Developer</motion.h1>
            <motion.h5 initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ delay: 0.2}}>I'm specialized in Javascript and React</motion.h5>
            <motion.hr initial={{ x: 200 }} animate={{ x: 0}} />
            <motion.p initial={{ y: 200 }} animate={{ y: 0}} transition={{ ease: 'easeOut'}} >I'll be really happy to build amazing projects for you</motion.p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ delay: 0.2}} style={{ position: "absolute", bottom: 0}}>infinityilyes@gmail.com</motion.p>
        </div>
        
    )
}

export default About
