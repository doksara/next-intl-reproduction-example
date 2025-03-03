import { Text } from "@/components/Text"
import { FormattedMessage } from "@/components/FormattedMessage"
import { Chapter } from "@/components/Chapter"
import { Box, styled, VStack } from "@/styled-system/jsx"

const OrderedList = styled("ol", {
  base: {
    listStyle: "auto",
    marginLeft: "24px",
  },
})

const OrderedListItem = styled("li", {
  base: {
    _marker: {
      fontSize: { base: "16px", md: "20px" },
      letterSpacing: { base: "-0.48px", md: "-0.6px" },
      lineHeight: { base: "19px", md: "22px" },
    },
  },
})

export const AccountAndRegistration = () => {
  return (
    <>
      <Chapter
        title={
          <FormattedMessage id="resources_faq_accountAndRegistration_chapter1_title" />
        }
        rightText={
          <Text font="p2">
            <FormattedMessage id="resources_faq_accountAndRegistration_chapter1_description" />
          </Text>
        }
        borderless
      />

      <Chapter
        title={
          <FormattedMessage id="resources_faq_accountAndRegistration_chapter2_title" />
        }
        rightText={
          <Box>
            <VStack alignItems="flex-start">
              <Text font="p2">
                <FormattedMessage id="resources_faq_accountAndRegistration_chapter2_list1_text" />
              </Text>
              <OrderedList>
                <OrderedListItem>
                  <Text font="p2">
                    <FormattedMessage id="resources_faq_accountAndRegistration_chapter2_list1_item1Text" />
                  </Text>
                </OrderedListItem>
                <OrderedListItem>
                  <Text font="p2">
                    <FormattedMessage id="resources_faq_accountAndRegistration_chapter2_list1_item2Text" />
                  </Text>
                </OrderedListItem>
              </OrderedList>
            </VStack>
            <br />
            <VStack alignItems="flex-start">
              <Text font="p2">
                <FormattedMessage id="resources_faq_accountAndRegistration_chapter2_list2_text" />
              </Text>
              <OrderedList>
                <OrderedListItem>
                  <Text font="p2">
                    <FormattedMessage id="resources_faq_accountAndRegistration_chapter2_list1_item1Text" />
                  </Text>
                </OrderedListItem>
                <OrderedListItem>
                  <Text font="p2">
                    <FormattedMessage id="resources_faq_accountAndRegistration_chapter2_list2_item2Text" />
                  </Text>
                </OrderedListItem>
              </OrderedList>
            </VStack>
          </Box>
        }
      />

      <Chapter
        title={
          <FormattedMessage id="resources_faq_accountAndRegistration_chapter3_title" />
        }
        rightText={
          <Text font="p2">
            <FormattedMessage id="resources_faq_accountAndRegistration_chapter3_description" />
          </Text>
        }
      />

      <Chapter
        title={
          <FormattedMessage id="resources_faq_accountAndRegistration_chapter4_title" />
        }
        rightText={
          <Text font="p2">
            <FormattedMessage id="resources_faq_accountAndRegistration_chapter4_description" />
          </Text>
        }
      />
    </>
  )
}
