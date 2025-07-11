import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',
  title: 'NasCore',
  description: 'Deploy with agility, expand with precision.',

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
          { text: 'GitHub', link: 'http://github.com/nas-core/nascore' },
        ],
        sidebar: {
          '/docs/': [
            {
              text: 'Guide',
              children: [
                '/docs/README.md',
                '/docs/install.md',
                '/docs/nascore_toml.md',
                '/docs/githubproxy.md',
                '/docs/webdav.md',
                '/docs/cdn_and_static.md',
                '/docs/rclone.md',
                '/docs/openlist.md',
                '/docs/caddy2.md',
                '/docs/ddnsgo.md',
                '/docs/lego.md',
                '/docs/nascore_vod.md',
                '/docs/OpenSourceSchedule.md',
              ],
            },
          ],
        },
      },
      '/zh/': {
        navbar: [
          { text: '首页', link: '/zh/' },
          { text: '文档', link: '/zh/docs/' },
          { text: '下载', link: '/zh/download' },
          { text: '社区', link: '/zh/community' },
          { text: 'GitHub', link: 'http://github.com/nas-core/nascore' },
        ],
        sidebar: {
          '/zh/docs/': [
            {
              text: '指南',
              children: [
                '/zh/docs/README.md',
                '/zh/docs/install.md',
                '/zh/docs/nascore_toml.md',
                '/zh/docs/githubproxy.md',
                '/zh/docs/webdav.md',
                '/zh/docs/cdn_and_static.md',
                '/zh/docs/rclone.md',
                '/zh/docs/openlist.md',
                '/zh/docs/caddy2.md',
                '/zh/docs/ddnsgo.md',
                '/zh/docs/lego.md',
                '/zh/docs/nascore_vod.md',
                '/zh/docs/OpenSourceSchedule.md',
              ],
            },
          ],
        },
      },
    },
  }),

  bundler: viteBundler(),
})
