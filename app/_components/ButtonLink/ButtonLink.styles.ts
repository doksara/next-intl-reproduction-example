import { css } from "@/styled-system/css"
import { styled } from "@/styled-system/jsx"

export const buttonLinkStyles = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: { base: "20px 26px", sm: "24px 32px" },

  transition: "all .3s linear",
  color: "stone",
  background: "blueLight",

  _hover: {
    background: "blueShades",
  },
})

export const LinkText = styled("p", {
  base: {
    fontSize: { base: "20px", sm: "28px" },
    lineHeight: { base: 1.1, sm: 1 },
    letterSpacing: { base: "-0.6px", sm: "-0.84px" },
    whiteSpace: "nowrap",
  },
})
