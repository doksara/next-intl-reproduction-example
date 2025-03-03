import React from "react"
import { IconProps } from "./interface"

export const IconCurvedArrow = ({
  width = 62,
  height = 57,
  fill = "#121212",
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 62 57"
      fill="none"
      style={{
        position: "absolute",
        left: "50%",
        top: 0,
      }}
    >
      <path
        d="M58.5 56.5001L61.0679 51.3291L55.3057 51.6907L58.5 56.5001ZM1.01801 1.99975C9.87498 1.68058 23.1185 3.84735 34.6086 11.2665C46.0764 18.6712 55.8244 31.3226 57.72 52.0504L58.7158 51.9593C56.7913 30.9152 46.8682 17.9922 35.151 10.4264C23.4562 2.87509 10.0008 0.675398 0.981994 1.0004L1.01801 1.99975Z"
        fill={fill}
      />
    </svg>
  )
}
