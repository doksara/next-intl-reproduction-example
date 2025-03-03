import Image from "next/image"
import { Box, HStack } from "@/styled-system/jsx"
import { css } from "@/styled-system/css"
import { Text } from "@/components/Text"

interface ContributorProps {
  name: string | undefined
  imageSrc: string | undefined
}

export const Contributor = ({ name, imageSrc }: ContributorProps) => {
  if (imageSrc && name) {
    return (
      <Box
        position="relative"
        className="group"
        w="100%"
        h="100%"
        overflow="hidden"
        background="grey"
      >
        <Image
          width={140}
          height={140}
          src={imageSrc}
          alt={name}
          className={css({
            objectFit: "cover",
            width: "100%",

            _groupHover: { opacity: "0.4" },
          })}
        />
        <HStack
          alignItems="center"
          position="absolute"
          bottom="-16px"
          left="50%"
          transform="translateX(-50%)"
          transition="all .15s ease"
          _groupHover={{ bottom: "12px" }}
          color="stone"
          gap="8px"
        >
          <Box background="magenta" h="12px" w="12px" />

          <Text font="mono" style={{ lineHeight: 1 }}>
            {name}
          </Text>
        </HStack>
      </Box>
    )
  }

  return <Box w="100%" h="100%" backgroundColor="#374DF5" />
}
