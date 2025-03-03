import { Text } from "@/components/Text"
import { FormattedMessage } from "@/components/FormattedMessage"
import {
  Stack,
  Grid,
  GridItem,
  Box,
  Container,
  VStack,
} from "@/styled-system/jsx"
import { contributors } from "./content"
import { RegistrationCTA } from "@/components/RegistrationCTA"
import { ExternalLink } from "@/components/Link"
import { Contributor } from "./Contributor"

export const BehindTheScenes = () => {
  return (
    <>
      <Box background="stone">
        <Container noGutters>
          <Stack
            flexDirection={["column", "column", "column", "row"]}
            alignItems={["flex-start", "flex-start", "flex-start", "center"]}
            justifyContent="space-between"
            gap="48px"
          >
            <Box
              pt={["112px", "112px", "112px", "0px"]}
              pb={["80px", "80px", "112px", "0px"]}
              pl={"60px"}
              maxW="520px"
            >
              <Text font="h2" indicatorColor="grey">
                <FormattedMessage id="about_meetOurSquad_behindTheScenes" />
              </Text>
            </Box>

            <Grid
              backgroundColor="#374DF5"
              gridTemplateColumns={[
                "repeat(4, 1fr)",
                "repeat(6, 1fr)",
                "repeat(7, 1fr)",
                "repeat(6, 1fr)",
              ]}
              gridTemplateRows={[
                undefined,
                "repeat(6, 1fr)",
                "repeat(6, 1fr)",
                "repeat(7, 1fr)",
              ]}
              gap="0px"
              w={["100%", "100%", "100%", "840px"]}
              flexShrink={0}
              m="0 auto"
            >
              {contributors.map((c, index) => (
                <GridItem key={index} w="100%">
                  <Contributor {...c} />
                </GridItem>
              ))}
              <GridItem></GridItem>
            </Grid>
          </Stack>
        </Container>
      </Box>

      <Box background="magenta" py={["52px", "96px"]}>
        <Container>
          <RegistrationCTA>
            <VStack gap="64px" alignItems="flex-start" py="32px">
              <Box maxW="928px" color="grey">
                <Text font="h2">
                  <FormattedMessage id="about_meetOurSquad_register_title" />
                </Text>
              </Box>

              <ExternalLink href="https://www.sofascore-editor.com">
                <FormattedMessage id="homepage_appFeatures_register_ctaText" />
              </ExternalLink>
            </VStack>
          </RegistrationCTA>
        </Container>
      </Box>
    </>
  )
}
