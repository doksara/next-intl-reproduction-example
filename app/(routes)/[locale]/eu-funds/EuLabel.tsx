import { FormattedMessage } from "@/components/FormattedMessage"
import { IconEU, IconEUConcurrency, IconEUStructure } from "@/components/Icons"
import { Flex, HStack, Stack } from "@/styled-system/jsx"
import * as S from "./EuLabel.styles"

export const EuLabel = () => {
  return (
    <Flex
      justify="center"
      background="stone"
      p="28px 54px"
      borderRadius="32px"
      w="100%"
    >
      <Stack
        flexDirection={["column", "row", "row"]}
        alignItems="center"
        gap={["24px", "24px", "0px", "16px", "32px"]}
        flexWrap={["nowrap", "wrap", "nowrap", "nowrap"]}
        maxW={["100%", "500px", "100%"]}
        w="100%"
      >
        <HStack
          gap="16px"
          flexBasis={["100%", "100%", "auto"]}
          ml={["18px", "18px", "0px"]}
          alignItems={["flex-start", "flex-start", "center"]}
        >
          <IconEU width={54} height={38} />

          <Flex
            direction={["column", "row"]}
            alignItems={["flex-start", "flex-start", "center"]}
            gap="8px"
          >
            <S.LabelText w="86px">
              <FormattedMessage id="eu_funds_label_text1" />
            </S.LabelText>
            <S.LabelText w="138px">
              <FormattedMessage id="eu_funds_label_text2" />
            </S.LabelText>
          </Flex>
        </HStack>

        <Stack
          flexDirection={["column", "row", "row"]}
          gap={["24px", "24px", "0px", "16px", "32px"]}
        >
          <IconEUConcurrency width={234} height={90} />

          <IconEUStructure width={234} height={90} />
        </Stack>
      </Stack>
    </Flex>
  )
}
