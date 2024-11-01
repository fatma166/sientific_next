/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'scientific-thought.com',
  generateRobotsTxt: true, // (optional)
  // ...other options
}