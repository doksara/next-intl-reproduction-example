import { FormattedMessage } from "@/components/FormattedMessage"
import { IconChart, IconIndicatorStats, IconTv } from "@/components/Icons"
import { Text } from "@/components/Text"
import { Box, Container, Divider, Stack, VStack } from "@/styled-system/jsx"
import { Article, TitleFirstWord, TitleRest } from "./MajorFeatures.styles"

export const MajorFeatures = () => {
  return (
    <Container>
      <Stack
        flexDirection={["column", "column", "column", "row"]}
        justifyContent="space-between"
        py={["96px", "96px", "144px"]}
        alignItems="stretch"
        gap={["96px", "96px", "96px", "56px"]}
      >
        <Article>
          <Box height={["auto", "auto", "auto", "156px"]} w="100%">
            <Text font="h2">
              <FormattedMessage
                id="features_sofascoreEditor_item1_title"
                rich
                values={{
                  u: (chunks) => <TitleFirstWord>{chunks}</TitleFirstWord>,
                  break: (chunks) => <TitleRest>{chunks}</TitleRest>,
                }}
              />
            </Text>
          </Box>
          <VStack alignItems="flex-start" gap={["8px", "8px", "16px"]}>
            <IconIndicatorStats width={64} height={64} fill="#FF407F" />
            <Divider
              orientation="horizontal"
              maxW="144px"
              borderColor="rgba(240, 238, 223, 0.30)"
            />
            <Box opacity="0.8">
              <Text font="p1">
                <FormattedMessage id="features_sofascoreEditor_item1_description" />
              </Text>
            </Box>
          </VStack>
        </Article>

        <Article>
          <Box
            maxW={["100%", "100%", "100%", "380px"]}
            height={["auto", "auto", "auto", "156px"]}
            w="100%"
          >
            <Text font="h2">
              <FormattedMessage
                id="features_sofascoreEditor_item2_title"
                rich
                values={{
                  u: (chunks) => <TitleFirstWord>{chunks}</TitleFirstWord>,
                  break: (chunks) => <TitleRest>{chunks}</TitleRest>,
                }}
              />
            </Text>
          </Box>
          <VStack alignItems="flex-start" gap={["8px", "8px", "16px"]}>
            <IconChart />
            <Divider
              orientation="horizontal"
              maxW="144px"
              borderColor="rgba(240, 238, 223, 0.30)"
            />
            <Box opacity="0.8">
              <Text font="p1">
                <FormattedMessage id="features_sofascoreEditor_item2_description" />
              </Text>
            </Box>
          </VStack>
        </Article>

        <Article>
          <Box
            maxW={["100%", "100%", "100%", "380px"]}
            height={["auto", "auto", "auto", "156px"]}
            w="100%"
          >
            <Text font="h2">
              <FormattedMessage
                id="features_sofascoreEditor_item3_title"
                rich
                values={{
                  u: (chunks) => <TitleFirstWord>{chunks}</TitleFirstWord>,
                  break: (chunks) => <TitleRest>{chunks}</TitleRest>,
                }}
              />
            </Text>
          </Box>
          <VStack alignItems="flex-start" gap={["8px", "8px", "16px"]}>
            <IconTv />
            <Divider
              orientation="horizontal"
              maxW="144px"
              borderColor="rgba(240, 238, 223, 0.30)"
            />
            <Box opacity="0.8">
              <Text font="p1">
                <FormattedMessage id="features_sofascoreEditor_item3_description" />
              </Text>
            </Box>
          </VStack>
        </Article>
      </Stack>
    </Container>
  )
}
