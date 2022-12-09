const { defineConfig } = require('@vue/cli-service')

const path = require('path')

const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        view: '@/view',
        router: '@/router',
        components: '@/components',
        assets: '@/assets'
      }
    },
    devServer: {
      proxy: {
        '/api': {
          target: 'http://152.136.185.210:4000',
          pathRewrite: {
            '^api': ''
          },
          changeOrigin: true
        }
      }
    }
  },
  outputDir: 'build',
  publicPath: './',
  assetsDir: 'static'
})
