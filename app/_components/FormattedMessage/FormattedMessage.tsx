import {
  Formats,
  RichTranslationValues,
  TranslationValues,
  useTranslations,
} from "next-intl"
import { ReactNode } from "react"

interface FormattedMessageProps {
  id: string
  values?: TranslationValues | RichTranslationValues
  formats?: Partial<Formats>
  rich?: boolean
}

const chunksValues: RichTranslationValues = {
  a: (chunks: ReactNode) => (
    <a
      href={chunks as string}
      style={{ textDecoration: "underline" }}
      rel="noopener noreferrer"
      target="_blank"
    >
      {chunks}
    </a>
  ),
  b: (chunks: ReactNode) => <b>{chunks}</b>,
  email: (chunks: ReactNode) => (
    <a href={`mailto: ${chunks}`} style={{ textDecoration: "underline" }}>
      {chunks}
    </a>
  ),
  disableCookiesLink: (chunks: ReactNode) => (
    <a
      href="https://allaboutcookies.org/how-to-manage-cookies"
      rel="noopener noreferrer"
      target="_blank"
      style={{ textDecoration: "underline" }}
    >
      {chunks}
    </a>
  ),
  litLink: (chunks: ReactNode) => (
    <a
      href="https://business.linkedin.com/marketing-solutions/insight-tag"
      rel="noopener noreferrer"
      target="_blank"
      style={{ textDecoration: "underline" }}
    >
      {chunks}
    </a>
  ),
  mpLink: (chunks: ReactNode) => (
    <a
      href="https://www.facebook.com/business/tools/meta-pixel"
      rel="noopener noreferrer"
      target="_blank"
      style={{ textDecoration: "underline" }}
    >
      {chunks}
    </a>
  ),
  gaLink: (chunks: ReactNode) => (
    <a
      href="https://marketingplatform.google.com/about/analytics/"
      rel="noopener noreferrer"
      target="_blank"
      style={{ textDecoration: "underline" }}
    >
      {chunks}
    </a>
  ),
  gcLink: (chunks: ReactNode) => (
    <a
      href="https://policies.google.com/technologies/cookies?hl=hr-HR"
      rel="noopener noreferrer"
      target="_blank"
      style={{ textDecoration: "underline" }}
    >
      {chunks}
    </a>
  ),
  adsLink: (chunks: ReactNode) => (
    <a
      href="https://myadcenter.google.com/home?hl=hr&sasb=true&ref=ad-settings"
      rel="noopener noreferrer"
      target="_blank"
      style={{ textDecoration: "underline" }}
    >
      {chunks}
    </a>
  ),
}

export const FormattedMessage = ({
  id,
  values = chunksValues,
  formats,
  rich,
}: FormattedMessageProps) => {
  const t = useTranslations()

  if (rich) {
    return t.rich(id, values, formats)
  }

  return t(id, values as TranslationValues, formats)
}
