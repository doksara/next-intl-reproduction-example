import { Flex, styled } from "@/styled-system/jsx"

export const PopupBackground = styled(Flex, {
  base: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "rgba(18, 18, 18, 0.9)",
    zIndex: 1000,
  },
})

export const CustomVideo = styled("iframe", {
  base: {
    border: 0,
    width: "100%",
    height: "auto",
    zIndex: 10001,
    aspectRatio: "16 / 9",
    objectFit: "cover",
  },
})
