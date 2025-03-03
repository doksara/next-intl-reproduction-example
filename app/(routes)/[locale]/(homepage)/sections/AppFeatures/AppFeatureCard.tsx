import Image from "next/image"
import { Text } from "@/components/Text"
import { Box } from "@/styled-system/jsx"
import * as S from "./AppFeatureCard.styles"
import { css } from "@/styled-system/css"

interface AppFeatureCardProps {
  title: React.ReactNode
  imageSrc: string
  imageAlt: string
  description: React.ReactNode
}

export const AppFeatureCard = ({
  title,
  imageSrc,
  imageAlt,
  description,
}: AppFeatureCardProps) => {
  return (
    <S.AppFeatureCard>
      <Box display="flex" alignItems="center" minH="160px">
        <Text font="h4" as="h3">
          {title}
        </Text>
      </Box>

      <Image
        width={228}
        height={388}
        src={imageSrc}
        alt={imageAlt}
        className={css({
          width: { base: "171px", sm: "228px" },
          height: { base: "291px", sm: "388px" },
        })}
      />

      <S.AppFeatureCardDescription>{description}</S.AppFeatureCardDescription>
    </S.AppFeatureCard>
  )
}
