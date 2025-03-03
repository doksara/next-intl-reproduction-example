import { Text } from "@/components/Text"
import { FormattedMessage } from "@/components/FormattedMessage"
import { Chapter } from "@/components/Chapter"

export const General = () => {
  return (
    <>
      <Chapter
        title={<FormattedMessage id="resources_faq_general_chapter1_title" />}
        rightText={
          <Text font="p2">
            <FormattedMessage
              id="resources_faq_general_chapter1_description"
              rich
              values={{
                a: (chunks) => (
                  <a
                    href="https://www.sofascore.com"
                    style={{ textDecoration: "underline" }}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {chunks}
                  </a>
                ),
              }}
            />
          </Text>
        }
        borderless
      />

      <Chapter
        title={<FormattedMessage id="resources_faq_general_chapter2_title" />}
        rightText={
          <Text font="p2">
            <FormattedMessage
              id="resources_faq_general_chapter2_description"
              rich
              values={{
                a: (chunks) => (
                  <a
                    href="https://www.sofascore.com"
                    style={{ textDecoration: "underline" }}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {chunks}
                  </a>
                ),
              }}
            />
          </Text>
        }
      />

      <Chapter
        title={<FormattedMessage id="resources_faq_general_chapter3_title" />}
        rightText={
          <Text font="p2">
            <FormattedMessage id="resources_faq_general_chapter3_description" />
          </Text>
        }
      />

      <Chapter
        title={<FormattedMessage id="resources_faq_general_chapter4_title" />}
        rightText={
          <Text font="p2">
            <FormattedMessage id="resources_faq_general_chapter4_description" />
          </Text>
        }
      />
    </>
  )
}
