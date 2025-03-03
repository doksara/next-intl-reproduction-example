import Image from "next/image"
import { Text } from "@/components/Text"
import {
  Box,
  Center,
  Divider,
  HStack,
  Stack,
  VStack,
} from "@/styled-system/jsx"
import { IconGlobal, IconQuote } from "@/components/Icons"
import { FormattedMessage } from "@/components/FormattedMessage"
import * as S from "./TestimonialCard.styles"
import { css } from "@/styled-system/css"

interface TestimonialCardProps {
  quote: string
  name: string
  role: string
  company: string
  location: string
  imageSrc: string
}

export const TestimonialCard = ({
  quote,
  name,
  role,
  company,
  location,
  imageSrc,
}: TestimonialCardProps) => {
  return (
    <S.TestimonialCard>
      <Stack
        flexDirection={["column", "row"]}
        gap="20px"
        alignItems="center"
        p={["20px", 0]}
        h="100%"
      >
        <Center
          w={["auto", "164px"]}
          alignSelf={["flex-start", "center", undefined]}
          pt={["48px", "0px"]}
          flexShrink={0}
        >
          <IconQuote />
        </Center>
        <S.TestimonialCardQuote>
          <Text font="p2">
            <FormattedMessage id={quote} />
          </Text>
        </S.TestimonialCardQuote>
      </Stack>
      <HStack gap="20px" w="100%">
        <Image
          width={164}
          height={138}
          src={imageSrc}
          alt={name}
          style={{ flexShrink: 0 }}
          className={css({
            width: { base: "96px", sm: "164px" },
            height: { base: "80px", sm: "138px" },
          })}
        />
        <HStack
          h="100%"
          borderTop="1px solid rgba(18, 18, 18, 0.40)"
          borderBottom={["1px solid rgba(18, 18, 18, 0.40)", "none"]}
          mr={["20px", undefined, undefined]}
          w="100%"
        >
          <VStack
            alignItems={["space-between", "flex-start"]}
            h={["100%", "auto"]}
            justifyContent="center"
          >
            <Text font="p1" fontWeight="bold">
              {name}
            </Text>
            <Box display={["none", "initial"]}>
              <Text font="mono">
                <FormattedMessage id={role} /> @{" "}
                <FormattedMessage id={company} />
              </Text>
              <Divider
                orientation="horizontal"
                mt="8px"
                width="112px"
                borderColor="rgba(18, 18, 18, 0.40)"
              />
            </Box>
            <HStack opacity="0.6">
              <IconGlobal fill="#121212" width={14} height={14} />
              <Text font="mono" style={{ lineHeight: "1" }}>
                <FormattedMessage id={location} />
              </Text>
            </HStack>
          </VStack>
        </HStack>
      </HStack>

      <Box display={["initial", "none"]} p="12px 20px">
        <Text font="mono">
          <FormattedMessage id={role} />
          <br /> @ <FormattedMessage id={company} />
        </Text>
      </Box>
    </S.TestimonialCard>
  )
}
