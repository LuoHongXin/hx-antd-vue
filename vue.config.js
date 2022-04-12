const path = require('path');
const { modifyVars } = require('./src/antdVars');
const { baseURL } = require('./examples/config');
const TimePlugin = require('./TimePlugin');

// const { themeColorReplacer, getThemeColors, resolveCss } = require('./src/theme');
// const posicJoin = _path => path.posix.join('static', _path);
// const utils = require('./build/utils');
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// function resolve(dir) {
//   return path.join(__dirname, dir);
// }
module.exports = {
  publicPath: './',
  devServer: {
    overlay: {
      warnings: false,
      errors: true,
    },
    proxy: {
      '/api': {
        target: baseURL,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: modifyVars(),
      },
    },
  },
  // entry: ENV === 'development' ? path.resolve(__dirname, './examples/main.js') : path.resolve(__dirname, './packages/index.js'),
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  // assetsDir: assetsPath,
  // // 为了实现npm包、script标签等引入形式
  // output: {
  //   path: path.resolve(__dirname, './lib'),
  //   publicPath: '/dist/',
  //   filename: '[name].js',
  //   libraryTarget: 'commonjs2',
  //   libraryExport: 'default',
  //   library: 'hx-antd-vue',
  // },
  // externals: {
  //   vue: 'vue',
  // },
  // 修改 pages 入口
  pages: {
    index: {
      entry: 'examples/main.js', // 入口
      template: 'public/index.html', // 模板
      filename: 'index.html', // 输出文件
    },
  },
  parallel: false,
  configureWebpack: () => {
    return {
      plugins: [new TimePlugin()],
    };
  },
  // if (ENV === 'development') {
  //   config.entry = {
  //     app: './examples/main.js',
  //   };
  // } else {
  //   config.entry = {
  //     ...utils.getComponentEntries('packages'),
  //   };
  // }
  // },
  // 扩展 webpack 配置
  chainWebpack: config => {
    // @ 默认指向 src 目录，这里要改成 examples
    // 另外也可以新增一个 ~ 指向 packages
    config.resolve.alias
      .set('@', path.resolve('examples'))
      .set('~', path.resolve('packages'))
      .set('@src', path.resolve('src'))
      .set('hx-antd-vue', path.resolve('packages/index'));

    // 把 packages 和 examples 加入编译，因为新增的文件默认是不被 webpack 处理的
    config.module
      .rule('js')
      .include.add(/packages/)
      .end()
      .include.add(/examples/)
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options;
      });
    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(path.join(__dirname, './src/icons'))
      .end();
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(path.join(__dirname, './src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
      .end();
  },
  pluginOptions: {
    // 引入全局less变量的方式
    'style-resources-loader': {
      preProcessor: 'less',
      // 这个是加上自己的路径，
      // 注意：试过不能使用别名路径
      patterns: [path.resolve(__dirname, './src/styles/variables/index.less')],
    },
  },
};
