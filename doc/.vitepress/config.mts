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
    logo: '/image/logo-sub.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/quick-start' },
    ],

    sidebar: [
      {
        text: '快速上手',
        link: '/quick-start'
      },
      {
        text: '函数',
        items: [
          {
            text: 'Number',
            items: [
              {
                text: 'floatAdd 浮点相加',
                link: '/function/number/floatAdd',
              },
              {
                text: 'safeCalc 安全计算',
                link: '/function/number/safeCalc',
              },
              {
                text: 'countDecimals 计算小数位数',
                link: '/function/number/countDecimals',
              },
            ]
          },
        ]
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
