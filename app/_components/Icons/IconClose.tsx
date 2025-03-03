import React from "react"
import { IconProps } from "./interface"

export const IconClose = ({
  width = 32,
  height = 32,
  fill = "#F0EEDF",
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M0 2.51495L2.5029 0L31.7033 29.3411L29.2004 31.856L0 2.51495Z"
        fill={fill}
      />
      <path
        d="M29.4971 0.143988L32 2.65894L2.79955 32L0.296656 29.4851L29.4971 0.143988Z"
        fill={fill}
      />
    </svg>
  )
}
