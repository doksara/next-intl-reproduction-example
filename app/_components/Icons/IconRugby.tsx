import React from "react"
import { IconProps } from "./interface"

export const IconRugby = ({
  width = 16,
  height = 16,
  fill = "#7181F7",
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Rugby_16px">
        <g id="Vector">
          <path
            d="M6.44 2.16L4.54 1H2.4L1 2.4V3.41L1.83 3.55L3.56 4.61L10.58 11.61L11.72 13.52L11.93 14.99H13.59L14.99 13.59V11.76L13.33 9.03L6.44 2.16Z"
            fill={fill}
          />
          <path
            d="M13.91 8.57L14.99 10.33V9.4L13.59 5.9L10.09 2.4L6.6 1H5.97L6.9 1.57L13.91 8.57Z"
            fill={fill}
          />
          <path
            d="M9.99 12.07L3.1 5.2L1.51 4.23L1 4.16V6.6L2.4 10.09L5.9 13.59L9.4 14.99H11.17L10.98 13.7L9.99 12.07Z"
            fill={fill}
          />
        </g>
      </g>
    </svg>
  )
}
