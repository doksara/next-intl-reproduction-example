import React from "react"
import { IconProps } from "./interface"

export const IconChevronLeftBig = ({
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
        d="M14.5134 0L16 1.63882L2.97312 16L16 30.3612L14.5134 32L0 16L14.5134 0Z"
        fill={fill}
      />
    </svg>
  )
}
