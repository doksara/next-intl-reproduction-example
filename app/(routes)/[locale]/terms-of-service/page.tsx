import { Metadata } from "next"

import { DocumentRenderer } from "@/components/DocumentRenderer"
import { UnderlinedFormattedMessage } from "@/components/FormattedMessage"
import { Section } from "@/components/Section"
import { Container, Box, VStack, Flex } from "@/styled-system/jsx"
import { sections } from "./content"

import { Text } from "@/components/Text"
import { setRequestLocale } from "next-intl/server"

export const metadata: Metadata = {
  title: "Terms of service | Sofascore Editor",
  metadataBase: new URL("https://editor.sofascore.com/terms-of-service"),
  alternates: {
    canonical: ".",
  },
}

export default function TermsOfService({
  params: { locale },
}: {
  params: { locale: string }
}) {
  setRequestLocale(locale)

  return (
    <main>
      <Section id="terms-of-service" background="grey" overflow="initial">
        <Container>
          <Box ml={["0px", "0px", "0px", "136px"]} w="100%">
            <VStack
              justifyContent={["center", "center", "flex-start"]}
              alignItems="flex-start"
              h={["312px", "312px", "auto"]}
              pt={["0px", "0px", "176px"]}
              pb={["0px", "0px", "134px"]}
              maxW="792px"
              w="100%"
            >
              <Text font="h1">
                <UnderlinedFormattedMessage
                  id="termsOfService_title"
                  underlineColor="blueShades"
                />
              </Text>
            </VStack>
          </Box>
        </Container>

        <Container>
          <Flex
            flexWrap="wrap"
            flexDirection={["column", "row", "row"]}
            gap={["54px", "54px", "96px", "136px"]}
            alignItems="flex-start"
          >
            <DocumentRenderer sections={sections} />
          </Flex>
        </Container>
      </Section>
    </main>
  )
}
