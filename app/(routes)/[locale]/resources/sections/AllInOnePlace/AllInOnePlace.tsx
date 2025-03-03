import { Section } from "@/components/Section"
import {
  FormattedMessage,
  UnderlinedFormattedMessage,
} from "@/components/FormattedMessage"

import { HeroWithDescription } from "@/components/HeroWithDescription"
import { Box, Container, VStack } from "@/styled-system/jsx"
import { Text } from "@/components/Text"

export const AllInOnePlace = () => {
  return (
    <Section id="resources-allinoneplace" background="grey">
      <Container>
        <Box ml={["0px", "0px", "0px", "136px"]} w="100%">
          <VStack
            justifyContent={["center", "center", "flex-start"]}
            h={["384px", "384px", "auto"]}
            pt={["0px", "0px", "176px"]}
            pb={["0px", "0px", "134px"]}
            maxW="782px"
            w="100%"
          >
            <Text font="h1">
              <UnderlinedFormattedMessage
                id="resources_allInOnePlace_title"
                underlineColor="blueShades"
              />
            </Text>
          </VStack>
        </Box>
      </Container>

      <HeroWithDescription
        imageAlt="Person editing goal detail on live Football match using Sofascore Editor Android application"
        imageSrc="/images/resources-allinoneplace-hero.webp"
        description={<FormattedMessage id="resources_allInOnePlace_heroText" />}
      />
    </Section>
  )
}
