module.exports = {
  title: 'Dreamcatcher',
  tagline: 'A Perpetual Invention Machine',
  url: 'https://dreamcatcher.land',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'dreamcatcher-tech', // Usually your GitHub org/user name.
  projectName: 'dreamcatcher-tech', // do not add .github.io else will publish to master
  themeConfig: {
    navbar: {
      title: 'Dreamcatcher',
      logo: {
        alt: 'Dreamcatcher',
        src: 'img/dreamcatcher.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        // {
        //   label: 'API',
        //   type: 'doc',
        //   docId: 'Tweets',
        // },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          label: 'Apps',
          to: 'store',
          position: 'right',
        },
        {
          label: 'Benchmarks',
          to: 'https://dreamcatcher-tech.github.io/dreamcatcher-stack/dev/bench',
          position: 'right',
        },
        {
          label: 'Contributing',
          to: 'contributing',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'White Papers',
              to: 'docs/',
            },
            {
              label: 'Contributing',
              to: 'contributing/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/dreamcatcher-tech',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/dreamcatcher-tech',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/dreamcatcher-tech/dreamcatcher-tech.github.io',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Dreamcatcher.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/dreamcatcher-tech/dreamcatcher-tech.github.io/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/dreamcatcher-tech/dreamcatcher-tech.github.io/edit/master/website/',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}
