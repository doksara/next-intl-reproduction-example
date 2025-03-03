import { routing } from '@/i18n/routing';
import { PropsWithChildren } from 'react';
import { setRequestLocale, getMessages } from 'next-intl/server';

import { NextIntlClientProvider } from 'next-intl';

import { ScrollDirectionProvider } from '@/providers/ScrollProvider';
import { Header } from '@/layout/Header';

import '@/styles/index.css';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: PropsWithChildren & { params: Promise<{ locale: string }> }) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <div id="portals" />
        <NextIntlClientProvider messages={messages}>
          <ScrollDirectionProvider>
            <Header locale={locale} />
            {children}
          </ScrollDirectionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
