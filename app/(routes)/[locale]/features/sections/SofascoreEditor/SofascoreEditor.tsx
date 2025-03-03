import { Section } from "@/components/Section"
import {
  FormattedMessage,
  UnderlinedFormattedMessage,
} from "@/components/FormattedMessage"
import { HeadingWithDescription } from "@/components/HeadingWithDescription"
import { HeroWithDescription } from "@/components/HeroWithDescription"
import { MajorFeatures } from "./subsections/MajorFeatures"
import { SportMarquee } from "@/components/Marquee"
import { Box } from "@/styled-system/jsx"

export const SofascoreEditor = () => {
  return (
    <Section id="features-sofascore-editor" background="grey">
      <HeadingWithDescription
        heading={
          <UnderlinedFormattedMessage
            id="features_sofascoreEditor_title"
            underlineColor="blueShades"
          />
        }
        description={<FormattedMessage id="features_sofascoreEditor_text" />}
      />

      <HeroWithDescription
        imageAlt="Person covering live Basketball match details on Sofascore Editor Android application"
        imageSrc="/images/features-sofascoreEditor-hero.webp"
        description={
          <FormattedMessage id="features_sofascoreEditor_imageText" />
        }
      />

      <MajorFeatures />

      <Box backgroundColor="blueDark" color="stone">
        <SportMarquee />
      </Box>
    </Section>
  )
}
