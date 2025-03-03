import { Text } from "@/components/Text"
import { ReactNode } from "react"
import { Box } from "@/styled-system/jsx"
import * as S from "./styles"

interface ChapterProps {
  title: ReactNode
  subtitle?: ReactNode
  leftText?: ReactNode
  rightText: ReactNode
  borderless?: boolean
}

export const Chapter = ({
  title,
  subtitle,
  leftText,
  rightText,
  borderless = false,
}: ChapterProps) => {
  return (
    <S.Chapter
      flexDirection={["column", "row", "row", "row"]}
      justifyContent="space-between"
      align="flex-start"
      gap={["32px", "160px"]}
      py="64px"
      borderTop={borderless ? undefined : "1px solid rgba(18, 18, 18, 0.2)"}
      maxW="1336px"
    >
      <Box
        position={["relative", "sticky", "sticky", "sticky"]}
        top={["0px", "64px", "68px", "68px"]}
        left="0px"
        pt="xs"
        maxW="520px"
        w="100%"
        mt={["0px", "-4px"]}
      >
        <Text font="h4">{title}</Text>
      </Box>

      <S.RightSide maxW="656px" w="100%">
        {rightText}
      </S.RightSide>
    </S.Chapter>
  )
}
