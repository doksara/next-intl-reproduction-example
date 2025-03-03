import { styled } from "@/styled-system/jsx"

export const Article = styled("article", {
  base: {
    width: { base: "100%", lg: "440px" },

    display: "flex",
    flexDirection: "column",
    gap: { base: "24px", lg: "56px" },
  },
})

export const TitleFirstWord = styled("span", {
  base: {
    background:
      "linear-gradient(token(colors.blueShades), token(colors.blueShades)) 0 90% / 100% .2em no-repeat",
  },
})

export const TitleRest = styled("span", {
  base: {
    display: { base: "inline", lg: "block" },
  },
})
