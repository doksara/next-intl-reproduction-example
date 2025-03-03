import { Section } from "@/components/Section"
import { Text } from "@/components/Text"
import { Box, Container, HStack, VStack } from "@/styled-system/jsx"
import {
  FormattedMessage,
  UnderlinedFormattedMessage,
} from "@/components/FormattedMessage"
import { IntroductionVideo } from "./IntroductionVideo"
import { BetterMaybeMarquee, SportMarquee } from "@/components/Marquee"
import { ExternalLinkWrapper, ExternalLinkText } from "@/components/Link"
import { IconExternal } from "@/components/Icons"
import { token } from "@/styled-system/tokens"

export const Introduction = () => {
  return (
    <Section id="homepage-introduction" background="grey">
      <Container>
        <HStack
          pt={["0px", "0px", "78px"]}
          w="100%"
          maxW={["100%", "1200px"]}
          justifyContent="flex-end"
        >
          <VStack
            py={["54px", "54px", "120px"]}
            maxW="1064px"
            w="100%"
            alignItems="flex-start"
            gap="54px"
          >
            <Text font="h1">
              <UnderlinedFormattedMessage
                id="homepage_introduction_title"
                underlineColor="blueShades"
              />
            </Text>

            <Box display={["block", "none"]} w="100%">
              <ExternalLinkWrapper
                href="https://www.sofascore-editor.com"
                rel="noopener norefferer"
                target="_blank"
                w={["100%", "auto"]}
                background="magenta"
                color="grey"
              >
                <ExternalLinkText>
                  <FormattedMessage id="homepage_appFeatures_register_ctaText" />
                </ExternalLinkText>
                <IconExternal fill={token.var("colors.grey")} />
              </ExternalLinkWrapper>
            </Box>
          </VStack>
        </HStack>
      </Container>

      <Box backgroundColor="grey" color="blue">
        <SportMarquee />
      </Box>

      <Container noGutters withMedia>
        <Box
          position="relative"
          h={["764px", "592px", "592px", "692px", "768px"]}
        >
          <IntroductionVideo />

          <Container h="100%">
            <HStack
              alignItems={["flex-end", "center"]}
              h="100%"
              maxW={["100%", "50%", "50%", "50%", "50%"]}
              w="100%"
              justifyContent={["center", "flex-end"]}
            >
              <VStack
                gap="48px"
                maxW={["100%", "592px"]}
                alignItems="flex-start"
                justifyContent="center"
                py={["24px", "0px"]}
              >
                <Text font="h4" as="p" indicatorColor="magenta">
                  <FormattedMessage id="homepage_introduction_description" />
                </Text>

                <BetterMaybeMarquee
                  marqueeAboveBreakpoint={768}
                  ml={["0px", "36px"]}
                >
                  <Text font="mono">
                    /// <FormattedMessage id="homepage_introduction_feature1" />
                  </Text>
                  <Text font="mono">
                    /// <FormattedMessage id="homepage_introduction_feature2" />
                  </Text>
                  <Text font="mono">
                    /// <FormattedMessage id="homepage_introduction_feature3" />
                  </Text>
                </BetterMaybeMarquee>
              </VStack>
            </HStack>
          </Container>
        </Box>
      </Container>
    </Section>
  )
}
