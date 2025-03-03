import { Marquee } from "../Marquee/"
import { Text } from "@/components/Text"
import { supportedSports } from "./data"
import { HStack } from "@/styled-system/jsx"
import { FormattedMessage } from "@/components/FormattedMessage"

export const SportMarquee = () => {
  return (
    <Marquee>
      {supportedSports.map(({ translationKey, Icon }) => (
        <HStack key={translationKey} gap={2} color="currentColor" py={4}>
          <Icon fill="currentcolor" />
          <Text font="mono">
            <FormattedMessage id={translationKey} />
          </Text>
        </HStack>
      ))}
    </Marquee>
  )
}
