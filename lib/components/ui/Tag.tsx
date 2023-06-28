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
