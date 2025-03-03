import { Link } from "@/i18n/routing"

import { IconArrow } from "../Icons"
import * as S from "./ButtonLink.styles"

export interface ButtonLinkProps {
  href: string
}

export const ButtonLink = ({
  href,
  children,
}: React.PropsWithChildren<ButtonLinkProps>) => {
  return (
    <Link href={href} className={S.buttonLinkStyles}>
      <S.LinkText>{children}</S.LinkText>
      <IconArrow transform="rotate(-90)" width={15} height={18} />
    </Link>
  )
}
