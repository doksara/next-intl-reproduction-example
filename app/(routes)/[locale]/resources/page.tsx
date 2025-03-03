import { Metadata } from "next"
import { AllInOnePlace } from "./sections/AllInOnePlace"
import { FrequentlyAskedQuestions } from "./sections/Faq"
import { VideoTutorials } from "./sections/VideoTutorials"
import { setRequestLocale } from "next-intl/server"

export const metadata: Metadata = {
  title: "FAQ & Additional Resources For Sofascore Editor",
  description:
    "Go over the FAQ, tutorials and other resources for the leading tournament management software. ",
  metadataBase: new URL("https://editor.sofascore.com/resources"),
  alternates: {
    canonical: ".",
  },
}

export default function Resources({
  params: { locale },
}: {
  params: { locale: string }
}) {
  setRequestLocale(locale)

  return (
    <main>
      <AllInOnePlace />
      <FrequentlyAskedQuestions />
      <VideoTutorials locale={locale} />
    </main>
  )
}
