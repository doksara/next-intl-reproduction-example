import React from "react"
import { IconProps } from "./interface"

export const IconPlay = ({
  width = 22,
  height = 22,
  fill = "#F0EEDF",
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 22 22"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22ZM7.36441 16.3283L16.5932 11L7.36441 5.67174L7.36441 16.3283Z"
        fill={fill}
      />
    </svg>
  )
}
