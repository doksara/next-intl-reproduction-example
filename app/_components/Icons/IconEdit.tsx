import React from "react"
import { IconProps } from "./interface"

export const IconEdit = ({
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
        d="M6.66992 60.8335V73.3335H19.1699L61.5366 30.9668L49.0366 18.4668L6.66992 60.8335Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M73.346 19.1699V14.4699L65.546 6.66992H60.846L53.7793 13.7366L66.2793 26.2366L73.346 19.1699Z"
        fill={fill}
      />
    </svg>
  )
}
