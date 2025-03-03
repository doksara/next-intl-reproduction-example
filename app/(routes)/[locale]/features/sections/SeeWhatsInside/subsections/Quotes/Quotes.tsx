import { IconHugeQuote } from "@/components/Icons"
import { Box, Container, HStack } from "@/styled-system/jsx"
import { QuoteCard } from "./QuoteCard"
import { quotes } from "./content"

export const Quotes = () => {
  return (
    <Box background="stone" color="grey">
      <Container py={["96px", "96px", "144px"]}>
        <HStack
          flexDirection={["column", "column", "column", "row"]}
          alignItems={["flex-start", "flex-start", "flex-start", "center"]}
        >
          <Box alignSelf="flex-start">
            <IconHugeQuote />
          </Box>

          <HStack
            flexDirection={["column", "row", "row", "row"]}
            mt={["96px", "96px", "96px", "0px"]}
            ml={["0px", "0px", "0px", "160px"]}
            gap={["96px", "24px"]}
            alignItems="flex-end"
          >
            {quotes.map((quote, index) => (
              <QuoteCard key={index} {...quote} />
            ))}
          </HStack>
        </HStack>
      </Container>
    </Box>
  )
}
