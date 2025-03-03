import { styled } from "@/styled-system/jsx"

export const Level2Heading = styled("h2", {
  base: {
    fontSize: { base: "20px", md: "28px" },
    letterSpacing: { base: "-0.6px", md: "-0.84px" },
    lineHeight: { base: "22px", md: "31px" },
    fontWeight: "bold",
  },
})

export const Level3Heading = styled("h3", {
  base: {
    fontSize: { base: "16px", md: "20px" },
    letterSpacing: { base: "-0.48px", md: "-0.6px" },
    lineHeight: { base: "19px", md: "22px" },
    fontWeight: "bold",
  },
})

export const List = styled("ul", {
  base: {
    paddingLeft: "32px",
  },
})

export const ListItem = styled("li", {
  base: {
    marginBottom: "16px",

    _last: {
      marginBottom: "0px",
    },

    _before: {
      content: "''",
      display: "inline-block",
      width: "12px",
      height: "12px",
      background: "stone",
      marginRight: "16px",
    },
  },
})
