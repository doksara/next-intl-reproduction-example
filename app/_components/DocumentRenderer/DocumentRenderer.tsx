"use client"

import debounce from "lodash/debounce"
import { Box, Divider, VStack } from "@/styled-system/jsx"
import { Text } from "@/components/Text"
import { FormattedMessage } from "@/components/FormattedMessage"
import { Fragment, useEffect, useRef, useState } from "react"
import { AnimatePresence, motion, useInView } from "framer-motion"
import { BottomSheetNavigation } from "../BottomSheetNavigation"
import { Level } from "./interface"
import { BackToTopButton } from "../BackToTopButton"
import * as S from "./DocumentRenderer.styles"
import { css } from "@/styled-system/css"
import { StickyNavigation } from "../StickyNavigation"

interface DocumentRendererProps {
  sections: Level[]
}

export const DocumentRenderer = ({ sections }: DocumentRendererProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { amount: 0.01 })
  const [activeTitleId, setActiveTitleId] = useState<string | null>(null)
  const [showBackToTopButton, setShowBackToTopButton] = useState(false)

  const activeTitle = sections.find((s) => s.id === activeTitleId)
  const otherTitles = sections.filter((l2t) => l2t.id !== activeTitleId)

  const handleScroll = (e: Event) => {
    if (e.target instanceof Document) {
      setShowBackToTopButton(e.target.documentElement.scrollTop > 2000)
    }
  }

  useEffect(() => {
    const debouncedHandler = debounce(handleScroll, 250)

    window.addEventListener("scroll", debouncedHandler)

    return () => {
      window.removeEventListener("scroll", debouncedHandler)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setActiveTitleId(entries[0].target.id)
        }
      },
      { threshold: 1 }
    )

    const observationTargets = ref.current?.querySelectorAll("h2")

    if (observationTargets) {
      observationTargets.forEach((t) => observer.observe(t))
    }

    return () => {
      if (observationTargets) {
        observationTargets.forEach((t) => observer.unobserve(t))
      }
    }
  }, [])

  return (
    <>
      <StickyNavigation activeTitle={activeTitleId} sections={sections} />

      <Divider
        orientation="horizontal"
        display={["block", "none"]}
        borderColor="rgba(240, 238, 223, 0.30)"
      />

      <VStack
        flexBasis="0px"
        flexGrow={1}
        alignItems="flex-start"
        gap="0px"
        ref={ref}
      >
        {sections.map((level2Section, l2Index) => (
          <Fragment key={level2Section.id}>
            <S.Level2Heading mb="32px" id={level2Section.id}>
              <FormattedMessage id={level2Section.levelTitle} />
            </S.Level2Heading>

            {level2Section.levelTexts?.map((lt, ltIndex) => (
              <Box key={ltIndex} mb="32px">
                {lt.text && (
                  <Text key={ltIndex} font="p2">
                    <FormattedMessage id={lt.text} rich />
                  </Text>
                )}

                {lt.listItems && (
                  <S.List mt="32px">
                    {lt.listItems.map((li, liIndex) => (
                      <S.ListItem key={liIndex}>
                        <FormattedMessage rich id={li.text} />

                        {li.sublistItems && (
                          <S.List>
                            {li.sublistItems.map((sli, sliIndex) => (
                              <S.ListItem key={sliIndex}>
                                <FormattedMessage id={sli.text} />
                              </S.ListItem>
                            ))}
                          </S.List>
                        )}
                      </S.ListItem>
                    ))}
                  </S.List>
                )}
              </Box>
            ))}

            {level2Section.subLevels?.map((level3Section) => (
              <Fragment key={level3Section.id}>
                <S.Level3Heading my="16px" id={level3Section.id}>
                  <FormattedMessage id={level3Section.levelTitle} />
                </S.Level3Heading>

                {level3Section.levelTexts?.map((lt, ltIndex) => (
                  <Box key={ltIndex} mb="32px">
                    {lt.text && (
                      <Text key={ltIndex} font="p2">
                        <FormattedMessage id={lt.text} rich />
                      </Text>
                    )}

                    {lt.listItems && (
                      <S.List mt="32px">
                        {lt.listItems.map((li, liIndex) => (
                          <S.ListItem key={liIndex}>
                            <FormattedMessage rich id={li.text} />

                            {li.sublistItems && (
                              <S.List my="24px">
                                {li.sublistItems.map((sli, sliIndex) => (
                                  <S.ListItem
                                    key={sliIndex}
                                    _before={{
                                      borderRadius: "50%",
                                      width: "10px",
                                      height: "10px",
                                    }}
                                  >
                                    <FormattedMessage id={sli.text} />
                                  </S.ListItem>
                                ))}
                              </S.List>
                            )}
                          </S.ListItem>
                        ))}
                      </S.List>
                    )}
                  </Box>
                ))}
              </Fragment>
            ))}

            {l2Index !== sections.length - 1 && (
              <Divider orientation="horizontal" my="64px" />
            )}
          </Fragment>
        ))}
      </VStack>

      {isInView && activeTitle && (
        <BottomSheetNavigation
          activeTitle={activeTitle.levelTitle}
          otherTitles={otherTitles}
        />
      )}

      <AnimatePresence>
        {showBackToTopButton && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "ease-out", duration: 0.7 }}
            className={css({
              position: "fixed",
              right: { base: "20px", sm: "86px" },
              bottom: { base: "80px", sm: "34px" },
              zIndex: 1001,
            })}
          >
            <BackToTopButton />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
