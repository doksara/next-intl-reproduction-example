import React from "react"
import { IconProps } from "./interface"

export const IconTeam = ({
  width = 20,
  height = 18,
  fill = "#FF407F",
  className,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 18"
      fill="none"
      className={className}
    >
      <g clipPath="url(#clip0_248_30058)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.002 18H0.00195312V11L2.00195 9H9.00195L11.002 11V18Z"
          fill={fill}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.002 18H13.002V11H18.002L20.002 13V18Z"
          fill={fill}
        />
        <path
          d="M5.50391 7C7.4369 7 9.00391 5.433 9.00391 3.5C9.00391 1.567 7.4369 0 5.50391 0C3.57091 0 2.00391 1.567 2.00391 3.5C2.00391 5.433 3.57091 7 5.50391 7Z"
          fill={fill}
        />
        <path
          d="M14.5039 9C16.4369 9 18.0039 7.433 18.0039 5.5C18.0039 3.567 16.4369 2 14.5039 2C12.5709 2 11.0039 3.567 11.0039 5.5C11.0039 7.433 12.5709 9 14.5039 9Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_248_30058">
          <rect width={width} height={height} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
