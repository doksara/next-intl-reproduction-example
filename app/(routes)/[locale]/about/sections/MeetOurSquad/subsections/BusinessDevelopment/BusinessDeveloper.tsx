"use client"

import Image from "next/image"
import { Box, HStack, VStack } from "@/styled-system/jsx"
import { Text } from "@/components/Text"
import { IconGlobal } from "@/components/Icons"

import * as S from "./BusinessDeveloper.styles"
import { MouseEvent } from "react"
import { FormattedMessage } from "@/components/FormattedMessage"

interface BusinessDeveloperProps {
  name: string
  imgSrc: string
  email: string
  regions: string[]
}

export const BusinessDeveloper = ({
  name,
  imgSrc,
  email,
  regions,
}: BusinessDeveloperProps) => {
  const handlePress = (
    event: MouseEvent<HTMLButtonElement>,
    emailToCopy: string
  ) => {
    event.currentTarget.focus()

    const blob = new Blob([emailToCopy], { type: "text/plain" })
    const text = new ClipboardItem({ [blob.type]: blob })

    navigator.clipboard.write([text])
  }

  return (
    <S.Figure onClick={(e) => handlePress(e, email)}>
      <HStack gap="0px" alignItems="flex-start">
        <Box position="relative" w="190px" h="190px" flexShrink={0}>
          <Image fill src={imgSrc} alt={name} />
        </Box>
        <VStack
          gap="16px"
          alignItems="flex-start"
          justifyContent="flex-start"
          p="24px"
        >
          <IconGlobal fill="#F0EEDF" />
          <VStack gap="2px" alignItems="flex-start">
            {regions.map((region) => (
              <Text key={region} font="p1" style={{ textAlign: "left" }}>
                <FormattedMessage id={region} />
              </Text>
            ))}
          </VStack>
        </VStack>
      </HStack>
      <S.Caption>
        <Text font="p1" fontWeight="bold">
          {name}
        </Text>
        <Text font="p2">{email}</Text>
      </S.Caption>
    </S.Figure>
  )
}
