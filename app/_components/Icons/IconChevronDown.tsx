import React from "react"
import { IconProps } from "./interface"

export const IconChevronDown = ({
  width = 14,
  height = 9,
  stroke = "#121212",
  transform,
  style,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 14 9"
      fill="none"
      transform={transform}
      style={style}
    >
      <path d="M13 1.5L7 7.5L1 1.5" stroke={stroke} strokeWidth="1.5" />
    </svg>
  )
}
