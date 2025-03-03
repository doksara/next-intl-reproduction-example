import Image from "next/image"
import { Section } from "@/components/Section"
import { Text } from "@/components/Text"
import { Box, Container, Flex, HStack, VStack } from "@/styled-system/jsx"
import { AppFeatureCard } from "./AppFeatureCard"
import { FormattedMessage } from "@/components/FormattedMessage"
import { RegistrationCTA } from "@/components/RegistrationCTA"
import { BetterMaybeMarquee, MaybeMarquee } from "@/components/Marquee"
import {
  UnderlinedFormattedMessage,
  HighlightedFormattedMessage,
} from "@/components/FormattedMessage"
import { ExternalLink } from "@/components/Link"
import { appStatistics, languages } from "./data"
import { useTranslations } from "next-intl"

export const AppFeatures = () => {
  const t = useTranslations()

  return (
    <Section id="app-features" background="stone" color="grey">
      <Container>
        <Box maxW="1128px" pt={["96px", "160px"]} pb={["80px", "160px"]}>
          <Text font="h1" as="h2">
            <UnderlinedFormattedMessage
              id="homepage_appFeatures_title"
              underlineColor="blueLightest"
            />
          </Text>
        </Box>

        <Flex
          display={["flex", "none", "none"]}
          maxW="388px"
          h="100%"
          direction="column"
          justify="center"
          gap="56px"
          pb={["80px", "80px", "0px"]}
        >
          <Text font="h4" as="p" fontWeight="bold">
            <HighlightedFormattedMessage id="homepage_appFeatures_subtitle" />
          </Text>
        </Flex>

        <Box
          display={["flex", "grid"]}
          gridTemplateColumns={[undefined, "1fr", "1fr 1fr", "1fr 1fr 1fr"]}
          gridTemplateRows={[undefined, "auto", "auto", "auto"]}
          gap="26px"
          pb={["96px", "160px"]}
          overflow={["scroll", "auto"]}
          scrollbar="hidden"
        >
          <Flex
            display={["none", "flex", "flex"]}
            maxW="388px"
            h="100%"
            direction="column"
            justify="center"
            gap="56px"
            pb={["80px", "80px", "0px"]}
          >
            <Text font="h4" as="p" fontWeight="bold">
              <HighlightedFormattedMessage id="homepage_appFeatures_subtitle" />
            </Text>

            <Text font="mono" indicatorColor="blue">
              <FormattedMessage id="homepage_appFeatures_text" />
            </Text>
          </Flex>

          <AppFeatureCard
            title={
              <FormattedMessage id="homepage_appFeatures_feature1_title" />
            }
            description={
              <FormattedMessage id="homepage_appFeatures_feature1_description" />
            }
            imageSrc="/images/homepage-app-features-competition.webp"
            imageAlt="Competitions"
          />

          <AppFeatureCard
            title={
              <FormattedMessage id="homepage_appFeatures_feature2_title" />
            }
            description={
              <FormattedMessage id="homepage_appFeatures_feature2_description" />
            }
            imageSrc="/images/homepage-app-features-lineups.webp"
            imageAlt="Lineups"
          />

          <AppFeatureCard
            title={
              <FormattedMessage id="homepage_appFeatures_feature3_title" />
            }
            description={
              <FormattedMessage id="homepage_appFeatures_feature3_description" />
            }
            imageSrc="/images/homepage-app-features-standings.webp"
            imageAlt="Standings"
          />

          <AppFeatureCard
            title={
              <FormattedMessage id="homepage_appFeatures_feature4_title" />
            }
            description={
              <FormattedMessage id="homepage_appFeatures_feature4_description" />
            }
            imageSrc="/images/homepage-app-features-profile.webp"
            imageAlt="Profiles"
          />

          <AppFeatureCard
            title={
              <FormattedMessage id="homepage_appFeatures_feature5_title" />
            }
            description={
              <FormattedMessage id="homepage_appFeatures_feature5_description" />
            }
            imageSrc="/images/homepage-app-features-scores.webp"
            imageAlt="Scores"
          />
        </Box>
      </Container>

      <Box background="grey">
        <Container>
          <HStack gap="60px">
            <Text
              font="mono"
              color="stone"
              style={{ whiteSpace: "nowrap", opacity: 0.7 }}
            >
              <FormattedMessage id="homepage_appFeatures_appAvailable" />
            </Text>
            <MaybeMarquee py="8px" marqueeAboveBreakpoint={1240}>
              {languages.map(({ translationKey, iconPath }) => (
                <HStack key={translationKey} gap={2} color="stone" py={4}>
                  <Image
                    src={iconPath}
                    alt={t(translationKey)}
                    width={24}
                    height={24}
                  />
                  <Text
                    font="mono"
                    style={{ whiteSpace: "nowrap", lineHeight: 1 }}
                  >
                    <FormattedMessage id={translationKey} />
                  </Text>
                </HStack>
              ))}
            </MaybeMarquee>
          </HStack>
        </Container>
      </Box>

      <Box background="magenta" py={["52px", "96px"]}>
        <Container>
          <RegistrationCTA>
            <VStack gap="64px" alignItems="flex-start" py="32px">
              <Box maxW="928px" color="grey">
                <Text font="h2">
                  <FormattedMessage id="homepage_appFeatures_register_title" />
                </Text>
              </Box>

              <ExternalLink href="https://www.sofascore-editor.com">
                <FormattedMessage id="homepage_appFeatures_register_ctaText" />
              </ExternalLink>
            </VStack>
          </RegistrationCTA>
        </Container>
      </Box>

      <Box background="grey">
        <Container noGutters>
          <MaybeMarquee
            px={[128, 128, 128, 256]}
            py="8px"
            marqueeAboveBreakpoint={1240}
          >
            {appStatistics.map(({ translationKey, Icon }) => (
              <HStack key={translationKey} gap={2} color="stone" py={4}>
                <Icon />
                <Text font="mono" style={{ whiteSpace: "nowrap" }}>
                  <FormattedMessage id={translationKey} />
                </Text>
              </HStack>
            ))}
          </MaybeMarquee>
        </Container>
      </Box>

      <Container noGutters withMedia>
        <Box
          w="100%"
          h={["320px", "440px", "540px", "720px", "866px"]}
          position="relative"
          overflow="hidden"
        >
          <Image
            fill
            src="/images/homepage-app-features-live-game.webp"
            alt="Fan watching football game"
            style={{ objectFit: "cover" }}
          />
        </Box>
      </Container>

      <Box background="grey">
        <Container color="stone">
          <BetterMaybeMarquee
            px={[128, 128, 128, 196]}
            py="24px"
            marqueeAboveBreakpoint={992}
          >
            <Text font="mono">
              /// <FormattedMessage id="homepage_appFeatures_marquee_item1" />
            </Text>
            <Text font="mono">
              /// <FormattedMessage id="homepage_appFeatures_marquee_item2" />
            </Text>
            <Text font="mono">
              /// <FormattedMessage id="homepage_appFeatures_marquee_item3" />
            </Text>
          </BetterMaybeMarquee>
        </Container>
      </Box>
    </Section>
  )
}
