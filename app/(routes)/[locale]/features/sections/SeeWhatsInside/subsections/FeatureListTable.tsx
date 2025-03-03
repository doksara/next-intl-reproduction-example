import { Text } from "@/components/Text"
import { FormattedMessage } from "@/components/FormattedMessage"
import { VStack, Divider, HStack, Box } from "@/styled-system/jsx"
import { features } from "./content"
import { Fragment } from "react"

interface FeatureListTableProps {
  activeIndex: number
  onPickFeature: (index: number) => void
  shouldAnimate: boolean
}

export const FeatureListTable = ({
  activeIndex,
  onPickFeature,
  shouldAnimate,
}: FeatureListTableProps) => {
  return (
    <VStack
      alignItems="flex-start"
      justifyContent="center"
      w="100%"
      h="100%"
      maxW="826px"
      gap="0px"
    >
      {features.map(({ translationKey }, _index) => (
        <Fragment key={translationKey}>
          {_index === 0 && (
            <Divider
              orientation="horizontal"
              borderColor="rgba(18, 18, 18, 0.50)"
            />
          )}

          <HStack
            gap="92px"
            className="group"
            py="12px"
            onMouseEnter={() => onPickFeature(_index)}
          >
            <Box
              position="relative"
              w="20px"
              h="20px"
              background="rgba(18, 18, 18, 0.5)"
              _before={{
                content: _index === activeIndex ? "''" : undefined,
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                display: "block",
                background: "grey",
                animation: "grow 1s linear forwards",
              }}
              _groupHover={{
                _before: {
                  animation: "none",
                  width: "100%",
                },
              }}
            />
            <Box
              opacity={activeIndex === _index ? "1" : "0.5"}
              transition={shouldAnimate ? "opacity 1s linear" : "none"}
            >
              <Text font="h4" as="h3">
                <FormattedMessage id={translationKey} />
              </Text>
            </Box>
          </HStack>

          <Divider
            orientation="horizontal"
            borderColor="rgba(18, 18, 18, 0.50)"
          />
        </Fragment>
      ))}
    </VStack>
  )
}
