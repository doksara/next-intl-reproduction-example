import { styled } from "@/styled-system/jsx"

export const AccordionHeader = styled("button", {
  base: {
    appearance: "none",
    background: "transparent",
    border: "none",
    cursor: "pointer",

    padding: "24px 0",

    color: "grey",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    textAlign: "left",
  },
})

export const AccordionSection = styled("section", {
  base: {
    position: "relative",
    background: "stone",
    borderTop: "1px solid token(colors.grey)",

    _last: {
      borderBottom: "1px solid token(colors.grey)",
    },
  },
})
