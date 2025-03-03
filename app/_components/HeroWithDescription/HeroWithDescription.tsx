import { Container, Box, HStack } from "@/styled-system/jsx"

import { Text } from "../Text"
import Image from "next/image"
import { css } from "@/styled-system/css"

interface HeroWithDescriptionProps {
  imageSrc: string
  imageAlt: string
  description: React.ReactNode
}

export const HeroWithDescription = ({
  imageSrc,
  description,
}: HeroWithDescriptionProps) => {
  return (
    <Container noGutters withMedia>
      <Box
        w="100%"
        h={["520px", "520px", "560px", "622px"]}
        position="relative"
        overflow="hidden"
        borderRadius="4px"
      >
        <Box
          position="relative"
          h="100%"
          w="100%"
          maskImage={[
            "linear-gradient(0deg, rgba(18, 18, 18, 0.50) 0%, rgba(18, 18, 18, 0.50) 100%)",
            "none",
          ]}
        >
          <Image
            src={imageSrc}
            alt=""
            fill
            priority
            className={css({
              transform: { base: "scale(1.4)", sm: "none" },
              objectFit: "cover",
              objectPosition: { base: "unset", sm: "0px 60%" },
            })}
          />
        </Box>

        <HStack
          gap="16px"
          position="absolute"
          top="50%"
          left={["50%", "20px", "96px", "96px", "144px", "196px"]}
          transform={["translate(-50%, -50%)", "translateY(-50%)"]}
          w={["244px", "360px", "360px", "auto"]}
          alignItems={["flex-start", "flex-start", "center"]}
        >
          <Box color="magenta">
            <Text font="mono">///</Text>
          </Box>
          <Text font="mono">{description}</Text>
        </HStack>
      </Box>
    </Container>
  )
}
