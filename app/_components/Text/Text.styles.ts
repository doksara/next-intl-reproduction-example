import { cva } from "@/styled-system/css"
import { RecipeVariantProps } from "@/styled-system/types"
import { ElementType } from "react"

export type TextVariant = "h1" | "h2" | "h3" | "h4" | "p1" | "p2" | "mono"

export const mapVariantToTag: Record<TextVariant, ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  p1: "p",
  p2: "p",
  mono: "p",
}

export const textStyles = cva({
  base: {
    position: "relative",
    fontFamily: "var(--sofascore-sans)",
    fontWeight: 400,
    lineHeight: 1,
    textWrap: "pretty",

    _before: {
      marginTop: ".35em",
      left: "-1.15em",
      flexShrink: 0,
      display: "inline-block",
      width: ".5em",
      height: ".5em",
    },
  },
  variants: {
    font: {
      h1: {
        fontSize: { base: "52px", md: "104px" },
        letterSpacing: { base: "-1.56px", md: "-3.12px" },
      },
      h2: {
        fontSize: { base: "44px", md: "80px" },
        letterSpacing: { base: "-1.32px", md: "-2.4px" },
      },
      h3: {
        fontSize: { base: "36px", md: "56px" },
        letterSpacing: { base: "-1.08px", md: "-1.68px" },
        lineHeight: { base: "36px", md: "62px" },
      },
      h4: {
        fontSize: { base: "28px", md: "40px" },
        letterSpacing: { base: "-0.84px", md: "-1.2px" },
        lineHeight: { base: "31px", md: "44px" },
      },
      p1: {
        fontSize: { base: "20px", md: "28px" },
        letterSpacing: { base: "-0.6px", md: "-0.84px" },
        lineHeight: { base: "22px", md: "31px" },
      },
      p2: {
        fontSize: { base: "16px", md: "20px" },
        letterSpacing: { base: "-0.48px", md: "-0.6px" },
        lineHeight: { base: "19px", md: "22px" },
      },
      mono: {
        fontFamily: "var(--sofascore-mono)",
        textTransform: "uppercase",
        fontSize: { base: "14px", md: "16px" },
        letterSpacing: { base: "-0.42px", md: "-0.48px" },
        lineHeight: { base: "15.4px", md: "17.6px" },
      },
    },
    fontWeight: {
      normal: {
        fontWeight: 400,
      },
      bold: {
        fontWeight: 700,
      },
    },
    indicatorColor: {
      magenta: {
        display: "flex",
        gap: { base: "8px", md: "16px" },

        _before: {
          content: "''",
          backgroundColor: "magenta",
        },
      },
      grey: {
        display: "flex",
        gap: { base: "8px", md: "16px" },

        _before: {
          content: "''",
          backgroundColor: "grey",
        },
      },
      blue: {
        display: "flex",
        gap: { base: "8px", md: "16px" },

        _before: {
          content: "''",
          backgroundColor: "blue",
        },
      },
      transparent: {
        display: "flex",
        gap: { base: "8px", md: "16px" },

        _before: {
          content: "''",
          backgroundColor: "transparent",
        },
      },
    },
  },
  defaultVariants: {
    font: "p1",
    fontWeight: "normal",
  },
})

export type TextVariantProps = RecipeVariantProps<typeof textStyles>
