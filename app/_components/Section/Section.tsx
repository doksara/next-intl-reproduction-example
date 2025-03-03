import { JsxStyleProps } from "@/styled-system/types"
import * as S from "./Section.styles"

interface SectionProps extends JsxStyleProps {
  id: string
}

export const Section = ({
  id,
  children,
  ...otherProps
}: React.PropsWithChildren<SectionProps>) => {
  return (
    <S.Section id={id} {...otherProps}>
      {children}
    </S.Section>
  )
}
