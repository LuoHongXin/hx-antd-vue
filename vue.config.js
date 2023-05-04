const path = require('path');
const { modifyVars } = require('./src/antdVars');
const { baseURL } = require('./examples/config');
const TimePlugin = require('./TimePlugin');
const webpack = require('webpack');
const { themeColorReplacer, getThemeColors, resolveCss } = require('./src/theme');
const posicJoin = _path => path.posix.join('static', _path);
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

// const fs = require('fs');
// const join = path.join;
//  获取基于当前路径的目标文件
// const resolve = dir => path.join(__dirname, './', dir);
// function upperCasetoLine(str) {
//   let first = str.slice(0, 1);
//   if (first === first.toUpperCase()) return str;
//   return 'Y' + first.toUpperCase() + str.slice(1);
//   // let temp = str.replace(/[A-Z]/g, function(match) {
//   //   return '-' + match.toLowerCase();
//   // });
//   // if (temp.slice(0, 1) === '-') {
//   //   temp = temp.slice(1);
//   // }
//   // return temp;
// }
// function getComponentEntries(path) {
//   let files = fs.readdirSync(resolve(path));
//   const componentEntries = files.reduce((fileObj, item) => {
//     //  文件路径
//     const itemPath = join(path, item);
//     //  在文件夹中
//     const isDir = fs.statSync(itemPath).isDirectory();
//     // const [name, suffix] = item.split('.');
//     //  文件中的入口文件
//     if (isDir) {
//       fileObj[upperCasetoLine(item)] = resolve(join(itemPath, 'index.js'));
//     }
//     //  文件夹外的入口文件
//     // else if (suffix === 'js') {
//     //   fileObj[name] = resolve(`${itemPath}`);
//     // }
//     return fileObj;
//   }, {});

//   return componentEntries;
// }
module.exports = {
  publicPath: './',
  productionSourceMap: false,
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
      '/172': {
        target: baseURL,
        changeOrigin: true,
        ws: true,
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
      // entry: 'packages/index.js', // 入口
      // libraryTarget: 'umd',
      // library: 'hx-antd-vue',
      entry: 'examples/main.js', // 入口
      template: 'public/index.html', // 模板
      filename: 'index.html', // 输出文件
    },
  },
  parallel: false,
  // outputDir: process.env.buildLib ? resolve('library') : './',
  configureWebpack: () => {
    const plugins = [
      // new webpack.optimize.ModuleConcatenationPlugin(),
      // 打包moment部分国际化文件而不是全部
      new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en-gb|zh-cn/),
      new TimePlugin(),
      new themeColorReplacer({
        filename: posicJoin('css/theme-colors.[contenthash:8].css'),
        matchColors: getThemeColors(),
        injectCss: true,
        resolveCss,
      }),
    ];
    if (process.env === 'production') plugins.push(new UglifyJSPlugin()); // 压缩js代码
    return {
      //  入口文件
      // entry: getComponentEntries('packages'),
      //  输出配置
      // output: {
      //   //  文件名称
      //   filename: '[name]/index.js',
      //   //  构建依赖类型
      //   libraryTarget: 'umd',
      //   //  库中被导出的项
      //   // libraryExport: 'default',
      //   //  引用时的依赖名
      //   library: 'wh-compoennt',
      //   // globalObject: 'this',
      // },
      // externals: {
      //   vue: {
      //     root: 'Vue',
      //     commonjs2: 'vue',
      //     commonjs: 'vue',
      //     amd: 'vue',
      //   },
      // },
      // 开启js tree shaking
      optimization: {
        usedExports: true,
        minimize: true,
        concatenateModules: true,
      },
      plugins,
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
    if (process.env.analyzer) config.plugin('webpack-bundle-analyzer').use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin);
    // @ 默认指向 src 目录，这里要改成 examples
    // 另外也可以新增一个 ~ 指向 packages
    config.resolve.alias
      .set('@', path.resolve('examples'))
      .set('~', path.resolve('packages'))
      .set('@src', path.resolve('src'))
      .set('hx-antd-vue', path.resolve('packages/index'));

    config.module
      .rule('md')
      .test(/\.md$/)
      .use('html-loader')
      .loader('html-loader')
      .end()
      .use('markdown-loader')
      .loader('markdown-loader')
      .end();

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
