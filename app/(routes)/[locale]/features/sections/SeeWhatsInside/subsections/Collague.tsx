import { Container, Grid, GridItem } from "@/styled-system/jsx"
import {
  IconEdit,
  IconHeadphones,
  IconNote,
  IconTeam,
  IconWidgets,
} from "@/components/Icons"
import Image from "next/image"
import { CollagueCard } from "./CollagueCard"
import { css } from "@/styled-system/css"

export const Collague = () => {
  return (
    <Container py={["96px", "96px", "144px"]}>
      <Grid columns={[1, 2, 2, 3]} gap={["20px", "20px", "24px"]}>
        <GridItem display={["none", "none", "none", "block"]}></GridItem>

        <GridItem>
          <CollagueCard
            titleId="features_seeWhatsInside_rolesAndPermissions_title"
            descriptionId="features_seeWhatsInside_rolesAndPermissions_description"
            listItems={[
              "features_seeWhatsInside_rolesAndPermissions_item1",
              "features_seeWhatsInside_rolesAndPermissions_item2",
              "features_seeWhatsInside_rolesAndPermissions_item3",
            ]}
            Icon={
              <IconTeam
                width={80}
                height={80}
                className={css({
                  width: { base: "54px", sm: "80px" },
                  height: { base: "54px", sm: "80px" },
                })}
              />
            }
          />
        </GridItem>

        <GridItem position="relative" h={["480px", "auto"]}>
          <Image
            src="/images/features-seewhatsinside-collague-football.webp"
            alt="Football"
            fill
            style={{ objectFit: "cover" }}
          />
        </GridItem>

        <GridItem>
          <CollagueCard
            titleId="features_seeWhatsInside_matchReports_title"
            descriptionId="features_seeWhatsInside_matchReports_description"
            listItems={[
              "features_seeWhatsInside_matchReports_item1",
              "features_seeWhatsInside_matchReports_item2",
              "features_seeWhatsInside_matchReports_item3",
              "features_seeWhatsInside_matchReports_item4",
            ]}
            Icon={
              <IconNote
                width={80}
                height={80}
                className={css({
                  width: { base: "54px", sm: "80px" },
                  height: { base: "54px", sm: "80px" },
                })}
              />
            }
          />
        </GridItem>

        <GridItem position="relative" h={["480px", "auto"]}>
          <Image
            src="/images/features-seewhatsinside-collague-rugby.webp"
            alt="Football"
            fill
            style={{ objectFit: "cover" }}
          />
        </GridItem>

        <GridItem>
          <CollagueCard
            titleId="features_seeWhatsInside_suspensionManagement_title"
            descriptionId="features_seeWhatsInside_suspensionManagement_description"
            listItems={[
              "features_seeWhatsInside_suspensionManagement_item1",
              "features_seeWhatsInside_suspensionManagement_item2",
              "features_seeWhatsInside_suspensionManagement_item3",
            ]}
            Icon={
              <IconEdit
                width={80}
                height={80}
                className={css({
                  width: { base: "54px", sm: "80px" },
                  height: { base: "54px", sm: "80px" },
                })}
              />
            }
          />
        </GridItem>

        <GridItem>
          <CollagueCard
            titleId="features_seeWhatsInside_liveWidgets_title"
            descriptionId="features_seeWhatsInside_liveWidgets_description"
            listItems={[
              "features_seeWhatsInside_liveWidgets_item1",
              "features_seeWhatsInside_liveWidgets_item2",
              "features_seeWhatsInside_liveWidgets_item3",
            ]}
            Icon={
              <IconWidgets
                width={80}
                height={80}
                className={css({
                  width: { base: "54px", sm: "80px" },
                  height: { base: "54px", sm: "80px" },
                })}
              />
            }
          />
        </GridItem>

        <GridItem>
          <CollagueCard
            titleId="features_seeWhatsInside_support_title"
            descriptionId="features_seeWhatsInside_support_description"
            listItems={[
              "features_seeWhatsInside_support_item1",
              "features_seeWhatsInside_support_item2",
              "features_seeWhatsInside_support_item3",
            ]}
            Icon={
              <IconHeadphones
                width={80}
                height={80}
                className={css({
                  width: { base: "54px", sm: "80px" },
                  height: { base: "54px", sm: "80px" },
                })}
              />
            }
          />
        </GridItem>

        <GridItem position="relative" h={["480px", "auto"]}>
          <Image
            src="/images/features-seewhatsinside-collague-basketball.webp"
            alt="Football"
            fill
            style={{ objectFit: "cover" }}
          />
        </GridItem>
      </Grid>
    </Container>
  )
}
