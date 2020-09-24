import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Nav = () => {
    return (
        <motion.nav initial={{ y: '-200%'}} animate={{ y: 0}}  className="navbar navbar-expand-sm navbar-dark " >
            <Link className="navbar-brand" to="/">Elyes</Link>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item ">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>

                </ul>

            </div>
        </motion.nav>
    )
}

export default Nav
