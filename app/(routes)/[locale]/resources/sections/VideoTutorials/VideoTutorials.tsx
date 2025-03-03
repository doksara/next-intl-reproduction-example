import {
  FormattedMessage,
  UnderlinedFormattedMessage,
} from "@/components/FormattedMessage"
import { Section } from "@/components/Section"
import { Box, Container, Grid, GridItem, VStack } from "@/styled-system/jsx"
import { Text } from "@/components/Text"
import { VideoTutorialCard } from "./VideoTutorialCard"
import { tutorials } from "./content"
import { RegistrationCTA } from "@/components/RegistrationCTA"
import { ExternalLink } from "@/components/Link"

export const VideoTutorials = ({ locale }: { locale: string }) => {
  return (
    <Section id="tutorials" background="grey" color="stone">
      <Container>
        <Box pt={["112px", "112px", "160px"]} pb={["96px", "96px", "120px"]}>
          <Text font="h1" as="h2">
            <UnderlinedFormattedMessage
              id="resources_videoTutorials_title"
              underlineColor="blue"
            />
          </Text>
        </Box>

        <Grid
          columns={[1, 2, 3]}
          columnGap="24px"
          rowGap={["40px", "36px", "30px"]}
          pb="160px"
        >
          <GridItem display={["none", "none", "block"]}></GridItem>

          {tutorials.map((t, index) => (
            <GridItem key={index}>
              <VideoTutorialCard
                order={`0${index + 1}`}
                title={<FormattedMessage id={t.title} />}
                url={t.url[locale] || t.url.en}
              />
            </GridItem>
          ))}
        </Grid>
      </Container>

      <Box background="magenta" py={["52px", "96px"]}>
        <Container>
          <RegistrationCTA>
            <VStack gap="64px" alignItems="flex-start" py="32px">
              <Box maxW="928px" color="grey">
                <Text font="h2">
                  <FormattedMessage
                    id="resources_videoTutorials_registerText"
                    rich
                    values={{ br: () => <br /> }}
                  />
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
