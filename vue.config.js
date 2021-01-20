const webpack = require('webpack')

const developer = 'Brandon Lee'
const realName = 'Dokyeom Lee'
const email = 'lovefinance@naver.com'
const github = 'https://github.com/Developer-Brandon?tab=repositories'

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/scss/whole_style.scss";
        `,
      },
    },
  },
  configureWebpack: {
    plugins: [
      new webpack.BannerPlugin({
        banner:
     `Developer: ${developer} (${realName})\n
         Email: ${email}\n
         Github: ${github}\n`,
      }),
    ],
  },
}
