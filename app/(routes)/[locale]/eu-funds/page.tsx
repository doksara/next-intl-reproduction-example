import { Box, Container, Divider, VStack } from "@/styled-system/jsx"
import { Text } from "@/components/Text"
import { Metadata } from "next"
import { Section } from "@/components/Section"
import { UnderlinedFormattedMessage } from "@/components/FormattedMessage"
import { EuLabel } from "./EuLabel"

import { Link } from "@/i18n/routing"
import { linkRecipe } from "./styles"
import { setRequestLocale } from "next-intl/server"

export const metadata: Metadata = {
  title: "EU Project | Sofascore Editor",
  metadataBase: new URL("https://editor.sofascore.com/eu-funds"),
  alternates: {
    canonical: ".",
  },
}

export default function EuFunds({
  params: { locale },
}: {
  params: { locale: string }
}) {
  setRequestLocale(locale)

  return (
    <main>
      <Section id="eu" background="grey" overflow="initial">
        <Container>
          <Box ml={["0px", "0px", "0px", "136px"]} w="100%">
            <VStack
              justifyContent={["center", "center", "flex-start"]}
              alignItems="flex-start"
              h={["312px", "312px", "auto"]}
              pt={["0px", "0px", "176px"]}
              pb={["0px", "0px", "134px"]}
              maxW="792px"
              w="100%"
            >
              <Text font="h1">
                <UnderlinedFormattedMessage
                  id="eu_funds_title"
                  underlineColor="blueShades"
                />
              </Text>
            </VStack>
          </Box>
        </Container>

        <Container display="flex" justifyContent="flex-end">
          <VStack
            maxW="928px"
            w="100%"
            mr={["0px", "0px", "0px", "136px"]}
            gap="0px"
            alignItems="flex-start"
          >
            <EuLabel />

            <Box py="64px">
              <Text font="mono">
                The content of this publication is the sole responsibility of
                Sofa IT d.o.o.
              </Text>
            </Box>

            <VStack gap="32px">
              <Text font="p2">
                The project &quot;Innovative application for following
                lower-ranked and amateur sports Sofascore Editor&quot;
                implemented by Sofa IT d.o.o. is co-funded from the European
                Regional Development Fund within the Call for Proposals
                &quot;Innovation of newly established SMEs - Phase II&quot;.
              </Text>

              <Text font="p2">
                Difficult access to the results of lower-ranked sports leagues
                makes it impossible to follow the sports results, which is the
                main problem that this project addresses. The project aims to
                create an adequate system for entering and reviewing sports
                results and statistics of lower leagues called Sofascore Editor.
                The system will contain key functionalities that solve this
                problem, which will increase satisfaction and the number of
                end-users in the global market.
              </Text>

              <Text font="p2">
                Since the market analysis has proven that the greatest interest
                is in football, the main focus of the project will be precisely
                on that popular sport, with many interesting options for
                followers. And a system for entering basketball results will be
                added as well.
              </Text>

              <Text font="p2">
                The adjustment of the software solution will lead to an increase
                in sales revenue by 35%, new job positions (+5), and export
                growth of 30% by 2022. Target groups are amateur athletes,
                clubs, associations and sports enthusiasts, and the general
                community.
              </Text>
            </VStack>

            <Divider
              orientation="horizontal"
              my="48px"
              borderColor="rgba(240, 238, 223, 0.30)"
            />

            <VStack gap="32px" alignItems="flex-start">
              <Text font="h4" fontWeight="bold">
                The project is divided into the following activities:
              </Text>
              <VStack gap="16px" alignItems="flex-start">
                <Text font="p1" fontWeight="bold">
                  Activity 1
                </Text>
                <Text font="p2" style={{ opacity: 0.6 }}>
                  Adaptation of the developed product to market requirements
                </Text>
              </VStack>
              <VStack gap="16px" alignItems="flex-start">
                <Text font="p1" fontWeight="bold">
                  Result of Activity 1
                </Text>
                <Text font="p2" style={{ opacity: 0.6 }}>
                  The Sofascore Editor product is fully completed and ready to
                  enter the market
                </Text>
              </VStack>
              <VStack gap="16px" alignItems="flex-start">
                <Text font="p1" fontWeight="bold">
                  Activity 2
                </Text>
                <Text font="p2" style={{ opacity: 0.6 }}>
                  Product launch preparation
                </Text>
              </VStack>
              <VStack gap="16px" alignItems="flex-start">
                <Text font="p1" fontWeight="bold">
                  Result of Activity 2
                </Text>
                <Text font="p2" style={{ opacity: 0.6 }}>
                  Sofascore Editor ready to launch in targeted European and
                  global markets
                </Text>
              </VStack>
              <VStack gap="16px" alignItems="flex-start">
                <Text font="p1" fontWeight="bold">
                  Activity PM
                </Text>
                <Text font="p2" style={{ opacity: 0.6 }}>
                  Project managment
                </Text>
              </VStack>
              <VStack gap="16px" alignItems="flex-start">
                <Text font="p1" fontWeight="bold">
                  Result of Activity PM
                </Text>
                <Text font="p2" style={{ opacity: 0.6 }}>
                  Successfully implemented 1 project in accordance with the
                  Implementing Regulation of EU projects, auditor&apos;s report
                  prepared
                </Text>
              </VStack>
              <VStack gap="16px" alignItems="flex-start">
                <Text font="p1" fontWeight="bold">
                  Activity V
                </Text>
                <Text font="p2" style={{ opacity: 0.6 }}>
                  The Sofascore Editor product is fully completed and ready to
                  enter the market
                </Text>
              </VStack>
              <VStack gap="16px" alignItems="flex-start">
                <Text font="p1" fontWeight="bold">
                  Result of Activity V
                </Text>
                <Text font="p2" style={{ opacity: 0.6 }}>
                  Interested public informed of the project
                </Text>
              </VStack>

              <Text font="p2" style={{ opacity: 0.6 }}>
                The total value of the project is HRK 1.740.950,98., of which
                HRK 1.391.218,16 was co-funded by the EU.
              </Text>
            </VStack>

            <Divider
              orientation="horizontal"
              my="48px"
              borderColor="rgba(240, 238, 223, 0.30)"
            />

            <VStack gap="32px" alignItems="flex-start" w="100%">
              <Link href="/eu-funds/project-start">
                <Text font="p2" fontWeight="bold">
                  Project start article
                </Text>
                <Text
                  font="p2"
                  fontWeight="bold"
                  style={{ textDecoration: "none" }}
                >
                  →
                </Text>
              </Link>

              <Link href="/eu-funds/project-end">
                <Text font="p2" fontWeight="bold">
                  Article about successfully completed project
                </Text>
                <Text
                  font="p2"
                  fontWeight="bold"
                  style={{ textDecoration: "none" }}
                >
                  →
                </Text>
              </Link>
            </VStack>

            <Divider
              orientation="horizontal"
              my="48px"
              borderColor="rgba(240, 238, 223, 0.30)"
            />

            <VStack gap="32px" alignItems="flex-start">
              <Text font="h4" fontWeight="bold">
                More information:
              </Text>
              <a
                href="tel:+385915265132"
                rel="noopener noreferrer"
                target="_blank"
                className={linkRecipe}
              >
                +385 91 5265 132
              </a>
              <a href="mailto:info@sofait.hr" className={linkRecipe}>
                info@sofait.hr
              </a>
              <a
                href="https://sofait.hr/"
                rel="noopener noreferrer"
                target="_blank"
                className={linkRecipe}
              >
                sofait.hr
              </a>
              <a
                href="https://strukturnifondovi.hr/"
                rel="noopener noreferrer"
                target="_blank"
                className={linkRecipe}
              >
                strukturnifondovi.hr
              </a>
              <a
                href="https://strukturnifondovi.hr/nabave-lista/strate-ki-projekt-za-podr-ku-inicijativa-klastera-konkurentnosti-sporazuma-o-partnerstvu-izme-u-korisnika-i-partnera-te-operativnog-programa-konkurentnost-i-kohezija-2014-2020/"
                rel="noopener noreferrer"
                target="_blank"
                className={linkRecipe}
              >
                Strateški projekt za podršku inicijativa klastera
                konkurentnosti, Sporazuma o partnerstvu između Korisnika i
                Partnera te Operativnog programa Konkurentnost i kohezija 2014.
                - 2020.
              </a>
            </VStack>

            <Divider
              orientation="horizontal"
              my="48px"
              borderColor="rgba(240, 238, 223, 0.30)"
            />
          </VStack>
        </Container>
      </Section>
    </main>
  )
}
