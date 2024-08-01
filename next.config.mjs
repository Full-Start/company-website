import { i18n, localePath } from './next-i18next.config.mjs'; 

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'www.ca-decor.com',
      'picsum.photos',
      'fastly.4sqi.net',
    ],
  },
  i18n: {
    defaultLocale: i18n.defaultLocale,
    locales: i18n.locales,
  },
};

export default nextConfig;
