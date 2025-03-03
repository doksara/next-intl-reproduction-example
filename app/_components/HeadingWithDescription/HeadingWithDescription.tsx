import { Container, Stack, VStack, Divider, Box } from "@/styled-system/jsx"
import { Text } from "../Text"

interface HeadingWithDescriptionProps {
  heading: React.ReactNode
  description: React.ReactNode
}

export const HeadingWithDescription = ({
  heading,
  description,
}: HeadingWithDescriptionProps) => {
  return (
    <Container>
      <Stack
        flexDirection={["column", "column", "column", "row", "row"]}
        w="100%"
        justifyContent={[
          "flex-start",
          "flex-start",
          "flex-start",
          "center",
          "center",
        ]}
        alignItems={[
          "flex-start",
          "flex-start",
          "flex-start",
          "center",
          "center",
        ]}
      >
        <VStack
          justifyContent={["center", "center", "flex-start"]}
          h={["316px", "316px", "auto"]}
          pt={["0px", "0px", "176px"]}
          pb={["0px", "0px", "134px"]}
          maxW="792px"
          w="100%"
        >
          <Text font="h1">{heading}</Text>
        </VStack>

        <Divider
          orientation={["horizontal", "horizontal", "vertical", "vertical"]}
          borderColor="rgba(240, 238, 223, 0.30)"
          mx={[undefined, undefined, undefined, "24px"]}
          h={["1px", "1px", "1px", "312px"]}
          w={["164px", "328px", "720px", "1px", "1px", "1px"]}
        />

        <Box
          w={["100%", "720px", "720px", "496px"]}
          mb={["92px", "92px", "92px", "0px"]}
        >
          <Text font="p1">{description}</Text>
        </Box>
      </Stack>
    </Container>
  )
}
