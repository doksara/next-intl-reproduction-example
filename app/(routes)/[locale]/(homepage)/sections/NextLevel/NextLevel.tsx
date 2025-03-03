import {
  FormattedMessage,
  UnderlinedFormattedMessage,
} from "@/components/FormattedMessage"
import {
  IconGlobal,
  IconMatches,
  IconPlayer,
  IconTeam,
} from "@/components/Icons"
import { Section } from "@/components/Section"
import { Text } from "@/components/Text"
import { Box, Center, Container, Flex, VStack } from "@/styled-system/jsx"
import { Video } from "../Introduction/Introduction.styles"
import { StatisticsItem } from "./StatisticsItem"
import { AnimationPlayer } from "@/components/AnimationPlayer"
import { RegistrationCTA } from "@/components/RegistrationCTA"
import { ExternalLink } from "@/components/Link"
import { EditorToCoreApp } from "./EditorToCoreApp"

export const NextLevel = () => {
  return (
    <Section id="next-level" color="grey" background="stone">
      <Container>
        <Box
          maxW="1128px"
          pb={["80px", "80px", "120px"]}
          pt={["112px", "112px", "160px"]}
        >
          <Text font="h1" as="h2">
            <UnderlinedFormattedMessage
              id="homepage_nextLevel_title"
              underlineColor="blueAccent"
            />
          </Text>
        </Box>

        <Center
          flexDirection={["column", "column", "row"]}
          alignItems={["flex-start", "flex-start", "center"]}
          justifyContent="space-between"
          maxW={1386}
          gap={["96px", "48px"]}
          w="100%"
          m="0 auto"
          pb={["80px", "80px", "120px"]}
        >
          <Box maxW={["100%", "480px", "420px", "520px"]}>
            <Text font="p1" indicatorColor="magenta">
              <FormattedMessage id="homepage_nextLevel_text1" />
            </Text>
          </Box>

          <EditorToCoreApp />
        </Center>
      </Container>

      <Box background="grey">
        <Container color="stone" py={["80px", "120px"]}>
          <Center
            flexDirection={["column", "column", "row"]}
            maxW="1384px"
            h={["auto", "auto", "312px"]}
            justifyContent="space-between"
            gap="48px"
          >
            <VStack
              maxW={["656px", "656px", "600px"]}
              w="100%"
              h="176px"
              alignItems="flex-start"
              gap="36px"
            >
              <Text font="h4" as="p" indicatorColor="magenta">
                <FormattedMessage id="homepage_nextLevel_text2" />
              </Text>
              <Text font="h4" as="p" indicatorColor="transparent">
                <FormattedMessage
                  id="homepage_nextLevel_text3"
                  rich
                  values={{
                    u: (chunks) => (
                      <span
                        style={{
                          position: "relative",
                          left: "-6px",
                          padding: "0px 6px",
                          lineHeight: 1.75,
                          background:
                            "linear-gradient(#212A6D, #212A6D) 0 86% / 100% .4em no-repeat",
                        }}
                      >
                        {chunks}
                      </span>
                    ),
                  }}
                />
              </Text>
            </VStack>

            <VStack maxW="656px" w="100%" gap="0px">
              <StatisticsItem
                icon={<IconMatches />}
                itemName={<FormattedMessage id="homepage_nextLevel_item1" />}
                itemValue="650,000+"
              />
              <StatisticsItem
                icon={<IconTeam />}
                itemName={<FormattedMessage id="homepage_nextLevel_item2" />}
                itemValue="25,000+"
              />
              <StatisticsItem
                icon={<IconGlobal />}
                itemName={<FormattedMessage id="homepage_nextLevel_item3" />}
                itemValue="115+"
              />
              <StatisticsItem
                icon={<IconPlayer />}
                itemName={<FormattedMessage id="homepage_nextLevel_item4" />}
                itemValue="150,000+"
              />
            </VStack>
          </Center>
        </Container>

        <Container noGutters withMedia>
          <Flex
            justifyContent="center"
            position="relative"
            h={["412px", "540px", "540px", "622px"]}
            overflow="hidden"
            borderRadius="4px"
          >
            <Box position="relative" w={["320px", "460px", "500px"]} h="100%">
              <AnimationPlayer
                src="/animations/homepage-every-league-counts-lottie.json"
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 1,
                  width: "100%",
                }}
              />
            </Box>

            <Video autoPlay loop muted controls={false} playsInline>
              <source
                src="/videos/homepage-every-league-counts-video.mp4"
                type="video/mp4"
              />
            </Video>
          </Flex>
        </Container>
      </Box>

      <Box background="blue" py={["52px", "96px"]}>
        <Container>
          <RegistrationCTA>
            <VStack gap="64px" alignItems="flex-start" py="32px">
              <Box maxW="928px" color="grey">
                <Text font="h2">
                  <FormattedMessage id="homepage_nextLevel_register_title" />
                </Text>
              </Box>

              <Box maxW="928px" color="grey">
                <Text font="p1">
                  <FormattedMessage id="homepage_nextLevel_register_description" />
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
