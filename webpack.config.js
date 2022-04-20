const path = require('path') 
module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js', 
  output: {
    path: path.resolve(__dirname, './dist/js'), 
    filename: 'index.bundle.js'
  },
  module: {
    rules: [
      // 配置 babel-loader (第一步)
      {
        test: /\.m?js$/,
        // 排除 node_modules 與 bower_components 底下資料 (第二步)
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            // 配置 Babel 解析器 (第三步)
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm-bundler.js'
    },
  },
}