import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  title: 'NasCore',
  description: 'Deploy with agility, expand with precision.',

  theme: defaultTheme({
    logo: '/logo.webp',
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/docs/' },
      { text: 'DownLoad', link: '/download' },
      { text: 'Community', link: '/community' },
      { text: 'github', link: 'http://github.com/nas-core' },
    ],
  }),

  bundler: viteBundler(),
})
