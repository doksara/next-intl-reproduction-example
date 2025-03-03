import React from "react"
import { IconProps } from "./interface"

export const IconLeagues = ({
  width = 80,
  height = 80,
  fill = "#7181F7",
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 80 80"
      fill="none"
    >
      <path
        d="M20 6.66675H60V50.0001L53.3333 56.6667H26.6667L20 50.0001V6.66675Z"
        fill={fill}
      />
      <path d="M43.3332 60H36.6665V73.3333H43.3332V60Z" fill={fill} />
      <path d="M56.6668 66.6667H23.3335V73.3334H56.6668V66.6667Z" fill={fill} />
      <path
        d="M19.9998 43.3347V46.668L6.6665 33.3347V13.3347H13.3332V30.0014L19.9998 36.668V43.3347Z"
        fill={fill}
      />
      <path d="M16.6667 13.3347H10V20.0014H16.6667V13.3347Z" fill={fill} />
      <path
        d="M60 36.668V46.668L73.3333 33.3347V13.3347H66.6667V30.0014L63.3333 33.3347L60 36.668Z"
        fill={fill}
      />
      <path d="M63.3335 20.0015H73.3335V13.3348H63.3335V20.0015Z" fill={fill} />
    </svg>
  )
}
