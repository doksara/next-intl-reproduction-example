"use client"

import useWidth from "@/hooks/useWidth"
import { useRef } from "react"
import { Marquee } from "../Marquee"
import { JsxStyleProps } from "@/styled-system/types"
import { HStack } from "@/styled-system/jsx"
import { useMediaQuery } from "@/hooks/useMediaQuery"

interface MaybeMarqueeProps extends JsxStyleProps {
  marqueeAboveBreakpoint: number
}

export const MaybeMarquee = ({
  marqueeAboveBreakpoint,
  children,
  ...otherProps
}: React.PropsWithChildren<MaybeMarqueeProps>) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const width = useWidth(containerRef, {}, 100) || 0

  return (
    <div ref={containerRef} style={{ flexGrow: 1 }}>
      {width < marqueeAboveBreakpoint ? (
        <Marquee {...otherProps}>{children}</Marquee>
      ) : (
        <HStack justify="space-between" {...otherProps}>
          {children}
        </HStack>
      )}
    </div>
  )
}

export const BetterMaybeMarquee = ({
  marqueeAboveBreakpoint,
  children,
  ...otherProps
}: React.PropsWithChildren<MaybeMarqueeProps>) => {
  const isAboveBreakpoint = useMediaQuery(
    `(max-width: ${marqueeAboveBreakpoint}px)`
  )

  if (isAboveBreakpoint) {
    return <Marquee {...otherProps}>{children}</Marquee>
  }
  return (
    <HStack justify="space-between" {...otherProps}>
      {children}
    </HStack>
  )
}
