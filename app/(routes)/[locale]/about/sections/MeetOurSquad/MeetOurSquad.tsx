import { Section } from "@/components/Section"
import { BusinessDevelopment } from "./subsections/BusinessDevelopment"
import { BehindTheScenes } from "./subsections/BehindTheScenes"

export const MeetOurSquad = () => {
  return (
    <Section id="meet-our-squad" background="blue" color="grey">
      <BusinessDevelopment />
      <BehindTheScenes />
    </Section>
  )
}
