import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const mapLocaleToTranslation: Record<string, string> = {
  en: 'eng',
  br: 'pt-br',
  es: 'esp',
  it: 'ita',
  fr: 'fra',
};

export const routing = defineRouting({
  // Include locale prefix only for non-default values
  localePrefix: 'as-needed',

  // A list of all locales that are supported
  locales: ['en', 'br', 'it', 'es', 'fr'],

  // Used when no locale matches
  defaultLocale: 'en',
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
