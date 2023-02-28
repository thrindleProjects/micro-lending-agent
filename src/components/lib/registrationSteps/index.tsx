import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import { registerSteps } from '@/data/data';

import ProgressBar from '@/components/lib/progressBar/ProgressBar';
import { registerFormVariants } from '@/components/lib/RegisterForm/variants';
import StepFive from '@/components/lib/registrationSteps/stepFive/StepFive';
import StepOne from '@/components/lib/registrationSteps/stepOne/StepOne';
import StepTwo from '@/components/lib/registrationSteps/stepTwo/StepTwo';

import StepFour from './stepFour/StepFour';
import StepThree from './stepThree/StepThree';

const RegisterIndex = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <motion.section
      className='w-full'
      variants={registerFormVariants}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <div className='flex w-full flex-col items-center'>
        <div className='mt-10 w-4/5 md:hidden md:w-[70%] lg:w-9/12 xl:w-2/3'>
          <ProgressBar progress={(currentStep / 5) * 100} />
        </div>
        <div className='mt-10 hidden justify-between gap-4 px-6 md:flex'>
          {registerSteps.map((item, index) => (
            <div
              className='flex cursor-pointer items-center justify-center gap-2'
              key={index}
            >
              <div
                className={`aspect-square h-3 flex-shrink-0 rounded-full border border-amali-green ${
                  currentStep === index + 1
                    ? 'bg-amali-green'
                    : 'bg-transparent'
                }`}
              />
              <p
                className={currentStep === index + 1 ? 'text-amali-green' : ''}
              >
                {item}
              </p>
            </div>
          ))}
        </div>
        <section className='mt-10 w-4/5 md:w-[70%] lg:w-9/12 xl:w-2/3'>
          <AnimatePresence mode='wait'>
            {currentStep === 1 && <StepOne setCurrentStep={setCurrentStep} />}
            {currentStep === 2 && <StepTwo setCurrentStep={setCurrentStep} />}
            {currentStep === 3 && <StepThree setCurrentStep={setCurrentStep} />}
            {currentStep === 4 && <StepFour setCurrentStep={setCurrentStep} />}
            {currentStep === 5 && <StepFive setCurrentStep={setCurrentStep} />}
          </AnimatePresence>
        </section>
      </div>
    </motion.section>
  );
};

export default RegisterIndex;
