import { styled } from "@/styled-system/jsx"

export const QuoteCardArticle = styled("article", {
  base: {
    width: "100%",
    maxWidth: { base: "100%", sm: "520px" },
    paddingTop: "24px",
    borderTop: "1px solid token(colors.grey)",
  },
})

export const QuoteCardDescription = styled("blockquote", {
  base: {
    fontSize: "23px",
    lineHeight: 1.1,
    letterSpacing: "-0.699px",
  },
})

export const QuoteCardName = styled("p", {
  base: {
    fontSize: "28px",
    fontWeight: "bold",
    letterSpacing: "-0.84px",
    display: "inline",
    lineHeight: { base: 1.1, sm: 1.5 },
    background:
      "linear-gradient(#D7DBFD, #D7DBFD) 0 110% / 100% .40em no-repeat",
  },
})
