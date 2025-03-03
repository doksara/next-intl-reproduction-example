import { styled } from "@/styled-system/jsx"

export const Card = styled("button", {
  base: {
    padding: { base: "20px", sm: "32px" },
    background: "blue",
    maxWidth: "100%",
    width: "100%",
    height: { base: "200px", sm: "300px" },
    color: "grey",

    display: "flex",
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

export const Department = styled("p", {
  base: {
    fontSize: { base: "36px", sm: "50px", lg: "58px" },
    lineHeight: 1,
    letterSpacing: { base: "-1.08px", sm: "-1.74px" },
    textAlign: "start",
  },
})

export const Email = styled("p", {
  base: {
    fontSize: { base: "20px", sm: "24px", lg: "28px" },
    lineHeight: { base: 1.1, sm: 1 },
    letterSpacing: { base: "-0.6px", sm: "-0.84px" },
  },
})
