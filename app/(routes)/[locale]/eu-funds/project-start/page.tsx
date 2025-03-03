import { Box, Container, Divider, VStack } from "@/styled-system/jsx"
import { Text } from "@/components/Text"
import { Metadata } from "next"
import { Section } from "@/components/Section"
import { EuLabel } from "../EuLabel"

import { linkRecipe } from "../styles"
import { UnderlinedText } from "@/components/FormattedMessage"
import { setRequestLocale } from "next-intl/server"

export const metadata: Metadata = {
  title: "EU Project Start | Sofascore Editor",
  metadataBase: new URL("https://editor.sofascore.com/eu-funds/project-start"),
  alternates: {
    canonical: ".",
  },
}

export default function EuFundsProjectStart({
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
                  Članak
                </UnderlinedText>{" "}
                o početku projekta
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
              <Text font="p2">
                Projekt „Inovativna aplikacija za praćenje niže rangiranog i
                amaterskog sporta Sofascore Editor“ koji provodi poduzeće Sofa
                IT d.o.o. za informatiku sufinanciran je iz Europskog fonda za
                regionalni razvoj u sklopu Poziva „Inovacije novoosnovanih
                MSP-ova - II faza“.
              </Text>

              <Text font="p2">
                Otežan pristup rezultatima amaterskih i niže rangiranih sportova
                onemogućava praćenje sportskih rezultata što predstavlja glavni
                problem koji projekt adresira. Cilj projekta je izrada
                adekvatnog sustava za unos i pregled sportskih rezultata i
                statistika na razini amaterskog i niželigaškog sporta Sofascore
                Editor sa ključnim funkcionalnostima koje rješavaju navedeni
                problem kojim će se povećati zadovoljstvo i broj krajnjih
                korisnika na globalnom tržištu.
              </Text>

              <Text font="p2">
                Prilagodbom softverskog rješenja doći će do rasta prihoda od
                prodaje za 35%, novog zapošljavanja (+5) te rasta izvoza za 30%
                do 2022. godine. Ciljne skupine su amaterski sportaši,
                klubovi,udruge, roditelji koji prate djecu u mlađim uzrastima,
                svi sportski entuzijasti i šira zajednica.
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

              <Text font="p2" style={{ opacity: 0.6 }}>
                Razdoblje provedbe: 17.06.Ukupna vrijednost projekta je
                1.740.950,98 HRK od čega EU sufinanciranje iznosi 1.391.218,16
                HRK.
              </Text>
            </VStack>

            <Divider
              orientation="horizontal"
              my="48px"
              borderColor="rgba(240, 238, 223, 0.30)"
            />

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
