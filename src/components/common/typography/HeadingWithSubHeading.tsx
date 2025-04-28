import React from "react";

interface HeadingWithSubHeadingProps {
  heading: string;
  subHeading?: string;
  headingSize?: "large" | "medium" | "small";
  color?: "dark" | "light" | "primary" | "secondary";
  align?: "left" | "center" | "right";
}

const HeadingWithSubHeading: React.FC<HeadingWithSubHeadingProps> = ({
  heading,
  subHeading,
  headingSize = "large",
  color = "dark",
  align = "left",
}) => {
  //headings size classes
  const headingSizeClasses = {
    small: "text-xl md:text-2xl",
    medium: "text-2xl md:text-3xl",
    large: "text-3xl md:text-4xl lg:text-5xl",
  };
  //color classes
  const colorClasses = {
    dark: "text-gray-900",
    light: "text-gray-100",
    primary: "text-blue-500",
    secondary: "text-green-500",
  };
  //text alignment classes
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };
  return (
    <div className="mb-6">
      <h2
        className={`font-bold tracking-tight  ${headingSizeClasses[headingSize]} ${colorClasses[color]} ${alignmentClasses[align]}`}
      >
        {heading}
      </h2>
      <p className={`mt-2 text-lg text-gray-400 ${alignmentClasses[align]}`}>
        {subHeading}
      </p>
    </div>
  );
};
export default HeadingWithSubHeading;
