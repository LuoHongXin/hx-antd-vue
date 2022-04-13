# hx-antd-vue

API 文档：<a href="https://service-ijabkrhg-1302167662.gz.apigw.tencentcs.com/">hx-antd-vue API 文档</a>
代码地址：<a href="https://github.com/LuoHongXin/hx-antd-vue">hx-antd-vue 仓库</a>

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

## 打包上传 npm 流程

1. 修改更新版本
   - 在 package.json 里 version 将版本号改为 0.0.1，等我们做完了再改成 1.0.0
2. 执行 npm run lib 或者 yarn run lib
3. 维护 README.md 的更新日志
4. 如果第一次上传 npm

   - npm config set registry http://192.168.101.160:8081/repository/npmhosted.org/
   - 在命令行中登录 npm login

   ```
    name:deployer
    password:deployer
    email: 随意(建议用公司邮箱)
   ```

5. 发布 npm publish
6. npm push

### npm run lib

这条命令会生成一个 lib 文件夹，将所有的组件打包。然后 npm publish 发布到 npm 仓库。

### npm run pack

这条命令会在本地生成一个.tgz 的文件。执行 cnpm i /path/to/xxx.tgz 文件就可以在本地安装并测试自己封装的组件库了。

## 更新日志

### 1.0.1

-- 新增 Svg Icon 图标组件

### 1.0.2

-- 修复引入 index.js 出错

### 1.0.3

-- 修复 Svg Icon 图标 样式不生效

### 1.0.4

-- 新增 breadcrumb 面包屑组件

### 1.0.5

2021-03-25

-- 新增 标签 Tag 组件 规范表格状态 tag

### 1.0.6

2021-03-26

-- 修复 标签 Tag 组件 双向绑定的，回填赋值不生效的问题

### 1.0.7

2021-04-26

-- 新增 buttonAction 组件 插槽 自定义 icon

### 1.0.8/1.0.9

2021-04-26

-- 修复新增不生效，执行操作 npm run build ,应该执行 npm run dist:prod

### 1.0.10

2021-05-10

-- 新增 buttonAction 组件 按钮失效状态

### 1.0.11

2021-05-10

-- 修复 覆盖 ant-design-vue 部分全局样式,button 去掉圆角不生效

### 1.0.12

2021-05-17

-- 新增 linkTag 组件 禁用功能 disabled

### 1.0.13

2021-05-27

-- 修复 breadcrumb 面包屑组件 pathToRegexp 点击链接报错

### 1.0.15

2021-06-09

-- 以 a-modal 为基础添加带有滑动功能的弹窗组件

### 1.0.16

2021-06-09

-- 解决弹窗组件的滑动在某些情况会出现异常的问题

### 1.0.17/18/19

2021-06-18

-- 优化实现按需加载

### 1.0.20

2021-06-22

-- 优化调整 package.json  
 将 dependencies {
vuex@3.6.2
ant-design-vue@1.7.5
vue@2.6.14
vue-router@3.5.2
} 调整到 devDependencies
原因：生成环境中，不需要这些包

### 1.0.21

2021-06-22

-- 实现按需加载

### 1.0.22

2021-06-23

-- 弹窗默认点击遮罩不关闭

### 1.0.23

2021-06-24

-- 面包屑提供指定路径跳转，且重定向不是以 / 开头不做跳转

### 1.0.24

2021-06-25

-- 基于 antd-design-vue 的 $confirm 基础上封装 $YConfirm ,原有配置一样，多了一个 move，默认为 true 支持 confirm 窗口可移动，并优化原来的 modal 弹窗移动，解决出现多个弹窗时，只移动第一个的问题。

### 1.0.25

2021-06-28

-- 给面包屑添加打印，方便查看线上测试。

### 1.0.26

2021-07-12

-- 添加 YTableActionButton 组件用于表格组件自动显示更多按钮

### 1.0.27

2021-07-27

-- 编写组件使用说明文档，并封装 table 组件

### 1.0.28

2021-07-28

-- 处理table组件rowKey为函数的情况，以及拖拽header的类名缺漏问题

### 1.0.29

2021-07-28

-- table组件的行点击以遍历 modelKeys 为准

### 1.0.30

2021-07-28

-- 解决table组件v-model绑定失效问题

### 1.0.31

2021-07-28

-- 解决table组件v-model不传的时候，checkbox选择报错问题

### 1.0.32

2021-07-28

-- 解决table组件选择配置为单选 radio 时，行点击还是多选的问题

### 1.0.33

2021-07-30

