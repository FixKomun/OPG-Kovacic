export const pAnimationLeft = {
  hidden: {
    opacity: 0,
    x: "-50%",
  },
  visible: {
    opacity: 1,
    x: "0%",
    transition: {
      duration: 0.7,
      ease: "easeOut",
      staggerChildren: 0.3,
    },
  },
};

export const pAnimationRight = {
  hidden: {
    opacity: 0,
    x: "50%",
  },
  visible: {
    opacity: 1,
    x: "0%",
    transition: {
      duration: 0.7,
      ease: "easeOut",
      staggerChildren: 0.3,
    },
  },
};

export const pAnimationBottom = {
  hidden: {
    opacity: 0,
    y: "100%",
  },
  visible: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.7,
      type: "spring",
      stiffness: 200,
      damping: 50,
      delay: 1,
    },
  },
};

export const pAnimationTop = {
  hidden: {
    opacity: 0,
    y: "-80%",
  },
  visible: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.7,
      type: "spring",
      stiffness: 200,
      damping: 50,
      staggerChildren: 0.3,
    },
  },
};

export const pAnimationBottom2 = {
  hidden: {
    opacity: 0,
    y: "100%",
  },
  visible: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.7,
      type: "spring",
      stiffness: 200,
      damping: 50,
      staggerChildren: 0.3,
    },
  },
};

export const imgAnimationRight = {
  hidden: {
    opacity: 0,
    x: "20%",
    rotate: 5,
  },
  visible: {
    opacity: 1,
    x: "0%",
    rotate: 0,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 100,
      bounce: 0.4,
      delay: 0.2,
    },
  },
};

export const imgAnimationLeft = {
  hidden: {
    opacity: 0,
    x: "-20%",
    rotate: -5,
  },
  visible: {
    opacity: 1,
    x: "0%",
    rotate: 0,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 100,
      bounce: 0.4,
      delay: 0.2,
    },
  },
};
