import clsx from "clsx";
import React from "react";

type TagProps = {
  text: string;
};

const colors = [
  "blue",
  "gray",
  "red",
  "green",
  "yellow",
  "indigo",
  "purple",
  "pink",
];

const Tag: React.FC<TagProps> = ({ text }) => {

  const randomColor = colors[Math.floor(Math.random() * colors.length)];
 
  return (
    <div>
      <span className="hidden bg-blue-100 bg-gray-100 bg-red-100 bg-green-100 bg-yellow-100 bg-indigo-100 bg-purple-100 bg-pink-100 bg-blue-800 bg-gray-800 bg-red-800 bg-green-800 bg-yellow-800 bg-indigo-800 bg-purple-800 bg-pink-800 text-blue-100 text-gray-100 text-red-100 text-green-100 text-yellow-100 text-indigo-100 text-purple-100 text-pink-100 text-blue-800 text-gray-800 text-red-800 text-green-800 text-yellow-800 text-indigo-800 text-purple-800 text-pink-800" />
      <span
        className={clsx(
          `bg-${randomColor}-100 text-${randomColor}-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-${randomColor}-900 dark:text-${randomColor}-300`
        )}
      >
        #{text}
      </span>
    </div>
  );
};

type TagComponentProps = {
  tags: string[];
};

const TagComponent: React.FC<TagComponentProps> = ({ tags }) => {
  return (
    <div className="flex flex-wrap gap-2 py-2">
      {tags.map((tag, index) => (
        <Tag key={index} text={tag} />
      ))}
    </div>
  );
};

export default TagComponent;
