import {
  FormattedMessage,
  UnderlinedFormattedMessage,
} from "@/components/FormattedMessage"
import { Text } from "@/components/Text"
import { VStack, Divider } from "@/styled-system/jsx"
import { ReactNode } from "react"
import * as S from "./CollagueCard.styles"

interface CollagueCardProps {
  titleId: string
  descriptionId: string
  listItems: string[]
  Icon: ReactNode
}

export const CollagueCard = ({
  titleId,
  descriptionId,
  listItems,
  Icon,
}: CollagueCardProps) => {
  return (
    <VStack
      gap={["68px", "68px", "90px"]}
      p={["20px", "20px", "40px"]}
      border="1px solid grey"
      alignItems="flex-start"
      h={["480px", "auto"]}
    >
      {Icon}

      <VStack
        minH={["280px", "380px", "380px", "420px"]}
        justifyContent="space-between"
        alignItems="flex-start"
        h="100%"
      >
        <S.StyledTitle>
          <UnderlinedFormattedMessage
            id={titleId}
            underlineColor="blueAccent"
          />
        </S.StyledTitle>

        <VStack gap="0px" alignItems="flex-start">
          <S.StyledDescription>
            <FormattedMessage id={descriptionId} />
          </S.StyledDescription>

          <Divider
            orientation="horizontal"
            my="16px"
            borderColor="rgba(18, 18, 18, 0.2)"
          />

          <S.StyledList>
            {listItems.map((item) => (
              <S.StyledListItem key={item}>
                <Text font="mono">
                  <FormattedMessage id={item} />
                </Text>
              </S.StyledListItem>
            ))}
          </S.StyledList>
        </VStack>
      </VStack>
    </VStack>
  )
}
