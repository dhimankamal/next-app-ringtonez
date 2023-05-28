import React, { FC } from "react";

interface ProgressBarProps {
  percentage: number;
  dark?: boolean;
}

const ProgressBar: FC<ProgressBarProps> = ({ percentage, dark }) => {
  const containerClasses = `w-full bg-gray-200 rounded-full h-2.5 transitison   ${
    dark ? "dark:bg-gray-700" : ""
  }`;
  const progressBarClasses = `bg-gray-600 h-2.5 rounded-full transition-all duration-300 ${
    dark ? "dark:bg-gray-300" : ""
  }`;

  return (
    <div className={containerClasses}>
      <div
        className={progressBarClasses}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
