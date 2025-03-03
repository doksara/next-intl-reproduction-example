"use client"

import { motion } from "framer-motion"
import { useCallback, useState } from "react"
import { editorTestimonials } from "./content"
import { TestimonialCard } from "./TestimonialCard"
import { Box, Center, Container, Flex, HStack } from "@/styled-system/jsx"
import { IconChevronLeft, IconChevronRight } from "@/components/Icons"
import { useSwipeable } from "react-swipeable"
import * as S from "./TestimonialSlideshow.styles"

const variants = {
  active: { opacity: 1, transform: "scale(1)" },
  inactive: { opacity: 0.4, transform: "scale(0.9)" },
}

export const TestimonialSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const childrenCount = editorTestimonials.length

  const enableSlideLeft = currentIndex !== 0
  const enableSlideRight = currentIndex !== childrenCount - 1

  const handleSlideLeft = useCallback(() => {
    if (enableSlideLeft) {
      setCurrentIndex((prev) => prev - 1)
    }
  }, [currentIndex, childrenCount])

  const handleSlideRight = useCallback(() => {
    if (enableSlideRight) {
      setCurrentIndex((prev) => prev + 1)
    }
  }, [currentIndex, childrenCount])

  const handlers = useSwipeable({
    onSwipedLeft: handleSlideRight,
    onSwipedRight: handleSlideLeft,
    preventScrollOnSwipe: true,
  })

  return (
    <Flex
      flexDirection="column"
      pb={["112px", "112px", "160px"]}
      px={["20px", "20px", "0px"]}
      overflow="hidden"
    >
      <Box
        ml={["0px", "0px", "196px"]}
        w={["100%", "100%", "720px", "928px", "928px"]}
        {...handlers}
      >
        <motion.div
          style={{
            display: "flex",
            width: `calc(${childrenCount} * 100%)`,
            overflow: "visible",
          }}
          animate={{ marginLeft: `calc(${-1 * currentIndex} * 100%)` }}
        >
          {editorTestimonials.map((t, index) => (
            <motion.div
              key={index}
              animate={index === currentIndex ? "active" : "inactive"}
              variants={variants}
              transition={{ type: "tween" }}
              style={{ width: "100%" }}
            >
              <TestimonialCard {...t} />
            </motion.div>
          ))}
        </motion.div>
      </Box>

      <Container>
        <Center
          justifyContent="space-between"
          maxW="890px"
          w="100%"
          m="0 auto"
          mt="64px"
        >
          <S.SlideshowControl
            aria-label="Slide left"
            disabled={!enableSlideLeft}
            onClick={handleSlideLeft}
          >
            <IconChevronLeft />
          </S.SlideshowControl>

          <HStack gap={["12px", "16px"]}>
            {editorTestimonials.map((_, index) => (
              <S.SlideshowNavigationItem
                key={index}
                aria-label={`Slide to testimonial ${index + 1}`}
                data-active={index === currentIndex ? true : undefined}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </HStack>

          <S.SlideshowControl
            aria-label="Slide right"
            disabled={!enableSlideRight}
            onClick={handleSlideRight}
          >
            <IconChevronRight />
          </S.SlideshowControl>
        </Center>
      </Container>
    </Flex>
  )
}
