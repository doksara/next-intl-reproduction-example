import { Metadata } from "next"
import { Main } from "./sections/Main"
import { setRequestLocale } from "next-intl/server"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Need technical support? Want to get in touch with our PR team? Get all the info you need on our contact page.",
  metadataBase: new URL("https://editor.sofascore.com/contact"),
  alternates: {
    canonical: ".",
  },
}

export default function Contact({
  params: { locale },
}: {
  params: { locale: string }
}) {
  setRequestLocale(locale)

  return (
    <main>
      <Main />
    </main>
  )
}
