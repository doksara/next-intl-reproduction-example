import React from "react"
import { IconProps } from "./interface"

export const IconFootballAssist = ({
  width = 20,
  height = 22,
  fill = "#FF407F",
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 22"
      fill="none"
    >
      <g clipPath="url(#clip0_248_30080)">
        <path
          d="M11.8613 21.0298L12.6257 21.8051L16.4912 21.0298L14.1763 18.7148L11.8613 21.0298Z"
          fill={fill}
        />
        <path
          d="M7.99609 17.1758L8.77138 17.9402L12.626 17.1758L10.311 14.8608L7.99609 17.1758Z"
          fill={fill}
        />
        <path
          d="M4.14062 13.3101L4.90499 14.0853L8.77051 13.3101L6.45557 10.9951L4.14062 13.3101Z"
          fill={fill}
        />
        <path
          d="M0.275391 9.45526L1.05068 10.2196L4.90528 9.45526L2.59033 7.12939L0.275391 9.45526Z"
          fill={fill}
        />
        <path
          d="M17.2657 12.5346L15.7261 3.26388H12.6358L9.54559 1.72423V0.18457H6.45536L2.58984 5.58974L18.0301 21.03L19.5697 19.4903L17.2548 12.5455L17.2657 12.5346ZM7.21973 7.1294H14.1427L14.5031 9.3133H9.39272L7.20881 7.1294H7.21973ZM13.5094 13.4737L11.3255 11.2897H14.9617L15.322 13.4737H13.5094Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_248_30080">
          <rect
            width="19.3057"
            height="21.6207"
            fill="white"
            transform="translate(0.275391 0.184082)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
