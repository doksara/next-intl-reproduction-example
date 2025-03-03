import React from "react"
import { IconProps } from "./interface"

export const IconCopy = ({
  width = 27,
  height = 36,
  fill = "#121212",
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 27 36"
      fill="none"
    >
      <g clipPath="url(#clip0_105_23636)">
        <path
          d="M22.775 11.0068V32.0318H10.5V11.0068H22.75M26.25 7.50684H7V35.5318H26.25V7.50684Z"
          fill={fill}
        />
        <path
          d="M3.50391 28.525H0.00390625V0.5H19.2539V4H3.50391V28.525Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_105_23636">
          <rect
            width="26.275"
            height="35.025"
            fill="white"
            transform="translate(0.00390625 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
