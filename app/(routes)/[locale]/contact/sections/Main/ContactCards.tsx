import { FormattedMessage } from "@/components/FormattedMessage"
import { Grid, GridItem } from "@/styled-system/jsx"
import { ContactCard } from "./ContactCard"
import { cards } from "./content"

export const ContactCards = () => {
  return (
    <Grid
      columns={[1, 2]}
      gap={["40px", "24px"]}
      pb={["112px", "112px", "160px"]}
      maxW={["100%", "1064px"]}
    >
      {cards.map((t) => (
        <GridItem key={t.departmentKey}>
          <ContactCard
            department={<FormattedMessage id={t.departmentKey} />}
            email={t.email}
          />
        </GridItem>
      ))}
    </Grid>
  )
}
