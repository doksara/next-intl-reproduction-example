import { FormattedMessage } from "@/components/FormattedMessage"
import {
  IconIndicatorStats,
  IconLeagues,
  IconWhatsNew,
} from "@/components/Icons"
import { Text } from "@/components/Text"
import { Container, Grid, GridItem, VStack } from "@/styled-system/jsx"
import Image from "next/image"

export const Collague = () => {
  return (
    <Container>
      <Grid
        columns={[1, 2, 2, 3]}
        gridTemplateRows={[
          "320px 320px 320px 1fr 320px",
          "repeat(3, 340px)",
          "repeat(3, 420px)",
          "unset",
        ]}
        gap="24px"
      >
        <GridItem border="1px solid rgba(240, 238, 223, 0.30)">
          <VStack h="100%" px="24px" justifyContent="flex-end">
            <VStack
              maxH={["280px", "280px", "360px"]}
              h="100%"
              alignItems="flex-start"
              gap="48px"
            >
              <IconIndicatorStats />
              <Text font="p1">
                <FormattedMessage id="about_powerOfData_collague_text1" />
              </Text>
            </VStack>
          </VStack>
        </GridItem>
        <GridItem
          border="1px solid rgba(240, 238, 223, 0.30)"
          overflow="hidden"
        >
          <Image
            src="/images/about-powerofdata-grid-image-2.webp"
            alt="Sofa bar"
            width={1040}
            height={1040}
          />
        </GridItem>
        <GridItem border="1px solid rgba(240, 238, 223, 0.30)">
          <VStack h="100%" px="24px" justifyContent="flex-end">
            <VStack
              maxH={["280px", "280px", "360px"]}
              h="100%"
              alignItems="flex-start"
              gap="48px"
            >
              <IconLeagues />
              <Text font="p1">
                <FormattedMessage id="about_powerOfData_collague_text2" />
              </Text>
            </VStack>
          </VStack>
        </GridItem>
        <GridItem
          border="1px solid rgba(240, 238, 223, 0.30)"
          colSpan={[1, 2, 2, 2, 2]}
          overflow="hidden"
          order={[4, 5, 5, 4, 4, 4]}
        >
          <Image
            src="/images/about-powerofdata-grid-image-1.webp"
            alt="Street basketball"
            width={2124}
            height={1040}
          />
        </GridItem>
        <GridItem
          border="1px solid rgba(240, 238, 223, 0.30)"
          order={[5, 4, 4, 5, 5, 5]}
        >
          <VStack h="100%" px="24px" justifyContent="flex-end">
            <VStack
              maxH={["280px", "280px", "360px"]}
              h="100%"
              alignItems="flex-start"
              gap="48px"
            >
              <IconWhatsNew />
              <Text font="p1">
                <FormattedMessage id="about_powerOfData_collague_text3" />
              </Text>
            </VStack>
          </VStack>
        </GridItem>
      </Grid>
    </Container>
  )
}
