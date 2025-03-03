import React from "react"
import { IconProps } from "./interface"

export const IconLongArrowRight = ({
  width = 144,
  height = 12,
  fill = "#374DF5",
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 144 12"
      fill="none"
      style={{ flexShrink: 0 }}
    >
      <path d="M144 6L134 0.226497V11.7735L144 6ZM0 7H135V5H0V7Z" fill={fill} />
    </svg>
  )
}
