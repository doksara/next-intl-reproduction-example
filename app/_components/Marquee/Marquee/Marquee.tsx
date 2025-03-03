import { JsxStyleProps } from "@/styled-system/types"
import * as S from "./Marquee.styles"

interface MarqueeProps {
  py?: JsxStyleProps["py"]
}

export const Marquee = ({
  py = "16px",
  children,
}: React.PropsWithChildren<MarqueeProps>) => {
  return (
    <S.Marquee py={py} role="marquee">
      <S.MarqueeGroup>{children}</S.MarqueeGroup>
      <S.MarqueeGroup aria-hidden="true">{children}</S.MarqueeGroup>
    </S.Marquee>
  )
}
