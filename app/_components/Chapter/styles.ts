import { Box, Flex, styled } from "@/styled-system/jsx"

export const Chapter = styled(Flex, {
  base: {
    background: "inherit",

    "& p": {
      whiteSpace: "pre-wrap",
    },
  },
})

export const RightSide = styled(Box)
