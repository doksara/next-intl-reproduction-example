import { styled } from "@/styled-system/jsx"

export const SlideshowControl = styled("button", {
  base: {
    appearance: "none",
    border: "none",
    outline: "none",
    cursor: "pointer",

    _disabled: {
      opacity: 0.5,
      cursor: "not-allowed",
    },
  },
})

export const SlideshowNavigationItem = styled("button", {
  base: {
    appearance: "none",
    outline: "none",
    cursor: "pointer",

    width: "16px",
    height: "16px",
    border: "1px solid token(colors.blueLightest)",
    transition: "backgroundColor .3s ease",
    listStyle: "none",

    _hover: {
      backgroundColor: "blueLightest",
    },

    _active: {
      backgroundColor: "blueLightest",
    },
  },
})
