import { Section } from "@/components/Section"
import { TestimonialSlideshow } from "./TestimonialSlideshow"
import { Box, Container, VStack } from "@/styled-system/jsx"
import { Text } from "@/components/Text"
import {
  FormattedMessage,
  UnderlinedFormattedMessage,
} from "@/components/FormattedMessage"
import { RegistrationCTA } from "@/components/RegistrationCTA"
import { ExternalLink } from "@/components/Link"

export const Testimonials = () => {
  return (
    <Section id="homepage-testimonials" color="stone" background="grey">
      <Container>
        <Box
          py={["112px", "160px"]}
          maxW={["560px", "560px", "1064px"]}
          w="100%"
        >
          <Text font="h1" as="h2">
            <UnderlinedFormattedMessage
              id="homepage_testimonials_title"
              underlineColor="blueShades"
            />
          </Text>
        </Box>
      </Container>

      <Container noGutters>
        <TestimonialSlideshow />
      </Container>

      <Box background="magenta" py={["52px", "96px"]}>
        <Container>
          <RegistrationCTA>
            <VStack gap="64px" alignItems="flex-start" py="32px">
              <Box maxW="928px" color="grey">
                <Text font="h2">
                  <FormattedMessage id="homepage_testimonials_register_title" />
                </Text>
              </Box>

              <ExternalLink href="https://www.sofascore-editor.com">
                <FormattedMessage id="homepage_appFeatures_register_ctaText" />
              </ExternalLink>

              <Box maxW="928px" color="grey">
                <Text font="p1">
                  <FormattedMessage
                    id="homepage_testimonials_register_description"
                    rich
                    values={{ br: () => <br /> }}
                  />
                </Text>
              </Box>
            </VStack>
          </RegistrationCTA>
        </Container>
      </Box>
    </Section>
  )
}
