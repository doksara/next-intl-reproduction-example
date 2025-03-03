import { IconProps } from "./interface"

export const IconMinus = ({
  width = 28,
  height = 4,
  fill = "#121212",
  className,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 28 4"
      fill="none"
      className={className}
    >
      <path
        d="M0 3.39378V0.606846C0 0.345571 0.174184 0.171387 0.435459 0.171387H27.5645C27.8258 0.171387 28 0.345571 28 0.606846V3.39378C28 3.65506 27.8258 3.82924 27.5645 3.82924H0.435459C0.174184 3.82924 0 3.65506 0 3.39378Z"
        fill={fill}
      />
      <path
        d="M12.4762 1L15.5238 1C15.8095 1 16 1.01244 16 1.0311L16 2.9689C16 2.98756 15.8095 3 15.5238 3L12.4762 3C12.1905 3 12 2.98756 12 2.9689L12 1.0311C12 1.01244 12.1905 1 12.4762 1Z"
        fill={fill}
      />
    </svg>
  )
}
