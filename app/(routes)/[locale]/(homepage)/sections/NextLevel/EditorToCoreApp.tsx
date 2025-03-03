"use client"

import { IconCurvedArrow, IconLongArrowRight } from "@/components/Icons"
import { useMediaQuery } from "@/hooks/useMediaQuery"
import { Box } from "@/styled-system/jsx"
import Image from "next/image"

export const EditorToCoreApp = () => {
  const isMobile = useMediaQuery("(max-width: 992px)")

  if (isMobile) {
    return (
      <Box w="250px" h="440px" m="0 auto" position="relative">
        <Image
          width={142}
          height={302}
          src="/images/homepage-nextLevel-web.webp"
          alt="Sofascore Editor web application"
          style={{ position: "absolute", top: 0, left: 0 }}
        />
        <IconCurvedArrow />
        <Image
          width={142}
          height={302}
          src="/images/homepage-nextLevel-app.webp"
          alt="Sofascore Editor mobile application"
          style={{ position: "absolute", bottom: 0, right: 0 }}
        />
      </Box>
    )
  }

  return (
    <Box
      display="grid"
      gridTemplateColumns="3fr 2fr 3fr"
      alignItems="center"
      gap="10px"
    >
      <Image
        width={222}
        height={490}
        src="/images/homepage-nextLevel-web.webp"
        alt="Sofascore Editor web application"
      />
      <IconLongArrowRight />
      <Image
        width={222}
        height={490}
        src="/images/homepage-nextLevel-app.webp"
        alt="Sofascore Editor mobile application"
      />
    </Box>
  )
}
