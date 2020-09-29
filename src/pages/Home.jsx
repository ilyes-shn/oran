import React, { useState } from 'react'
import { motion } from 'framer-motion'


const Home = () => {

const [comment,setComment] = useState('')
const [items,setItems] = useState([]);

function addItem() {
    setItems([...items,comment])
    setComment('')
}
    return (
        <motion.div className="Home">
            <form>
                <label htmlFor="post" style={{ opacity: 0.6}}>Write a comment</label>
                <br/>
                <input value={comment} onChange={ (e) => setComment(e.currentTarget.value)} type="text" name='post' style={{ width: '50%',fontSize: 19, background: 'transparent', outline: 'none', border: 'none', borderBottom: '1px solid grey',padding: 10, color: 'white'}} />
                <br/>
                <button onClick={addItem} type='button' style={{padding: '10px 0', color: 'white', outline: 'none', border: 'none', backgroundColor: '#17b978', width: 100, margin: '10px 0', borderRadius: 10 }}>Add</button>
                {items.map((item) => { return (
                <div>
                <motion.h1 layout>{item}</motion.h1>
                <hr style={{ opacity: 0.5 }}/>
                </div>
                )})}
            </form>
        </motion.div>
    )
}

export default Home
