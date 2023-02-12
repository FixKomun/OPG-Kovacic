export const logoAnimation = {
  hidden: {
    opacity: 0,
    y: "-100%",
  },
  visible: {
    opacity: 1,
    y: "0",
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.3,
      ease: "easeOut",
    },
  },
};

export const logoAnimationItem = {
  hidden: {
    opacity: 0,
    y: "-100%",
  },
  visible: {
    opacity: 1,
    y: "0%",
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
      ease: "easeInOut",
      staggerChildren: 0.3,
      delay: 0.3,
    },
  },
};

export const pAnimationRight = {
  hidden: {
    opacity: 0,
    x: "100%",
  },
  visible: {
    opacity: 1,
    x: "0%",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.3,
      delay: 0.3,
    },
  },
};

export const opacityAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};