-- 去除组件样式的scoped，使样式成为全局属性，避免被其它样式覆盖

### 1.0.34

2021-08-02

-- 表格拖拽最长宽度不能超过表格一半，去掉没数据时的滚动条

### 1.0.35

2021-08-05

-- 解决表格添加拖拽后，头部中的排序点击事件无法触发的问题

### 1.0.36

2021-08-05

-- 把$Bus.getTableDragHeader方法改成已有的$YGetTableDragHeader

### 1.0.37

2021-08-09

-- 解决表格和表格按钮没有导出，导致打包后的无法编译组件

### 1.0.38

2021-08-18

-- 新增提示按钮和可添加标签选择输入框两个组件，并解决a标签的href问题

### 1.0.39

2021-09-03

-- 每次表格数据发生改变时（增删），确保选中 modelKeys 还保留在 dataSource 中和受控 modelKeys 和 selectedData 保持一致

### 1.0.40

2021-09-03

-- 表格组件的 modelKeys 和 selectedData 设置默认值

### 1.0.41

2021-09-06

-- 表格显示滚动条

### 1.0.42

2021-09-10

-- 调整弹窗生成时为visible为true也可以移动

### 1.0.43

2021-09-24

-- 增加图标下拉按钮

### 1.0.44

2021-09-24

-- 组件库样式改为全局

### 1.0.45

2021-09-27

-- 修复表格选择框被禁用时，也可通过行点击进行选择的问题

### 1.0.46

2021-10-11

-- Ylinktag支持插槽自定义选项样式

### 1.0.47

2021-10-13

-- 解决表格行点击只能单点问题

### 1.0.48\1.0.49

2021-10-13

-- 修改表格操作按钮样式

### 1.0.50\1.0.51

2021-11-16

-- 调整部分组件样式

### 1.0.53\1.0.54

2021-12-17

-- 引入颜色变量和修改确认弹窗样式，确认弹窗按钮默认为确定和取消

### 1.0.55

2021-12-17

-- 优化表格操作按钮，show属性默认为true，且更多里面可有禁用样式

### 1.0.56

2021-12-18

-- 优化表格操作按钮，添加提示功能

### 1.0.57

2021-12-18

-- 表格操作按钮更多中禁用不触发事件

### 1.0.58

2021-12-20

-- 解决表格操作按钮更多中事件不触发问题

### 1.0.59

2021-12-23

-- 弹窗移动定位改为fixed，不受遮罩局限

### 1.0.60

2021-12-23

-- 弹窗移动添加限制范围参数dragSet

### 1.0.61

2021-12-27

-- 解决表格按钮最后一个有分割线问题

### 1.0.62\1.0.63

2022-01-04

-- 提供换肤功能

### 1.0.64

2022-01-06

-- 组件库自己不使用换肤，避免__theme_COLOR_css被组件库的覆盖

### 1.0.65/1.0.66

2022-01-06

-- 可选标签组件打勾图片用svg并根据父元素变化

### 1.0.67/1.0.68/1.0.69

2022-01-07

-- 解决换肤导致部分样式问题（从换肤插件解析css入手处理）

### 1.0.70

2022-01-11

-- 设置全局Pagination配置，统一Pagination页码

### 1.0.71

2022-01-12

-- 修改换肤解析规则

### 1.0.72

2022-01-13

-- 解决表格回显选中数据后，再选其它数据会导致已选数据被清空问题

### 1.0.73

2022-01-17

-- 解决表格多选数量不一致问题

### 1.0.74

2022-01-19

-- 完成选择器封装，由antd默认的相对body定位改为相对父元素定位

### 1.0.75

2022-01-24

-- 完成按钮组件、文字链接组件、多选框组件

### 1.0.76

2022-02-17

-- 完成部分组件重新封装

### 1.0.77

2022-02-23

-- 第二次完成部分组件重新封装

### 1.0.78

2022-02-24

-- 解决表格没绑定selectData报错问题

### 1.0.79/80

2022-02-25

-- 解决选择器兼容a-select-option和表格col不存在导致报错的问题

### 1.0.81

2022-02-28

-- 解决表格选择数据后，翻页就被清空上一页已选数据问题

### 1.0.82

2022-02-28

-- 跳转表格过滤弹窗中的按钮样式

### 1.0.83

2022-03-01

-- 日期选择样式，去除还未开发完的组件干扰样式

### 1.0.84

2022-03-09

-- 表格模板支持去除表头上的操作

### 2.0.0

2022-04-12

-- 完成组件库完整版


## contributor
- luohongxin <<954108736@qq.com>>
