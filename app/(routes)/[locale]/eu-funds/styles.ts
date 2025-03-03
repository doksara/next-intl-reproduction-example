import { css } from "@/styled-system/css"

export const linkRecipe = css({
  base: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    transition: "color .3s linear",
    textDecoration: "underline",

    _hover: {
      color: "blueShades",
    },
  },
})
