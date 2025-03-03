import { Metadata } from "next"
import { SofascoreEditor } from "./sections/SofascoreEditor"
import { SeeWhatsInside } from "./sections/SeeWhatsInside"
import { setRequestLocale } from "next-intl/server"

export const metadata: Metadata = {
  title: "Sofascore Editor Features ",
  description:
    "Discover all features of Sofascore Editor - league fixtures, team schedules, tournament organization and many more. ",
  metadataBase: new URL("https://editor.sofascore.com/features"),
  alternates: {
    canonical: ".",
  },
}

export default function Features({
  params: { locale },
}: {
  params: { locale: string }
}) {
  setRequestLocale(locale)

  return (
    <main>
      <SofascoreEditor />
      <SeeWhatsInside />
    </main>
  )
}
