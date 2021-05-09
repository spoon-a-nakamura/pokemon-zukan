import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { device } from '../components/MediaQuery'

export default function ProgressBar({ value }) {
  console.log('Render ProgressBar')
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
  background: rgba(255, 255, 255, 0.3);
  height: 20px;
  width: 60%;
  margin-left: auto;
  @media ${device.underMobileL} {
    width: 50%;
  }
`
const BarFilling = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: #fff;
  border-radius: 20px;
`
