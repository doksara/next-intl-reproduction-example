import React from "react"
import { IconProps } from "./interface"

export const IconWidgets = ({
  width = 80,
  height = 80,
  fill = "#FF407F",
  className,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 80 80"
      fill="none"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.7526 50.0833H8.33594V10H48.4193V25.4167H23.7526V50.0833ZM57.5539 71.6699H70.0059V31.2012H29.5371V71.6699H57.5539Z"
        fill={fill}
      />
    </svg>
  )
}
