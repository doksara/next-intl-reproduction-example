import {
  Box,
  Center,
  Container,
  Divider,
  Grid,
  GridItem,
  HStack,
  VStack,
} from "@/styled-system/jsx"
import { Section } from "@/components/Section"
import { Text } from "@/components/Text"
import { Partners } from "@/components/Partners"
import { HeadingWithDescription } from "@/components/HeadingWithDescription"
import { HeroWithDescription } from "@/components/HeroWithDescription"
import {
  FormattedMessage,
  UnderlinedFormattedMessage,
} from "@/components/FormattedMessage"
import { Collague } from "./Collague"
import { KutijaSibica } from "./KutijaSibica"
import { appStatistics } from "./content"

export const PowerOfData = () => {
  return (
    <Section id="about-power-of-data" background="grey">
      <HeadingWithDescription
        heading={
          <UnderlinedFormattedMessage
            id="about_powerOfData_title"
            underlineColor="blueShades"
          />
        }
        description={<FormattedMessage id="about_powerOfData_text" />}
      />

      <HeroWithDescription
        imageSrc="/images/about-powerofdata-hero.webp"
        imageAlt="Person checking Approved teams on Sofascore Editor Android application"
        description={<FormattedMessage id="about_powerOfData_imageText" />}
      />

      <Box
        pt={["112px", "112px", "144px", "160px"]}
        pb={["96px", "96px", "144px", "160px"]}
      >
        <Collague />
      </Box>

      <Container>
        <Center pb={["96px", "144px"]}>
          <Grid columns={[2, 2, 2, 4]} gap={["48px", "48px", "64px"]}>
            {appStatistics.map(({ translationKey, stat, Icon }) => (
              <GridItem key={translationKey}>
                <VStack alignItems="flex-start">
                  <HStack gap="16px" mb={["16px", "16px", "32px"]}>
                    <Box
                      width={["64px", "64px", "80px"]}
                      height={["64px", "64px", "80px"]}
                    >
                      <Icon fill="#7181F7" width="100%" height="100%" />
                    </Box>
                    <Text font="mono">
                      <FormattedMessage id={translationKey} />
                    </Text>
                  </HStack>
                  <Divider
                    orientation="horizontal"
                    borderColor="rgba(240, 238, 223, 0.30)"
                  />
                  <Text font="h3" as="p" fontWeight="bold">
                    {stat}
                  </Text>
                </VStack>
              </GridItem>
            ))}
          </Grid>
        </Center>
      </Container>

      <Container noGutters withMedia>
        <KutijaSibica />
      </Container>

      <Partners />
    </Section>
  )
}
