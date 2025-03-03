import Image from "next/image"
import { IconOpenInBrowser } from "@/components/Icons"
import { Text } from "@/components/Text"
import { Box, HStack, VStack } from "@/styled-system/jsx"
import * as S from "./QuoteCard.styles"
import { FormattedMessage } from "@/components/FormattedMessage"

interface QuoteCardProps {
  description: string
  name: string
  position: string
  company: React.ReactNode
  location: string
  imageSrc: string
}

export const QuoteCard = ({
  description,
  name,
  position,
  company,
  location,
  imageSrc,
}: QuoteCardProps) => {
  return (
    <S.QuoteCardArticle>
      <S.QuoteCardDescription>
        <FormattedMessage id={description} />
      </S.QuoteCardDescription>

      <HStack
        mt="24px"
        justifyContent="space-between"
        h={["120px", "112px"]}
        gap={["16px", "24px"]}
      >
        <Box
          position="relative"
          h="100%"
          width={["96px", "112px"]}
          flexShrink={0}
        >
          <Image
            src={imageSrc}
            alt={name}
            fill
            style={{ objectFit: "cover" }}
          />
        </Box>

        <VStack
          gap="0px"
          alignItems="flex-start"
          borderBottom="1px solid grey"
          justifyContent="space-between"
          flexGrow={1}
          h="100%"
          pb="8px"
        >
          <Box>
            <S.QuoteCardName>{name}</S.QuoteCardName>

            <HStack mt="8px">
              <Text font="mono">
                <FormattedMessage id={position} /> @ {company}
              </Text>
            </HStack>
          </Box>

          <HStack opacity="0.6">
            <IconOpenInBrowser />
            <Text font="mono">
              <FormattedMessage id={location} />
            </Text>
          </HStack>
        </VStack>
      </HStack>
    </S.QuoteCardArticle>
  )
}
