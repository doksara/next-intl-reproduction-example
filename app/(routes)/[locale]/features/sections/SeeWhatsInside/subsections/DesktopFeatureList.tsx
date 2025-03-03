"use client"

import Image from "next/image"
import { Center, HStack } from "@/styled-system/jsx"
import { features } from "./content"
import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { FeatureListTable } from "./FeatureListTable"
import { css } from "@/styled-system/css"

export const DesktopFeatureList = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setTimeout>>()

  const childrenCount = features.length
  const shouldAnimate = !!intervalRef.current

  const handlePickFeature = (index: number) => {
    clearTimeout(intervalRef.current)
    setCurrentIndex(index)

    intervalRef.current = undefined
  }

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev === childrenCount - 1 ? 0 : prev + 1))
    }, 3000)

    return () => clearTimeout(intervalRef.current)
  }, [])

  return (
    <HStack
      w="100%"
      h="100%"
      alignItems="flex-start"
      justifyContent="space-between"
      flexDirection={["column", "column", "row"]}
      gap={["0px", "0px", "24px"]}
    >
      <FeatureListTable
        activeIndex={currentIndex}
        onPickFeature={handlePickFeature}
        shouldAnimate={shouldAnimate}
      />

      <Center
        flexGrow={1}
        flexShrink={0}
        h="100%"
        w={["100%", "100%", "auto"]}
        pt={["96px", "96px", "0px"]}
      >
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
      </Center>
    </HStack>
  )
}
