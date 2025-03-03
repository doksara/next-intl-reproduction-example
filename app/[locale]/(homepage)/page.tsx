import { setRequestLocale } from 'next-intl/server';

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);

  return <main>Home Page</main>;
}
