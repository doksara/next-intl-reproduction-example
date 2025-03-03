"use client"

import { useEffect, useState } from "react"
import { IconPlay } from "@/components/Icons"
import { HStack } from "@/styled-system/jsx"
import { PopupVideoPlayer } from "@/components/PopupVideoPlayer"
import * as S from "./VideoTutorialCard.styles"

interface VideoTutorialCardProps {
  order: string
  title: React.ReactNode
  url: string
}

export const VideoTutorialCard = ({
  order,
  title,
  url,
}: VideoTutorialCardProps) => {
  const [isPlayerOpened, setIsPlayerOpened] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsPlayerOpened(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <>
      <S.Card onClick={() => setIsPlayerOpened(true)}>
        <HStack justifyContent="space-between" w="100%">
          <IconPlay width={44} height={44} fill="#121212" />
          <S.Order>/// {order}</S.Order>
        </HStack>
        <S.Title>{title}</S.Title>
      </S.Card>

      <PopupVideoPlayer
        isOpen={isPlayerOpened}
        videoSrc={url}
        onOutsideClick={() => setIsPlayerOpened(false)}
      />
    </>
  )
}
