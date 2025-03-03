import { styled } from "@/styled-system/jsx"

export const BottomSheetNavigation = styled("nav", {
  base: {
    display: { base: "block", sm: "none" },
    position: "fixed",
    bottom: "0",
    left: "0",
    w: "100%",
    bg: "stone",
    color: "grey",
  },
})

export const BottomSheetList = styled("ul", {
  base: {
    display: "flex",
    flexDirection: "column",
  },
})

export const BottomSheetListItem = styled("li", {
  base: {
    padding: "20px",
  },
})

export const BottomSheetActiveItem = styled("button", {
  base: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    width: "100%",
    textAlign: "left",
    gap: "32px",
  },
})
