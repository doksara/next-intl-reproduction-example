import { useTranslations } from "next-intl"
import { highlightedStyles } from "./FormattedMessage.styles"
import { css } from "@/styled-system/css"
import { JsxStyleProps } from "@/styled-system/types"

interface HighlightedFormattedMessageProps {
  id: string
  background?: JsxStyleProps["background"]
}

export const HighlightedFormattedMessage = ({
  id,
  background = "blueLight",
}: HighlightedFormattedMessageProps) => {
  const t = useTranslations()

  return t.rich(id, {
    h: (chunks) => (
      <>
        <br />
        <span
          className={css(highlightedStyles, {
            color: "grey",
            marginTop: "12px",
            padding: "10px",
            _before: { background: background },
          })}
        >
          {chunks}
        </span>
      </>
    ),
  })
}
