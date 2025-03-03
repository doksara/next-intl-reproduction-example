import React from "react"
import { IconProps } from "./interface"

export const IconIndicatorStats = ({
  width = 80,
  height = 80,
  fill = "#7181F7",
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 80 80"
      fill="none"
    >
      <path d="M26.6663 30H13.333V63.3333H26.6663V30Z" fill={fill} />
      <path d="M46.6663 16.6667H33.333V63.3334H46.6663V16.6667Z" fill={fill} />
      <path d="M66.6663 36.6667H53.333V63.3334H66.6663V36.6667Z" fill={fill} />
    </svg>
  )
}
