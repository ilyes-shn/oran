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
                <img src="https://www.metaltoad.com/sites/default/files/styles/large_personal_photo_870x500_/public/2020-05/react-js-blog-header.png?itok=VbfDeSgJ" width="100%"/>
              </div>
              <div className="col-md-4 mb-5">
                <h3>Framer Motion</h3>
                <p>Is an animation framework for React</p>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                  <img className="pt-3" src="https://user-images.githubusercontent.com/38039349/60953119-d3c6f300-a2fc-11e9-9596-4978e5d52180.png" height='200px' />
                </div>

              </div>
              <div className="col-md-4 ">
                <h3>Bootstrap</h3>
                <p>Is a CSS framework created by Twitter</p>
                <img src="https://d2c297xniuypar.cloudfront.net/images/bootstrap.png" width='100%' />
              </div>
            </motion.div>
        </motion.div>
    )
}

export default Home
