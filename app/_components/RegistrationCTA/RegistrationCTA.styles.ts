import { Center, styled } from "@/styled-system/jsx"

export const CenterWithBorders = styled(Center, {
  base: {
    position: "relative",
    flexDirection: "column",

    _before: {
      content: "''",
      position: "relative",
      alignSelf: "flex-start",
      marginBlock: "10px",

      width: { base: "60px", md: "160px" },
      height: { base: "16px", md: "46px" },
      borderTop: "2px solid token(colors.grey)",
      borderLeft: "2px solid token(colors.grey)",
    },

    _after: {
      content: "''",
      position: "relative",
      alignSelf: "flex-end",
      marginBlock: "10px",

      width: { base: "60px", md: "160px" },
      height: { base: "16px", md: "46px" },
      borderBottom: "2px solid token(colors.grey)",
      borderRight: "2px solid token(colors.grey)",
    },
  },
})
