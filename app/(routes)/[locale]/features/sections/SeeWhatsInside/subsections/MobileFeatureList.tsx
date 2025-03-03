"use client"

import Image from "next/image"
import { Box, Center, HStack } from "@/styled-system/jsx"
import { features } from "./content"
import { useCallback, useEffect, useRef, useState } from "react"
import { AnimatePresence, motion, useInView } from "framer-motion"
import { FeatureListScroller } from "./FeatureListScroller"
import { css } from "@/styled-system/css"
import { IconChevronLeftBig, IconChevronRightBig } from "@/components/Icons"
import * as S from "./FeatureList.styles"

export const MobileFeatureList = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollerRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<ReturnType<typeof setTimeout>>()
  const isInView = useInView(scrollerRef, { amount: 1 })

  const childrenCount = features.length
  const shouldAnimate = !!intervalRef.current

  const handlePickFeature = (index: number) => {
    clearTimeout(intervalRef.current)
    setCurrentIndex(index)

    intervalRef.current = undefined
  }

  const handleSlideLeft = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? childrenCount - 1 : prev - 1))
    clearInterval(intervalRef.current)

    intervalRef.current = undefined
  }, [currentIndex, childrenCount])

  const handleSlideRight = useCallback(() => {
    setCurrentIndex((prev) => (prev === childrenCount - 1 ? 0 : prev + 1))
    clearInterval(intervalRef.current)

    intervalRef.current = undefined
  }, [currentIndex, childrenCount])

  const slide = useCallback(() => {
    if (isInView) {
      setCurrentIndex((prev) => {
        return prev === childrenCount - 1 ? 0 : prev + 1
      })
    }
  }, [isInView])

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      slide()
    }, 3000)

    slide()

    return () => clearTimeout(intervalRef.current)
  }, [isInView])

  return (
    <HStack
      w="100%"
      h="100%"
      alignItems="flex-start"
      justifyContent="space-between"
      flexDirection={["column", "column", "row"]}
      gap={["0px", "0px", "24px"]}
    >
      <Box w="100%" ref={scrollerRef}>
        <FeatureListScroller
          isInView={isInView}
          activeIndex={currentIndex}
          onPickFeature={handlePickFeature}
          shouldAnimate={shouldAnimate}
        />
      </Box>

      <Center
        flexGrow={1}
        h="100%"
        w={["100%", "100%", "auto"]}
        pt={["96px", "96px", "0px"]}
      >
        <S.SlideControl
          aria-label="Go to previous slide"
          mr={["32px", "48px"]}
          onClick={handleSlideLeft}
        >
          <IconChevronLeftBig />
        </S.SlideControl>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "just", duration: shouldAnimate ? 0.5 : 0 }}
          >
            <Image
              src={features[currentIndex].imageSrc}
              width={260}
              height={530}
              alt={features[currentIndex].translationKey}
              className={css({
                height: { base: "450px", md: "530px" },
                width: { base: "auto", md: "260px" },
              })}
            />
          </motion.div>
        </AnimatePresence>

        <S.SlideControl
          aria-label="Go to next slide"
          ml={["32px", "48px"]}
          onClick={handleSlideRight}
        >
          <IconChevronRightBig />
        </S.SlideControl>
      </Center>
    </HStack>
  )
}
