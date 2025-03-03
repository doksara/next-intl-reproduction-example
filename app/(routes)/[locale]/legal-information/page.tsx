import { Metadata } from "next"

import {
  FormattedMessage,
  UnderlinedFormattedMessage,
} from "@/components/FormattedMessage"
import { Section } from "@/components/Section"
import { Container, Box, VStack, Divider, Stack } from "@/styled-system/jsx"

import { Text } from "@/components/Text"
import { setRequestLocale } from "next-intl/server"

export const metadata: Metadata = {
  title: "Legal information | Sofascore Editor",
  metadataBase: new URL("https://editor.sofascore.com/legal-information"),
  alternates: {
    canonical: ".",
  },
}

export default function LegalInformation({
  params: { locale },
}: {
  params: { locale: string }
}) {
  setRequestLocale(locale)

  return (
    <main>
      <Section
        id="legal-information"
        background="grey"
        overflow="initial"
        borderBottom="1px solid token(colors.stone)"
      >
        <Container>
          <Box
            ml={["0px", "0px", "0px", "136px"]}
            pt={["102px", "134px", "176px"]}
            pb={["134px", "134px", "134px"]}
            maxW="844px"
            w="100%"
          >
            <Text font="h1">
              <UnderlinedFormattedMessage
                id="legalInformation_title"
                underlineColor="blueShades"
              />
            </Text>
          </Box>

          <Stack
            gap="24px"
            alignItems="flex-start"
            flexDirection={["column", "column", "row"]}
            pb={["112px", "112px", "160px"]}
          >
            <VStack
              gap="24px"
              alignItems="flex-start"
              maxW={["520px"]}
              w="100%"
            >
              <Text font="h2">
                <FormattedMessage id="legalInformation_main_title" />
              </Text>
              <Text font="p1">
                <FormattedMessage id="legalInformation_main_subtitle" />
              </Text>
            </VStack>

            <VStack gap="32px" alignItems="flex-start" flexGrow={1} w="100%">
              <Divider
                orientation="horizontal"
                borderColor="rgba(240, 238, 223, 0.30)"
              />

              <Text font="p1">
                <FormattedMessage id="legalInformation_main_mbs" />
              </Text>
              <Text font="p1">
                <FormattedMessage id="legalInformation_main_oib" />
              </Text>
              <Text font="p1">
                <FormattedMessage id="legalInformation_main_vatId" />
              </Text>

              <Divider
                orientation="horizontal"
                borderColor="rgba(240, 238, 223, 0.30)"
              />

              <Text font="p1">
                <FormattedMessage id="legalInformation_main_location" />
              </Text>
              <Text font="p1">
                <FormattedMessage id="legalInformation_main_swift" />
              </Text>
              <Text font="p1">
                <FormattedMessage id="legalInformation_main_iban" />
              </Text>

              <Divider
                orientation="horizontal"
                borderColor="rgba(240, 238, 223, 0.30)"
              />

              <Text font="p1">
                <FormattedMessage id="legalInformation_main_shareCapital" />
              </Text>

              <Divider
                orientation="horizontal"
                borderColor="rgba(240, 238, 223, 0.30)"
              />

              <Text font="p1">
                <FormattedMessage id="legalInformation_main_boardOfDirectors" />
              </Text>

              <Divider
                orientation="horizontal"
                borderColor="rgba(240, 238, 223, 0.30)"
              />
            </VStack>
          </Stack>
        </Container>
      </Section>
    </main>
  )
}
