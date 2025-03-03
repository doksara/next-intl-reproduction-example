import { Section } from "@/components/Section"
import {
  FormattedMessage,
  UnderlinedFormattedMessage,
} from "@/components/FormattedMessage"
import { Box, Container, VStack } from "@/styled-system/jsx"
import { Text } from "@/components/Text"
import { ExternalLink } from "@/components/Link"
import { RegistrationCTA } from "@/components/RegistrationCTA"
import { ContactCards } from "./ContactCards"

export const Main = () => {
  return (
    <Section id="contact-introduction" background="grey">
      <Container>
        <Box ml={["0px", "0px", "0px", "136px"]} w="100%">
          <VStack
            justifyContent={["center", "center", "flex-start"]}
            h={["384px", "384px", "auto"]}
            pt={["0px", "0px", "176px"]}
            pb={["0px", "0px", "134px"]}
            maxW="1224px"
            w="100%"
          >
            <Text font="h1">
              <UnderlinedFormattedMessage
                id="contact_main_title"
                underlineColor="blueShades"
              />
            </Text>
          </VStack>

          <ContactCards />
        </Box>
      </Container>

      <Box background="blueLight" py={["52px", "96px"]}>
        <Container>
          <RegistrationCTA>
            <VStack gap="64px" alignItems="flex-start" py="32px">
              <Box maxW="928px" color="grey">
                <Text font="h2">
                  <FormattedMessage id="contact_main_registerText" />
                </Text>
              </Box>

              <ExternalLink href="https://www.sofascore-editor.com">
                <FormattedMessage id="homepage_appFeatures_register_ctaText" />
              </ExternalLink>
            </VStack>
          </RegistrationCTA>
        </Container>
      </Box>
    </Section>
  )
}
