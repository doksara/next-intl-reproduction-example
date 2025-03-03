import React from "react"
import { IconProps } from "./interface"

export const IconChevronRight = ({
  width = 16,
  height = 24,
  fill = "#AFB8FB",
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Arrow"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.48656 24L1.07453e-07 22.7709L13.0269 12L1.99069e-06 1.22912L1.48656 -1.26881e-06L16 12L1.48656 24Z"
        fill={fill}
      />
    </svg>
  )
}
