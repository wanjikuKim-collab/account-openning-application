// Stepper.js
import React from "react";
import { Select, Stepper, initTE } from "tw-elements";

const Stepper = ({ currentStep, steps }) => (
  <ul className="relative m-0 flex list-none justify-between overflow-hidden p-0 transition-[height] duration-200 ease-in-out">
    {steps.map((step, index) => (
      <Step
        key={index}
        stepNumber={index + 1}
        stepText={step.text}
        isActive={index === currentStep}
      />
    ))}
  </ul>
);

export default Stepper;
