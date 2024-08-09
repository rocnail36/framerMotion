import {motion} from "framer-motion"

export const Keyframes = () => (
    <motion.div
    className="bg-red-400 h-24 w-24"
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }}
      transition={{repeat:Infinity}}
    />
  )