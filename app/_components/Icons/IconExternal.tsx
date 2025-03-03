import React from "react"
import { IconProps } from "./interface"

export const IconExternal = ({
  width = 22,
  height = 22,
  fill = "#F0EEDF",
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_373_4220)">
        <path
          d="M18.5625 18.5625H3.4375V3.4375H11V1.375H1.375V20.625H20.625V11H18.5625V18.5625Z"
          fill={fill}
        />
        <path
          d="M13.7502 1.375V3.4375H17.1052L7.52148 13.0213L8.97898 14.4787L18.5627 4.895V8.25H20.6252V1.375H13.7502Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_373_4220">
          <rect
            width="19.25"
            height="19.25"
            fill="white"
            transform="translate(1.375 1.375)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
