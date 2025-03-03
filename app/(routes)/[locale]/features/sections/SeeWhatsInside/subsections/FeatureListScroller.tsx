"use client"

import { Text } from "@/components/Text"
import { FormattedMessage } from "@/components/FormattedMessage"
import { VStack, Divider, HStack, Box } from "@/styled-system/jsx"
import { features } from "./content"
import { useEffect, useRef } from "react"

interface FeatureListScrollerProps {
  isInView: boolean
  activeIndex: number
  onPickFeature: (index: number) => void
  shouldAnimate: boolean
}

export const FeatureListScroller = ({
  isInView,
  activeIndex,
  onPickFeature,
  shouldAnimate,
}: FeatureListScrollerProps) => {
  const scrollerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollerRef.current && isInView) {
      const childNodes = Array.from(scrollerRef.current.children)
      const element = childNodes[activeIndex]

      element.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      })
    }
  }, [activeIndex])

  return (
    <VStack w="100%" h="100%" gap="16px">
      <Divider orientation="horizontal" borderColor="grey" />

      <HStack
        w="100%"
        overflowX="scroll"
        scrollPaddingLeft="20px"
        scrollbar="hidden"
        ref={scrollerRef}
      >
        {features.map(({ translationKey }, _index) => (
          <HStack
            key={_index}
            gap="16px"
            className="group"
            onMouseEnter={() => onPickFeature(_index)}
            mx="20px"
          >
            <Box
              position="relative"
              w="20px"
              h="20px"
              background="rgba(18, 18, 18, 0.5)"
              _before={{
                content: _index === activeIndex ? "''" : undefined,
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                display: "block",
                background: "grey",
                animation: "grow 1s linear forwards",
              }}
              _groupHover={{
                _before: {
                  animation: "none",
                  width: "100%",
                },
              }}
            />
            <Box
              opacity={activeIndex === _index ? "1" : "0.5"}
              transition={shouldAnimate ? "opacity 1s linear" : "none"}
            >
              <Text font="h4" as="h3" style={{ whiteSpace: "nowrap" }}>
                <FormattedMessage id={translationKey} />
              </Text>
            </Box>
          </HStack>
        ))}
      </HStack>

      <Divider orientation="horizontal" borderColor="grey" />
    </VStack>
  )
}
