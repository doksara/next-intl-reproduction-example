import { styled } from "@/styled-system/jsx"
import { Link } from "@/i18n/routing"

export const ClickableArrow = styled(Link, {
  base: {
    border: "none",
    outline: "none",
    background: "transparent",
    cursor: "pointer",
    transition: "transform .3s ease-in-out",

    _hover: {
      transform: "translateY(-4px)",
    },
  },
})
