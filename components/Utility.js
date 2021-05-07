// Framer 共通トランジション
export const animationProps = {
  transition: {
    duration: 0.4,
    delay: 0,
    ease: 'easeInOut',
  },
  initial: { opacity: 0.6, scale: 0.6 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0 },
  whileHover: { mini: { scale: 1.1 }, big: { scale: 1.3 } },
}
