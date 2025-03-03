import React from "react"
import { IconProps } from "./interface"

export const IconChevronRightBig = ({
  width = 16,
  height = 32,
  fill = "#121212",
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 32"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.48656 32L-1.76408e-06 30.3612L13.0269 16L7.46909e-07 1.63883L1.48656 6.38543e-07L16 16L1.48656 32Z"
        fill={fill}
      />
    </svg>
  )
}
