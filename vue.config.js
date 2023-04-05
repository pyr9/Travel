const {defineConfig} = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
    transpileDependencies: true,
    chainWebpack: (config) => {
        config.resolve.alias
            .set('styles', path.join(__dirname, './src/assets/styles'))
            .set('@', path.join(__dirname, './src/'))
            .set('common', path.join(__dirname, './src/common/'))

    },
    devServer: {
        proxy: {
            '/api': {
                pathRewrite: {
                    '^/api': '/mock'
                },
                target: 'http://localhost:8080',
            },
        }
    }
})
