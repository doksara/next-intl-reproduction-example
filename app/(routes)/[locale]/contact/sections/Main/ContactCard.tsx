"use client"

import { useState } from "react"
import { FormattedMessage } from "@/components/FormattedMessage"
import { Box, HStack } from "@/styled-system/jsx"
import { IconCopy, IconDone } from "@/components/Icons"
import * as S from "./ContactCard.styles"

interface ContactCardProps {
  department: React.ReactNode
  email: string
}

export const ContactCard = ({ department, email }: ContactCardProps) => {
  const [isPressed, setIsPressed] = useState(false)

  const handleOnClick = () => {
    setIsPressed(true)

    const blob = new Blob([email], { type: "text/plain" })
    const text = new ClipboardItem({ [blob.type]: blob })

    navigator.clipboard.write([text])
  }

  return (
    <S.Card
      className="group"
      onClick={handleOnClick}
      onMouseLeave={() => setIsPressed(false)}
    >
      <S.Department>{department}</S.Department>

      <HStack justifyContent="space-between" w="100%" minH="36px">
        <S.Email>
          {isPressed ? (
            <FormattedMessage id="contact_main_emailCopied" />
          ) : (
            email
          )}
        </S.Email>

        {isPressed ? (
          <IconDone />
        ) : (
          <Box display="none" _groupHover={{ display: "flex" }}>
            <IconCopy />
          </Box>
        )}
      </HStack>
    </S.Card>
  )
}
