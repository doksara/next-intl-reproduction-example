import { Box, Container } from "@/styled-system/jsx"
import { MobileFeatureList } from "./MobileFeatureList"
import { DesktopFeatureList } from "./DesktopFeatureList"

export const FeatureList = () => {
  return (
    <Box bgColor={["stone", "stone", "blueAccent"]}>
      <Container px={["0px", "0px", "60px"]} id="list">
        <Box py={["0px", "0px", "144px"]}>
          <Box display={["none", "none", "block", "block"]} flexGrow={1}>
            <DesktopFeatureList />
          </Box>

          <Box display={["block", "block", "none", "none"]}>
            <MobileFeatureList />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
