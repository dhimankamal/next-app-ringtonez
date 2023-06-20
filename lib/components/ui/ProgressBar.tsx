"use client";
import React, { FC } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    <AnimatePresence>
      <div className={containerClasses}>
        <motion.div
          className={progressBarClasses}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
        ></motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProgressBar;
