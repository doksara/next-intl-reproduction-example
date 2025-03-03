import { IconExternal } from "../Icons"
import * as S from "./ExternalLink.styles"

export interface ExternalLinkProps {
  href: string
}

export const ExternalLink = ({
  href,
  children,
}: React.PropsWithChildren<ExternalLinkProps>) => {
  return (
    <S.ExternalLinkWrapper
      href={href}
      rel="noopener norefferer"
      target="_blank"
      w={["100%", "auto"]}
    >
      <S.ExternalLinkText>{children}</S.ExternalLinkText>
      <IconExternal />
    </S.ExternalLinkWrapper>
  )
}
