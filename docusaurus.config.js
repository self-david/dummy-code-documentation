/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const theme = require('./src/theme/theme');

/** @returns {Promise<import('@docusaurus/types').Config>} */
module.exports = async function createConfigAsync() {
  return {
    title: 'Docusaurus',
    tagline: 'Ahora puedes programar en español',
    organizationName: 'self-david',
    projectName: 'dummy-code-documentation',
    baseUrl: '/',
    baseUrlIssueBanner: true,
    url: 'https://self-david.github.io/',

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/docusaurus.ico',
    customFields: {
      crashTest: false,
      isDeployPreview: false,
      description: 'An optimized site generator in React. Docusaurus helps you to move fast and write content. Build documentation websites, blogs, marketing pages, and more.',
    },
    plugins: [
      [
        'content-docs',
        /** @type {import('@docusaurus/plugin-content-docs').Options} */
        ({
          id: 'errors',
          path: 'errors',
          routeBasePath: 'errors',
          // remarkPlugins: [npm2yarn],
          editCurrentVersion: false,
          sidebarPath: require.resolve('./sidebars.js'),
          // showLastUpdateAuthor: true,
          // showLastUpdateTime: true,
        }),
      ],
    ],
    presets: [
      [
        'classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve('./sidebars.js'),
            // Please change this to your repo.
            // Remove this to remove the "edit this page" links.
            editUrl: 'https://github.com/self-david/dummy-code-documentation/tree/main/',
            routeBasePath: '/methods',
            // routeBasePath: '/',
            // path: 'docs',
            // sidebarPath: 'sidebars.js',
            admonitions: {
              keywords: ['my-custom-admonition'],
            },
            showLastUpdateAuthor: true,
            showLastUpdateTime: true,
          },
          blog: {
            showReadingTime: true,
            // Please change this to your repo.
            // Remove this to remove the "edit this page" links.
            editUrl: 'https://github.com/self-david/dummy-code-documentation/tree/main/',

            postsPerPage: 5,
            blogSidebarCount: 'ALL',
            blogSidebarTitle: 'All our posts',
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Dummy Code',
        logo: {
          alt: 'My Meta Project Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Metodos',
          },
          {
            to: '/errors',
            label: 'Errores',
            position: 'left',
            activeBaseRegex: `/errors/`,
            // sidebarId: 'tutorialSidebar',
          },
          {to: 'blog', label: 'Blog', position: 'left'},
          // Please keep GitHub link to the right for consistency.
          {
            href: 'https://github.com/self-david/dummy-code-documentation',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Learn',
            items: [
              {
                label: 'Style Guide',
                to: 'docs/',
              },
              {
                label: 'Second Doc',
                to: 'docs/doc2',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
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
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
          {
            title: 'Legal',
            // Please do not remove the privacy and terms, it's a legal requirement.
            items: [
              {
                label: 'Privacy',
                href: 'https://opensource.fb.com/legal/privacy/',
              },
              {
                label: 'Terms',
                href: 'https://opensource.fb.com/legal/terms/',
              },
              {
                label: 'Data Policy',
                href: 'https://opensource.fb.com/legal/data-policy/',
              },
              {
                label: 'Cookie Policy',
                href: 'https://opensource.fb.com/legal/cookie-policy/',
              },
            ],
          },
        ],
        logo: {
          alt: 'Dummy code Logo',
          // This default includes a positive & negative version, allowing for
          // appropriate use depending on your site's style.
          src: '/img/meta_opensource_logo_negative.svg',
          href: 'https://dummycode.qahub.dev',
        },
        // Please do not remove the credits, help to publicize Docusaurus :)
        copyright: 'Copyright © 2023 Dummy code.',
      },
      prism: {
        theme,
      },
    }),
  };
};