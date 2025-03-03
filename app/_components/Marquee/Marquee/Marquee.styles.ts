import { styled } from "@/styled-system/jsx"

export const Marquee = styled("div", {
  base: {
    display: "flex",
    overflow: "hidden",
    userSelect: "none",
    gap: 16, // TODO
  },
})

export const MarqueeGroup = styled("div", {
  base: {
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    gap: 16, // TODO
    minWidth: "100%",
    animation: "scrollX 13s linear infinite",
  },
})
