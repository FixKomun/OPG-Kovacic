export const linksAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, staggerChildren: 0.2, delayChildre: 0.1 },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
      delayChildre: 0.3,
    },
  },
};

export const linksAnimationItem = {
  hidden: { opacity: 0, y: "-100%" },
  visible: {
    opacity: 1,
    y: "0%",
  },
  exit: {
    opacity: 0,
    y: "-100%",
  },
};
