import { Text } from "@/components/Text"
import { FormattedMessage } from "@/components/FormattedMessage"
import { Chapter } from "@/components/Chapter"

export const CostAndPartnerships = () => {
  return (
    <>
      <Chapter
        title={
          <FormattedMessage id="resources_faq_costAndPartnerships_chapter1_title" />
        }
        rightText={
          <Text font="p2">
            <FormattedMessage id="resources_faq_costAndPartnerships_chapter1_description" />
          </Text>
        }
        borderless
      />
    </>
  )
}
