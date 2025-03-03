import React from "react"
import { IconProps } from "./interface"

export const IconPlayer = ({
  width = 18,
  height = 24,
  fill = "#FF407F",
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 18 24"
      fill="none"
    >
      <g clipPath="url(#clip0_248_30014)">
        <path
          d="M17.5686 24.0002H0.425781V15.4288L5.56864 12.0002H12.4258L17.5686 15.4288V24.0002Z"
          fill={fill}
        />
        <path
          d="M8.99442 10.286C11.8347 10.286 14.1373 7.98342 14.1373 5.1431C14.1373 2.30278 11.8347 0.000244141 8.99442 0.000244141C6.1541 0.000244141 3.85156 2.30278 3.85156 5.1431C3.85156 7.98342 6.1541 10.286 8.99442 10.286Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_248_30014">
          <rect
            width="17.1429"
            height="24"
            fill="white"
            transform="translate(0.427734 0.000244141)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
