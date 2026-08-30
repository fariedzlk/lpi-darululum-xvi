export const fadeUpHeading = {
  initial: {
    opacity: 0,
    y: 20,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: 0.7,
    ease: [0.22, 1, 0.36, 1],
  },
  viewport: {
    once: true,
    amount: 0.6,
  },
};

export const fadeUpContent = {
  initial: {
    opacity: 0,
    y: 40,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: 0.6,
    delay: 0.15,
    ease: [0.22, 1, 0.36, 1],
  },
  viewport: {
    once: true,
    amount: 0.3,
  },
};
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export const staggerItem = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};