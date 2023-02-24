import React, { useState } from 'react';

import { RegisterSteps } from '@/data/data';

import ProgressBar from '@/components/lib/progressBar/ProgressBar';
import StepFive from '@/components/lib/registrationSteps/stepFive/StepFive';
import StepOne from '@/components/lib/registrationSteps/stepOne/StepOne';
import StepTwo from '@/components/lib/registrationSteps/stepTwo/StepTwo';

import StepFour from './stepFour/StepFour';
import StepThree from './stepThree/StepThree';

const RegisterIndex = () => {
  const [currentStep, setCurrentStep] = useState(4);

  return (
    <div>
      <section className=''>
        <div className='w-full'>
          <div className='mt-10 md:hidden'>
            <ProgressBar progress={`${(currentStep / 5) * 100}`} />
          </div>
          <div className='mt-10 hidden justify-between md:flex'>
            {RegisterSteps.map((item, index) => (
              <div
                className='flex cursor-pointer justify-center gap-2'
                key={index}
              >
                <div
                  className={
                    currentStep === index + 1
                      ? ' h-[20px] w-[20px] rounded-full bg-amali-green'
                      : ' h-[20px] w-[20px] rounded-full border border-amali-green'
                  }
                />
                <p
                  className={
                    currentStep === index + 1 ? ' text-amali-green' : ''
                  }
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
          <section className='mt-10 md:px-14'>
            {currentStep === 1 && <StepOne setCurrentStep={setCurrentStep} />}
            {currentStep === 2 && <StepTwo setCurrentStep={setCurrentStep} />}
            {currentStep === 3 && <StepThree setCurrentStep={setCurrentStep} />}
            {currentStep === 4 && <StepFour setCurrentStep={setCurrentStep} />}
            {currentStep === 5 && <StepFive setCurrentStep={setCurrentStep} />}
          </section>
        </div>
      </section>
    </div>
  );
};

export default RegisterIndex;
