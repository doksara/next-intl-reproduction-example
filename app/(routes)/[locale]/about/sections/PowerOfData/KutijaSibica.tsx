"use client"

import { FormattedMessage } from "@/components/FormattedMessage"
import { IconPlay } from "@/components/Icons"
import { PopupVideoPlayer } from "@/components/PopupVideoPlayer"
import { Box, Stack, styled } from "@/styled-system/jsx"
import { useEffect, useState } from "react"

export const Video = styled("video", {
  base: {
    position: "absolute",
    top: 0,
    left: 0,

    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
})

export const Text = styled("p", {
  base: {
    fontSize: { base: "44px", md: "78px" },
    letterSpacing: { base: "-1.32px", md: "-2.34px" },
    lineHeight: 1,
  },
})

export const PlayButton = styled("button", {
  base: {
    appearance: "none",
    border: "1px solid token(colors.stone)",
    padding: { base: "16px 24px", sm: "24px 32px" },
    zIndex: 1,

    display: "flex",
    alignItems: "center",
    gap: "16px",
    cursor: "pointer",
    transition: "background .3s linear",

    _hover: {
      background: "blue",
    },
  },
})

export const PlayButtonLabel = styled("span", {
  base: {
    fontSize: { base: "20px", md: "28px" },
    letterSpacing: { base: "-0.6px", md: "-0.84px" },
    lineHeight: { base: 1.1, md: 1 },
    whiteSpace: "nowrap",
  },
})

export const KutijaSibica = () => {
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
    <Stack
      flexDirection={["column", "column", "row"]}
      alignItems={["flex-start", "flex-start", "center"]}
      justifyContent={["center", "center"]}
      position="relative"
      h={["600px", "600px", "880px", "982px"]}
      gap={["80px", "80px", "100px", "240px", "380px"]}
      p="20px"
    >
      <Box
        position="relative"
        zIndex={1}
        w="100%"
        maxW="574px"
        ml={["0px", "0px", "112px", "196px"]}
      >
        <Text>
          <FormattedMessage id="about_powerOfData_kutijaSibica" />
        </Text>
      </Box>

      <PopupVideoPlayer
        isOpen={isPlayerOpened}
        videoSrc="https://www.youtube.com/embed/PdHBGPEQcyk?autoplay=1"
        onOutsideClick={() => setIsPlayerOpened(false)}
      />

      <PlayButton onClick={() => setIsPlayerOpened(true)}>
        <IconPlay />
        <PlayButtonLabel>
          <FormattedMessage id="about_powerOfData_playVideo" />
        </PlayButtonLabel>
      </PlayButton>

      <Video
        autoPlay
        loop
        muted
        controls={false}
        playsInline
        borderRadius="4px"
        src="/videos/about-kutija-sibica.mp4"
      />
    </Stack>
  )
}
