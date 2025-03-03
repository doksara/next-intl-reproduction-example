import { Metadata } from "next"
import { PowerOfData } from "./sections/PowerOfData"
import { MeetOurSquad } from "./sections/MeetOurSquad/MeetOurSquad"
import { setRequestLocale } from "next-intl/server"

export const metadata: Metadata = {
  title: "About Sofascore Editor",
  description:
    "Learn more about the story and the people behind Sofacore Editor. See how their passion drove them to create the leading team and league management software on the market.",
  metadataBase: new URL("https://editor.sofascore.com/about"),
  alternates: {
    canonical: ".",
  },
}

export default function About({
  params: { locale },
}: {
  params: { locale: string }
}) {
  setRequestLocale(locale)

  return (
    <main>
      <PowerOfData />
      <MeetOurSquad />
    </main>
  )
}
