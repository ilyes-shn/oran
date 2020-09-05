import React from 'react'
import { motion } from 'framer-motion'


const Home = () => {
    return (
        <motion.div style={{ height: '100vh' }}>
            <motion.h1 initial={{ y: -50, opacity: 0}} animate={{ y: 0, opacity: 1}} whileHover={{ scale: 1.02}}>This is React with Framer Motion</motion.h1>
            <motion.hr initial={{ opacity: 0}} animate={{ opacity: 1}}/>
            <code>Under Construction</code>
          
        </motion.div>
    )
}

export default Home



