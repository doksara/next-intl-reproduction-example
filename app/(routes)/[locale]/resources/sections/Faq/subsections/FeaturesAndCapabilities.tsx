import { Text } from "@/components/Text"
import { FormattedMessage } from "@/components/FormattedMessage"
import { Chapter } from "@/components/Chapter"

export const FeaturesAndCapabilities = () => {
  return (
    <>
      <Chapter
        title={
          <FormattedMessage id="resources_faq_featuresAndCapabilities_chapter1_title" />
        }
        rightText={
          <Text font="p2">
            <FormattedMessage id="resources_faq_featuresAndCapabilities_chapter1_description" />
          </Text>
        }
        borderless
      />

      <Chapter
        title={
          <FormattedMessage id="resources_faq_featuresAndCapabilities_chapter2_title" />
        }
        rightText={
          <Text font="p2">
            <FormattedMessage id="resources_faq_featuresAndCapabilities_chapter2_description" />
          </Text>
        }
      />

      <Chapter
        title={
          <FormattedMessage id="resources_faq_featuresAndCapabilities_chapter3_title" />
        }
        rightText={
          <Text font="p2">
            <FormattedMessage
              id="resources_faq_featuresAndCapabilities_chapter3_description"
              rich
            />
          </Text>
        }
      />

      <Chapter
        title={
          <FormattedMessage id="resources_faq_featuresAndCapabilities_chapter4_title" />
        }
        rightText={
          <Text font="p2">
            <FormattedMessage
              id="resources_faq_featuresAndCapabilities_chapter4_description"
              rich
            />
          </Text>
        }
      />

      <Chapter
        title={
          <FormattedMessage id="resources_faq_featuresAndCapabilities_chapter5_title" />
        }
        rightText={
          <Text font="p2">
            <FormattedMessage id="resources_faq_featuresAndCapabilities_chapter5_description" />
          </Text>
        }
      />

      <Chapter
        title={
          <FormattedMessage id="resources_faq_featuresAndCapabilities_chapter6_title" />
        }
        rightText={
          <Text font="p2">
            <FormattedMessage id="resources_faq_featuresAndCapabilities_chapter6_description" />
          </Text>
        }
      />

      <Chapter
        title={
          <FormattedMessage id="resources_faq_featuresAndCapabilities_chapter7_title" />
        }
        rightText={
          <Text font="p2">
            <FormattedMessage id="resources_faq_featuresAndCapabilities_chapter7_description" />
          </Text>
        }
      />

      <Chapter
        title={
          <FormattedMessage id="resources_faq_featuresAndCapabilities_chapter8_title" />
        }
        rightText={
          <Text font="p2">
            <FormattedMessage id="resources_faq_featuresAndCapabilities_chapter8_description" />
          </Text>
        }
      />

      <Chapter
        title={
          <FormattedMessage id="resources_faq_featuresAndCapabilities_chapter9_title" />
        }
        rightText={
          <Text font="p2">
            <FormattedMessage id="resources_faq_featuresAndCapabilities_chapter9_description" />
          </Text>
        }
      />
    </>
  )
}
