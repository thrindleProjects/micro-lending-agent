// import { Icon } from '@iconify/react';
import { Icon } from '@iconify/react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import React, { useRef, useState } from 'react';

import { useOnClickOutside } from '@/hooks';

import { ActionButtonProps } from '@/components/lib/ActionButton/types';

const buttonVariant: Variants = {
  initial: {
    opacity: 0,
    rotate: 0,
    transition: {
      duration: 0.5,
      ease: 'linear',
    },
  },
  animate: {
    opacity: 1,
    rotate: 360,
    transition: {
      duration: 0.5,
      ease: 'linear',
    },
  },
  exit: {
    opacity: 1,
    rotate: -360,
    transition: {
      duration: 0.5,
      ease: 'linear',
    },
  },
};

const actionVariants: Variants = {
  initial_1: {
    y: 10,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'linear',
    },
  },
  initial_2: {
    x: 10,
    opacity: 1,
  },
  exit_1: {
    y: 10,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: 'linear',
    },
  },
  exit_2: {
    x: 10,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: 'linear',
    },
  },
  animate_1: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'linear',
    },
  },
  animate_2: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'linear',
    },
  },
};

/**
 *
 * @param param0 Takes only two possible actions provided by an array
 * @returns React component that shows action button at bottom right of the screen
 */
const ActionButton: React.FC<ActionButtonProps> = ({ actions }) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const buttonRef = useRef(null);

  useOnClickOutside(buttonRef, () => {
    setIsActive(false);
  });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setIsActive((old) => !old);
  };

  return (
    <div
      className='fixed bottom-24 right-7 z-30 block aspect-square w-max drop-shadow-lg lg:hidden'
      ref={buttonRef}
    >
      <button
        onClick={handleClick}
        type='button'
        className='align-center flex aspect-square items-center rounded-full bg-amali-green p-4 text-2xl text-amali-bg'
      >
        <AnimatePresence mode='popLayout' initial={false}>
          {isActive && (
            <motion.span
              variants={buttonVariant}
              initial='initial'
              animate='animate'
              exit='exit'
              key='active'
            >
              <Icon icon='ic:round-minus' />
            </motion.span>
          )}
          {!isActive && (
            <motion.span
              variants={buttonVariant}
              initial='initial'
              animate='animate'
              exit='exit'
              key='inactive'
            >
              <Icon icon='material-symbols:add-rounded' />
            </motion.span>
          )}
        </AnimatePresence>
      </button>
      <AnimatePresence>
        {isActive &&
          actions &&
          actions.map((action, index) => {
            const classes = index
              ? 'right-full mr-6 bottom-0'
              : 'bottom-full mb-6 right-0';
            return (
              <motion.div
                key={index}
                className={`absolute ${classes}`}
                variants={actionVariants}
                initial={index ? 'initial_2' : 'initial_1'}
                animate={index ? 'animate_2' : 'animate_1'}
                exit={index ? 'exit_2' : 'exit_1'}
              >
                {action}
              </motion.div>
            );
          })}
      </AnimatePresence>
    </div>
  );
};

export default ActionButton;
