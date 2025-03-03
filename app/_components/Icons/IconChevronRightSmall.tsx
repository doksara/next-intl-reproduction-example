import React from "react"
import { IconProps } from "./interface"

export const IconChevronRightSmall = ({
  width = 11,
  height = 18,
  stroke = "#F0EEDF",
  style,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 11 18"
      fill="none"
      style={style}
      stroke={stroke}
    >
      <path d="M1 1L9 9L1 17" stroke={stroke} strokeWidth="2" />
    </svg>
  )
}
