import { Metadata } from "next"
import { Introduction } from "./sections/Introduction/Introduction"
import { WhoIsSofascoreEditorFor } from "./sections/WhoIsSofascoreEditorFor"
import { AppFeatures } from "./sections/AppFeatures"
import { NextLevel } from "./sections/NextLevel"
import { Testimonials } from "./sections/Testimonials"
import { setRequestLocale } from "next-intl/server"

export const metadata: Metadata = {
  title: "Sofascore Editor - League and Tournament Management Software",
  description:
    "Sofascore Editor is the most advanced tournament software in the game that simplifies sports management and displays your inputs to over 25 million users.",
  metadataBase: new URL("https://editor.sofascore.com"),
  alternates: {
    canonical: ".",
  },
}

export default function Home({
  params: { locale },
}: {
  params: { locale: string }
}) {
  setRequestLocale(locale)

  return (
    <main>
      <Introduction />
      <WhoIsSofascoreEditorFor />
      <AppFeatures />
      <NextLevel />
      <Testimonials />
    </main>
  )
}
