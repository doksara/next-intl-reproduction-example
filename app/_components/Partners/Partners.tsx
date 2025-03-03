import { Box, Container, Stack } from "@/styled-system/jsx"
import { Text } from "@/components/Text"
import { BetterMaybeMarquee } from "@/components/Marquee"
import {
  IconPartnerBasqueteBrasil,
  IconPartnerFcf,
  IconPartnerFutsalPro,
  IconPartnerHssg,
  IconPartnerKutijaSibica,
  IconPartnerNff,
  IconPartnerSuperCopa,
} from "@/components/Icons"
import { IconPartnerVdg } from "@/components/Icons/IconPartnerVdg"
import { FormattedMessage } from "@/components/FormattedMessage"

export const Partners = () => {
  return (
    <Container px={[0, 0, 0, 0, 0, "60px"]}>
      <Stack
        color="stone"
        flexDirection={[
          "column",
          "column",
          "column",
          "column",
          "column",
          "row",
        ]}
        alignItems="center"
        justifyContent="space-between"
        py={["48px", "48px", "48px", "48px", "48px", "24px"]}
        gap="48px"
      >
        <Box px={["20px", undefined]}>
          <Text font="mono">
            <FormattedMessage id="homepage_nextLevel_partnersText" />
          </Text>
        </Box>
        <Box maxW={["992px", "992px", "780px", "780px"]} w="100%">
          <BetterMaybeMarquee marqueeAboveBreakpoint={992}>
            <IconPartnerFcf width={80} height={80} />
            <IconPartnerFutsalPro width={80} height={80} />
            <IconPartnerVdg width={80} height={80} />
            <IconPartnerBasqueteBrasil width={80} height={80} />
            <IconPartnerHssg width={80} height={80} />
            <IconPartnerKutijaSibica width={80} height={80} />
            <IconPartnerSuperCopa width={80} height={80} />
            <IconPartnerNff width={80} height={80} />
          </BetterMaybeMarquee>
        </Box>
      </Stack>
    </Container>
  )
}
