export const pAnimationTop = {
  hidden: {
    opacity: 0,
    y: "-100%",
  },
  visible: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.5,
      delay: 1,
      ease: "easeOut",
    },
  },
};

export const pAnimationLeft = {
  hidden: {
    opacity: 0,
    x: "-100%",
  },
  visible: {
    opacity: 1,
    x: "0%",
    transition: {
      duration: 0.7,
      ease: "easeOut",
      staggerChildren: 0.3,
      delayChildren: 1,
    },
  },
};
