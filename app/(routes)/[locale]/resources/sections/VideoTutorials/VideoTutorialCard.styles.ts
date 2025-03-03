import { styled } from "@/styled-system/jsx"

export const Card = styled("button", {
  base: {
    padding: { base: "20px", sm: "32px" },
    background: "blue",
    height: { base: "200px", sm: "300px" },
    color: "grey",

    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    transition: "background .3s linear",
    cursor: "pointer",

    _hover: {
      background: "stone",
    },
  },
})

export const Order = styled("span", {
  base: {
    fontFamily: "var(--sofascore-mono)",
    textTransform: "uppercase",
    fontSize: { base: "14px", sm: "16px", lg: "18px" },
    lineHeight: { base: 1.1, sm: 1 },
    letterSpacing: { base: "-0.42px", sm: "-0.54px" },
  },
})

export const Title = styled("h3", {
  base: {
    textAlign: "left",
    fontSize: { base: "36px", sm: "50px", lg: "58px" },
    lineHeight: 1,
    letterSpacing: { base: "-1.08px", sm: "-1.74px" },
  },
})
