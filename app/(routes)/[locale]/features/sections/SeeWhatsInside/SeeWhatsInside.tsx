import { Section } from "@/components/Section"

import { FeatureList } from "./subsections/FeatureList"
import { Box, Container, HStack, VStack } from "@/styled-system/jsx"
import { Text } from "@/components/Text"
import { FormattedMessage } from "@/components/FormattedMessage"
import { Collague } from "./subsections/Collague"
import { ExternalLink } from "@/components/Link"
import { RegistrationCTA } from "@/components/RegistrationCTA"
import { Quotes } from "./subsections/Quotes/Quotes"
import * as S from "./SeeWhatsInside.styles"

export const SeeWhatsInside = () => {
  return (
    <Section id="features-seewhatsinside" background="stone" color="grey">
      <Container>
        <HStack
          maxW={["648px", "648px", "1178px"]}
          w="100%"
          pt={["112px", "112px", "160px"]}
          pb={["80px", "80px", "120px"]}
        >
          <Text
            font="h1"
            as="h2"
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <FormattedMessage id="features_seeWhatsInside_title" />
            <S.ClickableArrow
              href={{ pathname: "/features", hash: "list" }}
              aria-label="Scroll to section below"
            >
              ↓
            </S.ClickableArrow>
          </Text>
        </HStack>
      </Container>

      <FeatureList />

      <Collague />

      <Box background="magenta" py={["52px", "96px"]}>
        <Container>
          <RegistrationCTA>
            <VStack gap="64px" alignItems="flex-start" py="32px">
              <Box maxW="928px" color="grey">
                <Text font="h2">
                  <FormattedMessage id="features_seeWhatsInside_registerText" />
                </Text>
              </Box>

              <ExternalLink href="https://www.sofascore-editor.com">
                <FormattedMessage id="homepage_appFeatures_register_ctaText" />
              </ExternalLink>
            </VStack>
          </RegistrationCTA>
        </Container>
      </Box>

      <Quotes />
    </Section>
  )
}
