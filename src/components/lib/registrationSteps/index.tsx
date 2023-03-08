import { AnimatePresence, motion } from 'framer-motion';
import { Session } from 'next-auth';
import { useMemo, useState } from 'react';

import { registerSteps } from '@/data/data';

// import ProgressBar from '@/components/lib/progressBar/ProgressBar';
import { registerFormVariants } from '@/components/lib/RegisterForm/variants';
import StepFive from '@/components/lib/registrationSteps/stepFive/StepFive';
import StepTwo from '@/components/lib/registrationSteps/stepTwo/StepTwo';

import StepFour from './stepFour/StepFour';
import StepThree from './stepThree/StepThree';

const RegisterIndex: React.FC<{ session?: Session }> = ({ session }) => {
  const initialStep = useMemo(() => {
    if (session) {
      const {
        completedBank,
        completedBusiness,
        completedContact,
        completedUploads,
      } = session.user;

      if (!completedContact) {
        return 1;
      }

      if (!completedBusiness) {
        return 2;
      }

      if (!completedBank) {
        return 3;
      }

      if (!completedUploads) {
        return 4;
      }

      return 1;
    }
    return 1;
  }, [session]);

  const [currentStep, setCurrentStep] = useState<number>(initialStep);

  return (
    <motion.section
      className='w-full'
      variants={registerFormVariants}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <div className='flex w-full flex-col items-center'>
        {/* <div className=' w-4/5 md:hidden md:w-[70%] lg:w-9/12 xl:w-2/3'>
          <ProgressBar progress={(currentStep / 5) * 100} />
        </div> */}
        <div className='mt-6 flex w-full flex-wrap gap-4 px-8'>
          {registerSteps.map((item, index) => (
            <div
              className='flex cursor-pointer items-center justify-center  gap-2'
              key={index}
            >
              <div
                className={`aspect-square h-3 flex-shrink-0 rounded-full border border-amali-green  ${
                  currentStep === index + 1
                    ? 'bg-amali-green'
                    : 'bg-transparent'
                }`}
              />
              <p
                className={
                  currentStep === index + 1
                    ? 'text-xs text-amali-green md:text-lg'
                    : 'text-xs md:text-lg'
                }
              >
                {item}
              </p>
            </div>
          ))}
        </div>
        <section className='mt-6 w-4/5 md:w-[70%] lg:w-9/12 xl:w-2/3'>
          <AnimatePresence mode='wait' initial={false}>
            {/* {currentStep === 1 && <StepOne setCurrentStep={setCurrentStep} />} */}
            {currentStep === 1 && <StepTwo setCurrentStep={setCurrentStep} />}
            {currentStep === 2 && <StepThree setCurrentStep={setCurrentStep} />}
            {currentStep === 3 && <StepFour setCurrentStep={setCurrentStep} />}
            {currentStep === 4 && <StepFive setCurrentStep={setCurrentStep} />}
          </AnimatePresence>
        </section>
      </div>
    </motion.section>
  );
};

export default RegisterIndex;
