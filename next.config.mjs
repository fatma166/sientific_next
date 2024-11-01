
import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.scientific-thought.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.github.io',
        port: '',
        pathname: '/**',
      }
    ],
  }
};

export default withNextIntl(nextConfig);
