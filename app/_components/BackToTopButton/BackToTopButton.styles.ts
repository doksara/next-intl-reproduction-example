import { styled } from "@/styled-system/jsx"

export const StyledButton = styled("button", {
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40px",
    height: "40px",
    appearance: "none",
    outline: "none",
    cursor: "pointer",
    border: "none",
    borderRadius: "50%",
    color: "grey",
    background: "stone",
    transition: "all 0.3s ease-out",

    _hover: {
      background: "blue",
    },
  },
})
