// @ts-check

/**
 * @type {import('vitepress').UserConfig}
 */
const sites = require('./cfg/sites');

module.exports = {
  "lang": "zh-cn",
  outDir: '../docs',
  base: '../',
  title: '个人简历',
  description: 'Try my best, then, let it be.',
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.png' }]],
  themeConfig: {
    repo: '/blog',
    logo: '/logo.png',
    docsDir: 'docs',
    docsBranch: 'main',
    nav: [
      { text: '个人简历', link: '/about/' },
      sites
    ],
  }
}
