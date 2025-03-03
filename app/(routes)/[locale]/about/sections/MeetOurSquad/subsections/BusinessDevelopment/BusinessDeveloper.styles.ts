import { styled } from "@/styled-system/jsx"

export const Figure = styled("button", {
  base: {
    width: "100%",
    background: "grey",
    color: "stone",
    transition: "all .3s linear",

    _hover: {
      background: "blueDark",

      "&:not(:focus)": {
        cursor: `url(/images/cursor-click-to-copy-email.png), auto`,
      },
    },

    _focus: {
      cursor: `url(/images/cursor-email-copied.png), auto`,
    },
  },
})

export const Caption = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "24px",

    "& p:last-child": {
      opacity: 0.8,
    },
  },
})
