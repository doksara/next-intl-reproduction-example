import React from "react"
import { IconProps } from "./interface"

export const IconWhatsNew = ({
  width = 68,
  height = 55,
  fill = "#7181F7",
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 68 55"
      fill="none"
    >
      <g clipPath="url(#clip0_248_30447)">
        <path
          d="M54.0003 6.83716L0.666992 17.5038V34.1705L7.33366 35.8372V54.1705H30.667V54.0038L30.8337 54.1705L40.8003 44.2038L54.0003 47.5038V6.83716ZM28.067 47.5038H14.0003V37.5038L33.267 42.3038L28.067 47.5038Z"
          fill={fill}
        />
        <path
          d="M57.334 0.834473V4.16781V5.50114V49.1678V54.1678H67.334V50.8345V4.16781V0.834473H57.334Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_248_30447">
          <rect
            width="66.6667"
            height="53.3333"
            fill="white"
            transform="translate(0.666504 0.833252)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
