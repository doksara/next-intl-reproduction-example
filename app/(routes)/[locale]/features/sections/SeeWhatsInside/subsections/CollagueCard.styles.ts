import { styled } from "@/styled-system/jsx"

export const StyledTitle = styled("h3", {
  base: {
    fontSize: { base: "36px", sm: "54px", xl: "58px" },
    lineHeight: 1,
    letterSpacing: { base: "-1.08px", sm: "-1.74px" },
  },
})

export const StyledDescription = styled("p", {
  base: {
    fontSize: { base: "20px", sm: "26px", xl: "28px" },
    lineHeight: { base: 1.1, sm: 1 },
    letterSpacing: { base: "-0.6px", sm: "-0.84" },
  },
})

export const StyledList = styled("ul", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
})

export const StyledListItem = styled("li", {
  base: {
    display: "flex",
    alignItems: "flex-start",

    _before: {
      content: "''",
      flexShrink: 0,
      display: "inline-block",
      width: "12px",
      height: "12px",
      background: "grey",
      marginRight: "16px",
      marginTop: "2px",
    },
  },
})
