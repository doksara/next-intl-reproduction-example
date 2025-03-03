import React from "react"
import { IconProps } from "./interface"

export const IconNote = ({
  width = 54,
  height = 68,
  fill = "#FF407F",
  className,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 54 68"
      fill="none"
      className={className}
    >
      <g clipPath="url(#clip0_248_30920)">
        <path
          d="M33.6654 0.667969H0.332031V67.3346H53.6654V20.668L33.6654 0.667969ZM46.9987 60.668H6.9987V54.0013H46.9987V60.668ZM46.9987 47.3346H6.9987V40.668H46.9987V47.3346ZM30.332 24.0013V7.33464L46.9987 24.0013H30.332Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_248_30920">
          <rect
            width="53.3333"
            height="66.6667"
            fill="white"
            transform="translate(0.330078 0.669922)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
