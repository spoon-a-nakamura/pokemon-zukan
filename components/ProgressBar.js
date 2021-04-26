import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export default function ProgressBar({ value }) {
  const transition = {
    duration: 1,
    delay: 0.2,
    ease: 'easeInOut',
  }

  return (
    <Bar>
      <BarFilling
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: `${value / 2}%` }}
        transition={transition}
      />
    </Bar>
  )
}
const Bar = styled.div`
  overflow: hidden;
  position: relative;
  border-radius: 20px;
  background: #eee;
  height: 20px;
  width: 60%;
  margin-left: auto;
`
const BarFilling = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: #000;
  border-radius: 20px;
`
