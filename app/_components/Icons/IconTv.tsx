import React from "react"
import { IconProps } from "./interface"

export const IconTv = ({
  width = 64,
  height = 64,
  fill = "#FF407F",
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 64 64"
      fill="none"
    >
      <path
        d="M53.3281 10.6719H5.32812V48.0052H23.9948V53.3385H39.9948V48.0052H58.6615V10.6719H53.3281ZM53.3281 42.6718H10.6615V16.0052H53.3281V42.6718Z"
        fill={fill}
      />
    </svg>
  )
}
