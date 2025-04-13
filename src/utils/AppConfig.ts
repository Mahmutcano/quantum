import { LocalePrefixMode } from "next-intl/routing";

export const AppConfig = {
  name: 'YourApp',
  locales: ['en', 'tr', 'ar', 'hu'],
  defaultLocale: 'en',
  localePrefix: 'always' as LocalePrefixMode // ✅ BU ÇOK ÖNEMLİ!
};
