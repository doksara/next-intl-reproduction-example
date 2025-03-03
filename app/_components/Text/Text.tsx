import { CSSProperties } from "react"
import { mapVariantToTag, TextVariantProps, textStyles } from "./Text.styles"
import { JsxStyleProps } from "@/styled-system/types"
import { css } from "@/styled-system/css"

interface TextProps {
  style?: CSSProperties
  color?: JsxStyleProps["color"]
  as?: keyof JSX.IntrinsicElements
}

export const Text = ({
  as,
  font,
  fontWeight = "normal",
  color,
  indicatorColor,
  children,
  style,
}: React.PropsWithChildren<TextProps> & TextVariantProps) => {
  const level = mapVariantToTag[font!]
  const TextElement = as || (level as keyof JSX.IntrinsicElements)

  return (
    <TextElement
      className={css(
        textStyles.raw({
          font: font,
          fontWeight: fontWeight,
          indicatorColor: indicatorColor,
        }),
        css.raw({
          color: color,
        })
      )}
      style={style}
    >
      {children}
    </TextElement>
  )
}
