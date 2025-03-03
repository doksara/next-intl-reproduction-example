import { css } from "@/styled-system/css"
import { styled } from "@/styled-system/jsx"
import { StyledVariantProps } from "@/styled-system/types"

export const underlinedStyles = css.raw({
  position: "relative",
  display: "inline-block",
  zIndex: 1,

  _before: {
    content: "''",
    position: "absolute",
    left: "0",
    bottom: "-2px",
    width: "100%",
    height: "0.2em",
    zIndex: -1,
  },
})

export const highlightedStyles = css.raw({
  position: "relative",
  display: "inline-block",
  zIndex: 1,

  _before: {
    content: "''",
    display: "inline-block",
    position: "absolute",
    left: "0px",
    bottom: "0px",
    width: "100%",
    height: "100%",
    zIndex: -1,
  },
})

export const UnderlinedText = styled("span", {
  variants: {
    underlineColor: {
      blue: {
        background:
          "linear-gradient(token(colors.blue), token(colors.blue)) 0 90% / 100% .2em no-repeat",
      },
      blueDark: {
        background:
          "linear-gradient(token(colors.blueDark), token(colors.blueDark)) 0 90% / 100% .2em no-repeat",
      },
      blueAccent: {
        background:
          "linear-gradient(token(colors.blueAccent), token(colors.blueAccent)) 0 90% / 100% .2em no-repeat",
      },
      blueShades: {
        background:
          "linear-gradient(token(colors.blueShades), token(colors.blueShades)) 0 90% / 100% .2em no-repeat",
      },
      blueLightest: {
        background:
          "linear-gradient(token(colors.blueLightest), token(colors.blueLightest)) 0 90% / 100% .2em no-repeat",
      },
    },
  },
})

export type UnderlineTextVariants = StyledVariantProps<typeof UnderlinedText>
