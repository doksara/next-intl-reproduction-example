import { styled } from "@/styled-system/jsx"

export const ExternalLinkWrapper = styled("a", {
  base: {
    display: "flex",
    justifyContent: "space-between",
    gap: { base: "24px", sm: "124px" },
    alignItems: "center",
    padding: { base: "20px 26px", sm: "24px 32px" },

    transition: "all .3s linear",
    color: "stone",
    background: "grey",

    _hover: {
      background: "blueDarkest",
    },

    _active: {
      background: "blue",
    },
  },
})

export const ExternalLinkText = styled("p", {
  base: {
    fontSize: { base: "20px", sm: "28px" },
    lineHeight: { base: 1.1, sm: 1 },
    letterSpacing: { base: "-0.6px", sm: "-0.84px" },
    whiteSpace: "nowrap",
  },
})
