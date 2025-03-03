"use client"

import { useMediaQuery } from "@/hooks/useMediaQuery"
import * as S from "./Introduction.styles"

export const IntroductionVideo = () => {
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <S.Video
      autoPlay
      loop
      muted
      controls={false}
      playsInline
      borderRadius="4px"
      src={
        isMobile
          ? "/videos/homepage-introduction-editor-mobile.mp4"
          : "/videos/homepage-introduction-editor-desktop.mp4"
      }
    />
  )
}
