import React, { FC } from 'react';

interface ProgressBarProps {
    label: string;
    percentage: number;
    dark?: boolean;
  }

const ProgressBar:FC<ProgressBarProps> = ({ label, percentage, dark }) => {
  const containerClasses = `w-full bg-gray-200 rounded-full h-2.5 mb-4 ${dark ? 'dark:bg-gray-700' : ''}`;
  const progressBarClasses = `bg-gray-600 h-2.5 rounded-full ${dark ? 'dark:bg-gray-300' : ''}`;

  return (
    <div>
      <div className="mb-1 text-base font-medium dark:text-white">{label}</div>
      <div className={containerClasses}>
        <div className={progressBarClasses} style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
