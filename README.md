# hx-antd-vue

## 基于 ant-design-vue 封装的UI组件库

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Run your unit tests

```
yarn test:unit
```

### Run your end-to-end tests

```
yarn test:e2e
```

### Lints and fixes files

```
yarn lint
```

### 建议不要用 cnpm 安装 会有各种诡异的 bug 可以通过如下操作解决 npm 下载速度慢的问题

```
npm install --registry=https://registry.npm.taobao.org
```

### npm 依赖包

```
npm i --save react@latest
```

### yarn 依赖包

```
yarn add react@latest
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### 安装 gulp

yarn add gulp gulp-autoprefixer gulp-clean-css gulp-less gulp-rename --dev 测试没有成功！

### npm run lib

这条命令会生成一个 lib 文件夹，将所有的组件打包。然后 npm publish 发布到 npm 仓库。

### npm run pack

这条命令会在本地生成一个.tgz 的文件。执行 cnpm i /path/to/xxx.tgz 文件就可以在本地安装并测试自己封装的组件库了。

## 更新日志

### 1.0.0

-- 发布第一版 hx-antd-vue