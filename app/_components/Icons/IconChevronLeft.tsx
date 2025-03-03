import React from "react"
import { IconProps } from "./interface"

export const IconChevronLeft = ({
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
        d="M14.5134 0L16 1.22912L2.97312 12L16 22.7709L14.5134 24L0 12L14.5134 0Z"
        fill={fill}
      />
    </svg>
  )
}
