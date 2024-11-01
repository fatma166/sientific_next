import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { LocaleCode } from "./services/types";
import clientApi from "./services/api/clientApi";

export const locales: LocaleCode[] = ['en', 'ar'];
export const defaultLocale = 'ar';

export default getRequestConfig(async ({ locale }) => {
  // Validate the locale; if not valid, return a 404
  if (!locales.includes(locale as LocaleCode)) {
    notFound();
  }

  // Set the Accept-Language header
  clientApi.defaults.headers.common['Accept-Language'] = locale || defaultLocale;

  // Load the messages for the given locale
  const messages = (await import(`../messages/${locale}.json`)).default;

  // Return the messages without the locale if you're consistently using the provided locale
  return {
    messages,
  };
});
