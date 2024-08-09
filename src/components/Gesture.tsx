import {motion} from "framer-motion"

export const Gesture = () => {
  return (
    <motion.div
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 1.1 }}
    drag="x"
    dragConstraints={{ left: -200, right: 200 }}
    className="bg-red-400 h-[200px] w-[200px]"
  ></motion.div>
  )
}
