import LogoIcon from "@/shared/ui/icons/sparkle.svg?react";

type LogoT = {
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: "h-5 w-5",
  md: "h-8 w-8",
  lg: "h-12 w-12",
};

const textSizes = {
  sm: "text-lg",
  md: "text-xl",
  lg: "text-3xl",
};

const gaps = {
  sm: "gap-1",
  md: "gap-2",
  lg: "gap-3",
};

const Logo = ({ size = "md"}: LogoT) => {
  return (
    <div className={`flex items-center select-none ${gaps[size]}`}>
      <LogoIcon className={sizes[size]} />
      <span className={`font-heading text-primary ${textSizes[size]}`}>Emilia's Space</span>
    </div>
  );
};

export default Logo;
