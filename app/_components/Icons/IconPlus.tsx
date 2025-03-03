import { IconProps } from "./interface"

export const IconPlus = ({
  width = 28,
  height = 28,
  fill = "#121212",
  className,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 28 28"
      fill="none"
      className={className}
    >
      <path
        d="M0 15.3935V12.6066C0 12.3453 0.174184 12.1711 0.435459 12.1711H27.5645C27.8258 12.1711 28 12.3453 28 12.6066V15.3935C28 15.6548 27.8258 15.829 27.5645 15.829H0.435459C0.174184 15.829 0 15.6548 0 15.3935Z"
        fill={fill}
      />
      <path
        d="M12.6077 -1.40855e-07L15.3946 -1.90345e-08C15.6559 -7.61382e-09 15.8301 0.174184 15.8301 0.435459L15.8301 27.5645C15.8301 27.8258 15.6559 28 15.3946 28L12.6077 28C12.3464 28 12.1722 27.8258 12.1722 27.5645L12.1722 0.435459C12.1722 0.174183 12.3464 -1.52276e-07 12.6077 -1.40855e-07Z"
        fill={fill}
      />
    </svg>
  )
}
