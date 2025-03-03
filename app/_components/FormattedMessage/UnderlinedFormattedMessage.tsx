import { useTranslations } from "next-intl"
import {
  UnderlinedText,
  UnderlineTextVariants,
} from "./FormattedMessage.styles"

interface UnderlinedFormattedMessageProps extends UnderlineTextVariants {
  id: string
}

export const UnderlinedFormattedMessage = ({
  id,
  underlineColor,
}: UnderlinedFormattedMessageProps) => {
  const t = useTranslations()

  return t.rich(id, {
    u: (chunks) => (
      <UnderlinedText underlineColor={underlineColor}>{chunks}</UnderlinedText>
    ),
  })
}
