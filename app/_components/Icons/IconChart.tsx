import React from "react"
import { IconProps } from "./interface"

export const IconChart = ({
  width = 64,
  height = 64,
  fill = "#FF407F",
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 64 64"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.34375 50.6133L25.3438 34.5867L36.0104 45.2533L58.6771 19.76L54.9171 16L36.0104 37.2533L25.3438 26.5867L5.34375 46.6133L9.34375 50.6133Z"
        fill={fill}
      />
    </svg>
  )
}
