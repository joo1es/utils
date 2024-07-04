import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/utils/',
  lang: 'zh-CN',
  title: "@oasis-end/utils",
  description: "The end of the oasis is still an oasis.",
  head: [
    ['link', { rel: 'icon',type: "image/png", href: '/utils/image/logo-sub.png' }]
  ],
  themeConfig: {
    logo: '/utils/image/logo-sub.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/quick-start' }
    ],

    sidebar: [
      {
        text: '快速上手',
        link: '/quick-start'
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/joo1es/utils' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present'
    }
  }
})
