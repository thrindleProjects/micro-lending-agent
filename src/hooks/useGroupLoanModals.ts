import { useState } from 'react';

import { GroupLoanModalTypes } from '@/components/shared/GroupLoanModals/types';

/**
 * @param order takes an array of stages
 * @returns current stage and a function to update the stage
 */
const useGroupLoanModals = (order?: GroupLoanModalTypes[]) => {
  const [stage, setStage] = useState<GroupLoanModalTypes | null>(null);
  if (order) {
    order = Array.from(new Set(order));
  }
  /**
   * @param arg takes an one argument of type string and sets the stage to the argument provided
   * @returns void
   */
  const handleModal = (arg: typeof stage) => {
    setStage(arg);
  };

  /**
   * @description If order is provided it will change the stage to the next item in the order array
   * @description If stage is null it automatically move the item to first item in the order array
   * @description When it reaches the end of the order array calling this function will set stage to null hence closing the modals
   * @returns void
   */
  const handleNext = () => {
    // console.log('here');
    if (!order || (order && !order.length)) return;

    if (!stage) {
      setStage(order[0]);
      return;
    }
    const indexOfCurrentStage = order.indexOf(stage);
    if (order[order.length - 1] === stage) {
      setStage(null);
      return;
    }

    const nextStage = order[indexOfCurrentStage + 1];

    // console.log({ nextStage });

    setStage(nextStage);
  };

  /**
   * @description This function has no effect if stage is null or if order is not provided
   * @description It moves the stage one step backwards in the array if order is provided
   * @description It will have no effect if the current stage is the first in the array
   */
  const handlePrevious = () => {
    if (!order || (order && !order.length) || !stage) return;

    const indexOfCurrentStage = order.indexOf(stage);
    if (indexOfCurrentStage === 0) return;

    const previousStage = order[indexOfCurrentStage - 1];
    setStage(previousStage);
  };

  /**
   * @description sets stage to null
   * @returns void
   */
  const handleClose = () => {
    if (!stage) return;
    setStage(null);
    return;
  };

  return [stage, handleModal, handleClose, handleNext, handlePrevious] as const;
};

export default useGroupLoanModals;
