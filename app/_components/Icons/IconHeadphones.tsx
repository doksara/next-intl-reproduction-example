import React from "react"
import { IconProps } from "./interface"

export const IconHeadphones = ({
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
        d="M54.6967 13.3301H25.2967L13.3301 25.2967V39.9967V59.9967L19.9967 66.6634H29.9967V43.3301L26.6634 39.9967H19.9967V28.0301L28.0301 19.9967H51.9634L59.9967 28.0301V39.9967H53.3301L49.9967 43.3301V66.6634H59.9967L66.6634 59.9967V39.9967V25.2967L54.6967 13.3301Z"
        fill={fill}
      />
    </svg>
  )
}
