"use client"

import {
  FormattedMessage,
  UnderlinedFormattedMessage,
} from "@/components/FormattedMessage"
import { Section } from "@/components/Section"
import { Box, Container, Stack, styled } from "@/styled-system/jsx"
import { Text } from "@/components/Text"
import {
  Accordion,
  AccordionActionType,
  AccordionSection,
  useAccordionReducer,
} from "@/components/Accordion"
import { useEffect } from "react"

import { accordionSections } from "./subsections"
import { useRouter } from "@/i18n/routing"
import * as S from "./Faq.styles"

export const StyledEmailChunk = styled("a", {
  base: {
    textDecoration: "underline",
    transition: "color .2s linear",

    _hover: {
      color: "blueDark",
    },
  },
})

export const StyledExternalLinkChunk = styled("a", {
  base: {
    textDecoration: "underline",
    transition: "color .2s linear",

    _hover: {
      color: "blueDark",
    },
  },
})

export const EmailChunk = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledEmailChunk href={`mailto: ${children}`}>{children}</StyledEmailChunk>
  )
}

export const ExternalLinkChunk = ({
  children,
  href,
}: {
  children: React.ReactNode
  href: string
}) => {
  return (
    <StyledExternalLinkChunk
      href={href}
      rel="noopener norefferer"
      target="_blank"
    >
      {children}
    </StyledExternalLinkChunk>
  )
}

export const FrequentlyAskedQuestions = () => {
  const router = useRouter()
  const [state, dispatch] = useAccordionReducer({
    general: false,
  })

  useEffect(() => {
    const hash = window.location.hash.replace("#", "")

    if (Object.hasOwn(state, hash)) {
      dispatch({
        type: AccordionActionType.EXPAND_SECTION,
        payload: hash,
      })
    }
  }, [router])

  return (
    <Section id="faq" background="stone" color="grey">
      <Container>
        <Box mt="160px" mb="120px">
          <Text font="h1" as="h2">
            <UnderlinedFormattedMessage
              id="resources_faq_title"
              underlineColor="blue"
            />
          </Text>
        </Box>

        <Box maxW="1472px" w="100%" ml="auto">
          <Accordion>
            {accordionSections.map(({ id, label, Component }) => (
              <AccordionSection
                key={id}
                id={id}
                label={label}
                isCollapsed={state[id]}
                onCollapse={(sectionId) => {
                  dispatch({
                    type: AccordionActionType.TOGGLE_SECTION,
                    payload: sectionId,
                  })
                }}
              >
                {Component}
              </AccordionSection>
            ))}
          </Accordion>
        </Box>

        <Stack
          position="relative"
          flexDirection={["column", "column", "row"]}
          background="stone"
          pt={["64px", "64px", "80px"]}
          pb={["112px", "112px", "160px"]}
          gap={["32px", "32px", "0px"]}
        >
          <S.NoteText maxW="680px" w="100%" opacity="0.8">
            <FormattedMessage
              id="resources_faq_noteText1"
              rich
              values={{
                email: (chunks) => <EmailChunk>{chunks}</EmailChunk>,
              }}
            />
          </S.NoteText>
          <S.NoteText maxW="340px" w="100%" opacity="0.8">
            <FormattedMessage
              id="resources_faq_noteText2"
              rich
              values={{
                a: (chunks) => (
                  <ExternalLinkChunk href="https://sofascore-editor.helpscoutdocs.com/">
                    {chunks}
                  </ExternalLinkChunk>
                ),
              }}
            />
          </S.NoteText>
        </Stack>
      </Container>
    </Section>
  )
}
