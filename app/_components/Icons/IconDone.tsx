import React from "react"
import { IconProps } from "./interface"

export const IconDone = ({
  width = 32,
  height = 25,
  fill = "#121212",
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 25"
      fill="none"
    >
      <path
        d="M11.5846 22.7512L1.66797 12.8346L4.08464 10.4512L11.5846 17.9512L27.5346 2.00122L29.968 4.36789L11.5846 22.7512Z"
        fill={fill}
      />
    </svg>
  )
}
