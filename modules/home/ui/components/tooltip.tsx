import { useState, ReactNode } from "react";

interface TooltipProps {
  text: string;
  children: ReactNode;
}

export const Tooltip = ({ text, children }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-slate-800 text-white text-xs text-center rounded-md p-2 z-10 shadow-lg">
          {text}
          <svg
            className="absolute text-slate-800 h-2 w-full left-0 top-full"
            x="0px"
            y="0px"
            viewBox="0 0 255 255"
          >
            <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
          </svg>
        </div>
      )}
    </div>
  );
};
