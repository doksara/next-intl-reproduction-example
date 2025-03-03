import { Container, Stack, Box, Grid, GridItem } from "@/styled-system/jsx"
import { Text } from "@/components/Text"
import { BusinessDeveloper } from "./BusinessDeveloper"
import { bds } from "./content"
import {
  FormattedMessage,
  UnderlinedFormattedMessage,
} from "@/components/FormattedMessage"

export const BusinessDevelopment = () => {
  return (
    <Container>
      <Stack
        pt={["112px", "112px", "160px"]}
        pb={["80px", "80px", "160px"]}
        flexDirection={["column", "column", "row"]}
        alignItems={["flex-start", "flex-start", "center", "center"]}
        gap="32px"
      >
        <Box w={["auto", "auto", "50%"]}>
          <Box maxW="430px" w="100%">
            <Text font="h1" as="h2">
              <UnderlinedFormattedMessage
                id="about_meetOurSquad_title"
                underlineColor="blueAccent"
              />
            </Text>
          </Box>
        </Box>
        <Box w={["auto", "auto", "50%"]}>
          <Box maxW="520px" w="100%">
            <Text font="p1">
              <FormattedMessage id="about_meetOurSquad_text" />
            </Text>
          </Box>
        </Box>
      </Stack>
      <Stack
        flexDirection={["column", "column", "column", "row"]}
        alignItems={["flex-start", "flex-start", "flex-start", "center"]}
        pb={["112px", "112px", "178px"]}
        gap={["80px", "80px", "80px", "24px"]}
      >
        <Text font="h2" indicatorColor="grey">
          <FormattedMessage id="about_meetOurSquad_businessDevelopment" />
        </Text>

        <Grid columns={[1, 2]} gap="24px" w="100%" maxW="792px">
          {bds.map((bd) => (
            <GridItem key={bd.email}>
              <BusinessDeveloper {...bd} />
            </GridItem>
          ))}
          <GridItem></GridItem>
        </Grid>
      </Stack>
    </Container>
  )
}
