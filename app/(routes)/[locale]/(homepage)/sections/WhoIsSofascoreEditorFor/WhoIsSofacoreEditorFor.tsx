import {
  FormattedMessage,
  UnderlinedFormattedMessage,
} from "@/components/FormattedMessage"
import { Section } from "@/components/Section"
import { Text } from "@/components/Text"
import { Box, Container, Stack, VStack } from "@/styled-system/jsx"
import { Partners } from "@/components/Partners"

export const WhoIsSofascoreEditorFor = () => {
  return (
    <Section
      id="homepage-who-is-sofascore-editor-for"
      background="blueLight"
      color="grey"
    >
      <Container py={["96px", "144px"]}>
        <Stack
          direction={["column", "row"]}
          gap={["64px", "144px"]}
          alignItems={["flex-start", "center"]}
          justifyContent="center"
        >
          <Box maxW={[282, 282, 542]} textAlign={["left", "right"]}>
            <Text font="h1" as="h2">
              <UnderlinedFormattedMessage
                id="homepage_whoIsSofascoreEditorFor_title"
                underlineColor="blueAccent"
              />
            </Text>
          </Box>

          <VStack gap={4} pl={["32px", 0]} alignItems="flex-start">
            <Text font="p1" indicatorColor="grey">
              <FormattedMessage id="homepage_whoIsSofascoreEditorFor_group1" />
            </Text>
            <Text font="p1" indicatorColor="grey">
              <FormattedMessage id="homepage_whoIsSofascoreEditorFor_group2" />
            </Text>
            <Text font="p1" indicatorColor="grey">
              <FormattedMessage id="homepage_whoIsSofascoreEditorFor_group3" />
            </Text>
            <Text font="p1" indicatorColor="grey">
              <FormattedMessage id="homepage_whoIsSofascoreEditorFor_group4" />
            </Text>
          </VStack>
        </Stack>
      </Container>

      <Box background="grey">
        <Partners />
      </Box>
    </Section>
  )
}
