import { styled } from "@/styled-system/jsx"

export const AppFeatureCard = styled("article", {
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: { base: "flex-end", sm: "flex-start" },
    textAlign: "center",
    border: "1px solid grey",
    paddingBottom: { base: "0px", sm: "56px" },
    paddingInline: { base: "16px", sm: "32px" },
    height: "100%",
    width: { base: "264px", sm: "auto" },
    flexShrink: 0,
  },
})

export const AppFeatureCardDescription = styled("p", {
  base: {
    color: "grey",
    fontWeight: 400,
    fontSize: { base: "16px", sm: "20px" },
    lineHeight: { base: "1.2", sm: "24px" },
    borderTop: "1px solid grey",
    paddingTop: "12px",
    paddingBottom: { base: "12px", sm: "0px" },
    textAlign: { base: "start", sm: "start" },
  },
})
