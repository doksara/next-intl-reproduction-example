import { IconProps } from "./interface"

export const IconArrow = ({
  width = 10,
  height = 12,
  fill = "#F0EEDF",
  display,
  transform,
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 10 12"
      xmlns="http://www.w3.org/2000/svg"
      display={display}
      transform={transform}
    >
      <path
        d="M5.488 0.759766C5.584 0.759766 5.648 0.823765 5.648 0.919765V7.65577C5.648 7.75177 5.584 7.81577 5.488 7.81577H4.368C4.272 7.81577 4.208 7.75177 4.208 7.65577V0.919765C4.208 0.823765 4.272 0.759766 4.368 0.759766H5.488ZM9.024 5.76777L9.808 6.55177C9.872 6.61577 9.872 6.71177 9.808 6.77577L5.44 11.1438C5.376 11.2078 5.328 11.2398 5.232 11.2398H4.592C4.528 11.2398 4.496 11.2238 4.448 11.1758L0.048 6.77577C-0.016 6.71177 -0.016 6.61577 0.048 6.55177L0.832 5.76777C0.912 5.68777 0.992 5.68777 1.072 5.76777L4.928 9.62377L8.784 5.76777C8.864 5.68777 8.944 5.68777 9.024 5.76777Z"
        fill={fill}
      />
    </svg>
  )
}
