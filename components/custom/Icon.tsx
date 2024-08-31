import React from "react";
import Image from "next/image";

interface IconProps {
  name: string;
  className?: string; // Use string type for className
}

const Icon: React.FC<IconProps> = ({ name, className }) => {
  return (
    <Image
      alt={`${name} Icon`}
      className={className}
      height={22}
      src={`/icons/${name}.svg`}
      width={22}
    />
  );
};

export default Icon;
