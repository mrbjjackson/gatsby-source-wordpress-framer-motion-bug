import React from "react"
import Header from "./Header"
import { motion, AnimatePresence } from "framer-motion"

const mainVariant = {
  i: {
    opacity:0,
    y:'3rem'
  },
  v: {
    opacity:1,
    y:0,
    transition: {
      type:"tween",
      duration:1
    }
  },
  o: {
    opacity:0,
    y:'-3rem',
    transition: {
      type: "tween",
      duration:0.8
    }
  }
}

const Layout = ({children}) => {

  return (
    <div style={{maxWidth:'800px', marginLeft: 'auto', marginRight: 'auto'}}>
      <Header />
      <AnimatePresence exitBeforeEnter>
          <motion.main key={children?.props?.path} variants={mainVariant} initial="i" animate="v" exit="o">
            {children}
          </motion.main>
      </AnimatePresence>
    </div>
  )
}

export default Layout
