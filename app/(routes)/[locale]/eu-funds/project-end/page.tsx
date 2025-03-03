import { Box, Container, Divider, VStack } from "@/styled-system/jsx"
import { Text } from "@/components/Text"
import { Metadata } from "next"
import { Section } from "@/components/Section"
import { EuLabel } from "../EuLabel"

import { linkRecipe } from "../styles"
import { UnderlinedText } from "@/components/FormattedMessage"
import { setRequestLocale } from "next-intl/server"

export const metadata: Metadata = {
  title: "EU Project End | Sofascore Editor",
  metadataBase: new URL("https://editor.sofascore.com/eu-funds/project-end"),
  alternates: {
    canonical: ".",
  },
}

export default function EuFundsProjectEnd({
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
                <UnderlinedText underlineColor="blueShades">
                  Uspješno
                </UnderlinedText>{" "}
                proveden EU projekt
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
                Sadržaj ovog materijala isključiva je odgovornost tvrtke Sofa IT
                d.o.o. za informatiku
              </Text>
            </Box>

            <VStack gap="32px">
              <Text font="h4">
                Uspješno proveden EU projekt „Inovativna aplikacija za praćenje
                niže rangiranog i amaterskog sporta Sofascore Editor“
                KK.03.2.2.04.0076
              </Text>

              <Text font="p2">
                Tvrtka Sofa IT d.o.o. za informatiku nakon 18 mjeseci uspješno
                je provela projekt „Inovativna aplikacija za praćenje niže
                rangiranog i amaterskog sporta Sofascore Editor“ koji je s
                provedbom započeo u lipnju 2019. godine. Zahvaljujući
                bespovratnim sredstvima kojima je projekt sufinanciran u okviru
                Operativnog programa konkurentnost i kohezija 2014. – 2020., u
                sklopu Poziva „Inovacije novoosnovanih MSP-ova – II faza“,
                tvrtka je razvila aplikaciju &quot;Sofascore Editor&quot;, kao
                softversko rješenje koje prati amaterska i niže rangirana
                sportska natjecanja u domeni nogometa i košarke. Web aplikacija
                predstavlja inovaciju koja će rezultirati proizvodom koji
                predstavlja znatno poboljšanje u odnosu na postojeća rješenja na
                tržištu, jer druga web rješenja su fokusirana samo na velike
                profesionalne sportske turnire i popularne lige.
              </Text>
            </VStack>

            <Divider
              orientation="horizontal"
              my="48px"
              borderColor="rgba(240, 238, 223, 0.30)"
            />

            <VStack gap="32px" alignItems="flex-start">
              <Text font="h4" fontWeight="bold">
                Projekt je podijeljen u sljedeće aktivnosti:
              </Text>
              <VStack gap="16px" alignItems="flex-start">
                <Text font="p1" fontWeight="bold">
                  Aktivnost 1
                </Text>
                <Text font="p2" style={{ opacity: 0.6 }}>
                  Prilagodba razvijenog proizvoda zahtjevima tržišta
                </Text>
              </VStack>
              <VStack gap="16px" alignItems="flex-start">
                <Text font="p1" fontWeight="bold">
                  Rezultat aktivnosti 1
                </Text>
                <Text font="p2" style={{ opacity: 0.6 }}>
                  Proizvod Sofascore Editor u potpunosti dovršen i spreman za
                  izlazak na tržište
                </Text>
              </VStack>
              <VStack gap="16px" alignItems="flex-start">
                <Text font="p1" fontWeight="bold">
                  Aktivnost 2
                </Text>
                <Text font="p2" style={{ opacity: 0.6 }}>
                  Priprema lansiranja proizvoda
                </Text>
              </VStack>
              <VStack gap="16px" alignItems="flex-start">
                <Text font="p1" fontWeight="bold">
                  Rezultat aktivnosti 2
                </Text>
                <Text font="p2" style={{ opacity: 0.6 }}>
                  Proizvod Sofascore Editor spreman za lansiranje na ciljanim
                  europskim i globalnim tržištima
                </Text>
              </VStack>
              <VStack gap="16px" alignItems="flex-start">
                <Text font="p1" fontWeight="bold">
                  Aktivnost 3
                </Text>
                <Text font="p2" style={{ opacity: 0.6 }}>
                  Upravljanje projektom
                </Text>
              </VStack>
              <VStack gap="16px" alignItems="flex-start">
                <Text font="p1" fontWeight="bold">
                  Rezultat aktivnosti 3
                </Text>
                <Text font="p2" style={{ opacity: 0.6 }}>
                  Uspješno proveden 1 projekt sukladno pravilima provedbe EU
                  projekata, izrađeno revizorsko izvješće
                </Text>
              </VStack>
              <VStack gap="16px" alignItems="flex-start">
                <Text font="p1" fontWeight="bold">
                  Aktivnost 4
                </Text>
                <Text font="p2" style={{ opacity: 0.6 }}>
                  Promidžba i vidljivost
                </Text>
              </VStack>
              <VStack gap="16px" alignItems="flex-start">
                <Text font="p1" fontWeight="bold">
                  Rezultat aktivnosti 4
                </Text>
                <Text font="p2" style={{ opacity: 0.6 }}>
                  Zainteresirana javnost informirana o projektu
                </Text>
              </VStack>

              <Text font="p2" style={{ opacity: 0.6 }}>
                Razdoblje provedbe: 17.06.2019. - 17.12.2020.
              </Text>
            </VStack>

            <Divider
              orientation="horizontal"
              my="48px"
              borderColor="rgba(240, 238, 223, 0.30)"
            />

            <VStack gap="32px" alignItems="flex-start">
              <Text font="h4" fontWeight="bold">
                Rezultati provedbe projekta su sljedeći:
              </Text>
              <VStack gap="16px" alignItems="flex-start">
                <Text font="p1" fontWeight="bold">
                  R1
                </Text>
                <Text font="p2" style={{ opacity: 0.6 }}>
                  Prilagođen proizvod Sofascore Editor spreman za
                  komercijalizaciju
                </Text>
              </VStack>
              <VStack gap="16px" alignItems="flex-start">
                <Text font="p1" fontWeight="bold">
                  R2
                </Text>
                <Text font="p2" style={{ opacity: 0.6 }}>
                  Pripremljeno lansiranje proizvoda Sofascore Editor na inozemno
                  tržište kroz marketinške planove i google adwords i facebook
                  kampanje
                </Text>
              </VStack>
              <VStack gap="16px" alignItems="flex-start">
                <Text font="p1" fontWeight="bold">
                  R3
                </Text>
                <Text font="p2" style={{ opacity: 0.6 }}>
                  Pokrenuti koraci za zaštitu intelektulanog vlasništva na
                  europskom i svjetskom tržištu
                </Text>
              </VStack>
              <VStack gap="16px" alignItems="flex-start">
                <Text font="p1" fontWeight="bold">
                  R4
                </Text>
                <Text font="p2" style={{ opacity: 0.6 }}>
                  Zainteresirana javnost je informirana o početku i završetku
                  provedbe projekta te je iskazana vidljivost kroz objavu
                  članaka na web stranici tvrtke
                </Text>
              </VStack>
              <VStack gap="16px" alignItems="flex-start">
                <Text font="p1" fontWeight="bold">
                  R5
                </Text>
                <Text font="p2" style={{ opacity: 0.6 }}>
                  Izvršene su usluge upravljanja projektom, izrade natječajne
                  dokumentacije (javna nabava) i usluge provedbe javne nabave
                </Text>
              </VStack>

              <Text font="p2" style={{ opacity: 0.6 }}>
                Razdoblje provedbe: 17.06.2019. - 17.12.2020.
              </Text>

              <Text font="p2" style={{ opacity: 0.6 }}>
                Ukupna vrijednost projekta je 1.740.950,98 HRK od čega EU
                sufinanciranje iznosi 1.391.218,16 HRK.
              </Text>
            </VStack>

            <VStack gap="32px" alignItems="flex-start">
              <Text font="h4" fontWeight="bold">
                Više informacija:
              </Text>
              <VStack alignItems="flex-start">
                <Text font="p2" style={{ opacity: 0.6 }}>
                  Ivan Bešlić
                </Text>
                <a
                  href="tel:+385915265132"
                  rel="noopener noreferrer"
                  target="_blank"
                  className={linkRecipe}
                >
                  +385 91 5265 132
                </a>
              </VStack>
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
                href="https://strukturnifondovi.hr/op-konkurentnost-i-kohezija-2014-2020-779"
                rel="noopener noreferrer"
                target="_blank"
                className={linkRecipe}
              >
                strukturnifondovi.hr/op-konkurentnost-i-kohezija-2014-2020-779
              </a>
              <Text font="p2">
                Projekt je sufinancirala Europska unija iz Europskog fonda za
                regionalni razvoj.
              </Text>
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
