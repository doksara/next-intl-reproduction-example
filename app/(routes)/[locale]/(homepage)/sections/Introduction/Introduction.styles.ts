import { styled } from "@/styled-system/jsx"

export const Video = styled("video", {
  base: {
    position: "absolute",
    top: 0,
    left: 0,

    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
})
