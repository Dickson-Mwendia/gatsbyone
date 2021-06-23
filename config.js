const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://mimik.com',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://mimik.com/wp-content/uploads/2020/01/edge-cloud-logo.png',
    logoLink: 'https://mimik.com',
    title:
      "",
    githubUrl: 'https://github.com/mimikgit',
    helpUrl: '',
    tweetText: '',
    social: `<li><div></li>
    <li><div></li>
    <li><div></li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/key-concepts',
      '/tutorials',
      '/api',
      '/faqs',
      '/glossary',
      '/troubleshooting'
    ],
    collapsedNav: [
      '/introduction',
      '/key-concepts',
      '/tutorials',
      '/api',
      '/faqs'
    ],
    links: [{ text: 'mimik', link: 'https://mimik.com' }],
    frontline: false,
    ignoreIndex: true,
    title:
      "mimik Developer Documentation",
  },
  siteMetadata: {
    title: 'mimik Developer Portal | mimik',
    description: 'Documentation built with mdx. Powering mimik.com ',
    ogImage: null,
    docsLocation: '',
    favicon: 'src/components/images/mimik.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'mimik Developer Portal',
      short_name: 'mimikDeveloper',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
