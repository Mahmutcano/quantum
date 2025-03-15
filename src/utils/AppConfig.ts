import { LocalePrefixMode } from "next-intl/routing";

const localePrefix: LocalePrefixMode = 'as-needed';

// FIXME: Update this configuration file based on your project information
export const AppConfig = {
  name: 'Nextjs Starter',
  locales: ['en', 'tr', 'ar', 'hu'],
  defaultLocale: 'en',
  localePrefix,
};