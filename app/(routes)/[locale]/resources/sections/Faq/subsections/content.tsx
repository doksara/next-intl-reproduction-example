import { FormattedMessage } from "@/components/FormattedMessage"
import { Text } from "@/components/Text"
import { General } from "./General"
import { CostAndPartnerships } from "./CostAndPartnerships"
import { FeaturesAndCapabilities } from "./FeaturesAndCapabilities"
import { AccountAndRegistration } from "./AccountAndRegistration"

export const accordionSections = [
  {
    id: "general",
    label: (
      <Text font="h4" as="h3" fontWeight="bold">
        <FormattedMessage id="resources_faq_general_title" />
      </Text>
    ),
    Component: <General />,
  },
  {
    id: "costAndPartnerships",
    label: (
      <Text font="h4" as="h3" fontWeight="bold">
        <FormattedMessage id="resources_faq_costAndPartnerships_title" />
      </Text>
    ),
    Component: <CostAndPartnerships />,
  },
  {
    id: "featuresAndCapabilities",
    label: (
      <Text font="h4" as="h3" fontWeight="bold">
        <FormattedMessage id="resources_faq_featuresAndCapabilities_title" />
      </Text>
    ),
    Component: <FeaturesAndCapabilities />,
  },
  {
    id: "accountAndRegistration",
    label: (
      <Text font="h4" as="h3" fontWeight="bold">
        <FormattedMessage id="resources_faq_accountAndRegistration_title" />
      </Text>
    ),
    Component: <AccountAndRegistration />,
  },
]
