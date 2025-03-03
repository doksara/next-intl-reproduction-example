import React from "react"
import { IconProps } from "./interface"

export const IconGooglePlay = ({
  width = 30,
  height = 30,
  fill = "#F0EEDF",
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Store-Logos">
        <g id="Vector">
          <path d="M7 8.1161V21.166L13.532 14.6549L7 8.1161Z" fill={fill} />
          <path
            d="M14.5188 13.6682L17.7292 10.4856L10.0367 6.00365C9.72342 5.81742 9.36576 5.71901 9.0013 5.71875C8.68805 5.71925 8.37935 5.79379 8.10039 5.93629C7.82143 6.07878 7.5801 6.28521 7.39609 6.53871L14.5188 13.6682Z"
            fill={fill}
          />
          <path
            d="M21.9472 12.9177L18.9731 11.1805L15.4986 14.6549L18.9731 18.1294L21.9472 16.4338C22.2653 16.2635 22.5313 16.01 22.7167 15.7004C22.9021 15.3908 23 15.0367 23 14.6758C23 14.3149 22.9021 13.9608 22.7167 13.6512C22.5313 13.3416 22.2653 13.0881 21.9472 12.9177Z"
            fill={fill}
          />
          <path
            d="M14.5118 15.6347L7.3544 22.7573C7.53908 23.0144 7.78214 23.2241 8.0636 23.3691C8.34507 23.514 8.65691 23.5901 8.97351 23.5911C9.33075 23.593 9.68167 23.4969 9.98806 23.3132L17.6875 18.8729L14.5118 15.6347Z"
            fill={fill}
          />
        </g>
      </g>
    </svg>
  )
}
