import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  locales: {
    '/': {
      lang: 'en-US',
      title: 'NasCore',
      description: 'Deploy with agility, expand with precision.',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'NasCore',
      description: '敏捷部署，精准扩展。',
    },
  },

  theme: defaultTheme({
    logo: '/logo.webp',
    locales: {
      '/': {
        navbar: [
          { text: 'Home', link: '/' },
          { text: 'Docs', link: '/docs/' },
          { text: 'Download', link: '/download' },
          { text: 'Community', link: '/community' },
          { text: 'GitHub', link: 'http://github.com/nas-core' },
        ],
        selectLanguageText: 'Languages',
        selectLanguageName: 'English',
        selectLanguageAriaLabel: 'Select language',
      },
      '/zh/': {
        navbar: [
          { text: '首页', link: '/zh/' },
          { text: '文档', link: '/zh/docs/' },
          { text: '下载', link: '/zh/download' },
          { text: '社区', link: '/zh/community' },
          { text: 'GitHub', link: 'http://github.com/nas-core' },
        ],
        selectLanguageText: '选择语言',
        selectLanguageName: '简体中文',
        selectLanguageAriaLabel: '选择语言',
      },
    },
  }),

  bundler: viteBundler(),
})
