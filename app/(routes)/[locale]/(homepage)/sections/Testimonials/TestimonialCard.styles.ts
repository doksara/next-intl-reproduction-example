import { styled } from "@/styled-system/jsx"

export const TestimonialCard = styled("article", {
  base: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

    width: { base: "100%", sm: "100%", md: "720px", lg: "928px" },
    height: { base: "550px", sm: "388px" },
    paddingRight: { base: "0px", sm: "100px" },

    color: "grey",
    backgroundColor: "blueLightest",
  },
})

export const TestimonialCardQuote = styled("blockquote", {
  base: {
    position: "relative",
  },
})
