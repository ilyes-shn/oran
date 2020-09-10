import React from 'react'
import { motion } from 'framer-motion'


const Home = () => {

    return (
        <motion.div className="Home">
            <motion.h1
            initial={{ y: -50, opacity: 0}}
            animate={{ y: 0, opacity: 1}}
            whileHover={{ scale: 1.02}}>This is React with Framer Motion</motion.h1>
            <motion.hr initial={{ opacity: 0}} animate={{ opacity: 1}}/>
            <br />
            <motion.div className="row" initial={{ opacity: 0, y: '50vh'}} animate={{opacity: 1, y: 0}} transition={{ease: 'easeOut', duration: 0.2}}>
              <div className="col-md-4">
                <h3>React Js</h3>
                <p>Is a Javascript framework for creating SPA and PWA</p>
              </div>
              <div className="col-md-4">
                <h3>Framer Motion</h3>
                <p>Is an animation framework for React</p>
              </div>
              <div className="col-md-4">
                <h3>Bootstrap</h3>
                <p>Is a CSS framework created by Twitter</p>
              </div>
            </motion.div>
        </motion.div>
    )
}

export default Home
