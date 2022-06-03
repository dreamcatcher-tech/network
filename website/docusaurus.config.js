const remarkPlugins = [
  require('mdx-mermaid'),
  { mermaid: { theme: { light: 'neutral', dark: 'forest' } } },
]

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
          to: 'docs/overview/',
          activeBasePath: 'overview',
          label: 'Overview',
          position: 'left',
        },
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'dust/',
          activeBasePath: 'dust',
          label: 'Dust',
          position: 'left',
        },
        {
          to: 'tech/',
          activeBasePath: 'tech',
          label: 'Interblock',
          position: 'left',
        },
        {
          to: 'pool/',
          activeBasePath: 'pool',
          label: 'Pool',
          position: 'left',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          label: 'Apps',
          to: 'store',
          position: 'right',
        },
        {
          label: 'Benchmarks',
          href: 'https://dreamcatcher-tech.github.io/dreamcatcher-stack/dev/bench',
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
              label: 'YouTube',
              href: 'https://www.youtube.com/channel/UCysqnESDAhA0NzfbS1GI9YQ/videos',
            },
            // {
            //   label: 'Twitter',
            //   href: 'https://twitter.com/dreamcatcher-tech',
            // },
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
          editUrl:
            'https://github.com/dreamcatcher-tech/dreamcatcher-tech.github.io/edit/master/website/',
          remarkPlugins,
        },
        blog: {
          showReadingTime: true,
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
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'tech',
        path: 'tech',
        routeBasePath: 'tech',
        sidebarPath: require.resolve('./sidebarsTech.js'),
        editUrl:
          'https://github.com/dreamcatcher-tech/dreamcatcher-tech.github.io/edit/master/website/',
        remarkPlugins,
        sidebarCollapsed: false,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'dust',
        path: 'dust',
        routeBasePath: 'dust',
        sidebarPath: require.resolve('./sidebarsDust.js'),
        editUrl:
          'https://github.com/dreamcatcher-tech/dreamcatcher-tech.github.io/edit/master/website/',
        remarkPlugins,
        sidebarCollapsed: false,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'pool',
        path: 'pool',
        routeBasePath: 'pool',
        sidebarPath: require.resolve('./sidebarsPool.js'),
        editUrl:
          'https://github.com/dreamcatcher-tech/dreamcatcher-tech.github.io/edit/master/website/',
        remarkPlugins,
        sidebarCollapsed: false,
      },
    ],
  ],
}
