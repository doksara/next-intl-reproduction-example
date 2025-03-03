import { getRequestConfig } from "next-intl/server"

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
    defaultTranslationValues: {
      email: (chunks) => (
        <a href={`mailto: ${chunks}`} style={{ textDecoration: "underline" }}>
          {chunks}
        </a>
      ),
    },
  }
})
