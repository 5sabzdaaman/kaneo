import type { SVGProps } from "react";

export const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    role="img"
    aria-label="S D"
    {...props}
  >
    <rect width="24" height="24" rx="5" fill="currentColor" />
    <circle
      cx="12"
      cy="12"
      r="9.35"
      fill="none"
      stroke="#35D05A"
      strokeWidth="0.65"
    />
    <text
      x="12"
      y="15.1"
      textAnchor="middle"
      fill="#35D05A"
      fontFamily="Inter, Avenir Next, Arial, sans-serif"
      fontSize="8.1"
      fontWeight="800"
      letterSpacing="-0.55"
    >
      SD
    </text>
  </svg>
);
