import React from "react"
import { IconProps } from "./interface"

export const IconCross = ({
  width = 14,
  height = 14,
  fill = "#7181F7",
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="ic_cross_16" clipPath="url(#clip0_358_3579)">
        <path id="Vector" d="M14 5H9V0H5V5H0V9H5V14H9V9H14V5Z" fill={fill} />
      </g>
      <defs>
        <clipPath id="clip0_358_3579">
          <rect width="14" height="14" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
