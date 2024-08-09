import {motion} from "framer-motion" 

const Variants = () => {
    const list = { x: { opacity: 0 } }
    const item = { x: { x: -10, opacity: 0 } }
    
    return (
      <motion.ul animate="x" variants={list}>
        <motion.li className="bg-red-400 h-[200px] w-[200px] block"  style={{}}  variants={item} />
        <motion.li className="bg-red-400 h-[200px] w-[200px] block"   variants={item} />
        <motion.li className="bg-red-400 h-[200px] w-[200px] block"   variants={item} />
      </motion.ul>
    )
}

export default Variants