import { motion } from 'framer-motion'

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: 'rgba(255, 255, 255, 0)',
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: 'rgba(255, 255, 255, 1)',
  },
}

export const IconDrawingAnimation = ({ path, viewBox, classNames }) => {
  const classes = classNames ? classNames : 'item w-5 h-5 mr-2'

  return (
    <motion.svg viewBox={viewBox} className={classes}>
      <motion.path
        d={path}
        variants={icon}
        initial='hidden'
        animate='visible'
        transition={{
          default: { duration: 2, ease: 'easeInOut' },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] },
        }}
      />
    </motion.svg>
  )
}
