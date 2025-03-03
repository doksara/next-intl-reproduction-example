import { Metadata } from 'next';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { Header } from '@/layout/Header';
import { NextIntlClientProvider } from 'next-intl';
import { ScrollDirectionProvider } from '@/providers/ScrollProvider';

export const metadata: Metadata = {
  title: 'Page not found | Sofascore Editor',
};

export default async function NotFound() {
  setRequestLocale('en');

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang="en">
      <body>
        <div id="portals" />
        <NextIntlClientProvider messages={messages}>
          <ScrollDirectionProvider>Page not found</ScrollDirectionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
