import {
  PropsWithChildren,
  ReactNode,
  useEffect,
  useId,
  useRef,
  useState,
} from "react"

import * as S from "./styles"

import { IconMinus, IconPlus } from "../Icons"
import { Box, BoxProps } from "@/styled-system/jsx"
import { css } from "@/styled-system/css"

interface AccordionSectionProps {
  id: string
  label: ReactNode
  isCollapsed: boolean
  onCollapse: (sectionId: string) => void
  maxHeight?: number
  initiallyCollapsed?: boolean
}

export const AccordionSection = ({
  id,
  label,
  isCollapsed,
  onCollapse,
  initiallyCollapsed = false,
  maxHeight,
  children,
}: PropsWithChildren<AccordionSectionProps>) => {
  const [height, setHeight] = useState<number | undefined>(
    initiallyCollapsed ? undefined : 0
  )
  const [maxContentHeight, setMaxContentHeight] = useState<number>()

  const headerRef = useRef<HTMLButtonElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const panelId = useId()

  useEffect(() => {
    if (maxHeight && headerRef.current)
      setMaxContentHeight(
        maxHeight - headerRef.current.getBoundingClientRect().height
      )
  }, [maxHeight])

  useEffect(() => {
    setHeight(
      isCollapsed ? contentRef.current?.getBoundingClientRect().height : 0
    )
  }, [isCollapsed])

  return (
    <S.AccordionSection
      id={id}
      style={{ overflow: isCollapsed ? undefined : "hidden" }}
    >
      <S.AccordionHeader
        type="button"
        aria-expanded={isCollapsed}
        aria-controls={panelId}
        ref={headerRef}
        onClick={() => onCollapse(id)}
      >
        {label}
        {isCollapsed ? (
          <IconMinus
            className={css({
              width: { base: "24px", sm: "28px" },
              height: { base: "24px", sm: "28px" },
            })}
          />
        ) : (
          <IconPlus
            className={css({
              width: { base: "24px", sm: "28px" },
              height: { base: "24px", sm: "28px" },
            })}
          />
        )}
      </S.AccordionHeader>
      <div
        id={panelId}
        role="region"
        aria-labelledby={id}
        style={{
          height: height,
          maxHeight: maxContentHeight,
          transition: "height 0.2s ease-in-out",
        }}
      >
        <div ref={contentRef}>{children}</div>
      </div>
    </S.AccordionSection>
  )
}

export const Accordion = ({
  children,
  ...boxProps
}: PropsWithChildren<BoxProps>) => {
  return (
    <Box backgroundColor="inherit" {...boxProps}>
      {children}
    </Box>
  )
}
