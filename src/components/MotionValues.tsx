import { useMotionValue, useTransform,motion } from 'framer-motion'

export const MotionValues = () => {
    const x = useMotionValue(0)
    const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0])
    
    return <motion.div className='bg-red-400 h-[400px] w-[400px]' drag="x" style={{ x, opacity }} />
}
