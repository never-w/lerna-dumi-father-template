import type WebpackChain from 'webpack-chain'
import { defineConfig } from 'dumi'

const repo = 'hooks'

export default defineConfig({
  chainWebpack(memo: WebpackChain) {
    memo.plugins.delete('copy')
  },
  title: 'Fruits Chain Hooks',
  mode: 'site',
  outputPath: 'docs-dist',
  hash: true,
  favicon: 'https://avatars.githubusercontent.com/u/74942048?s=200&v=4',
  logo: 'https://avatars.githubusercontent.com/u/74942048?s=200&v=4',
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
  exportStatic: {}, // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/hjfruit/hooks',
    },
  ],
})
