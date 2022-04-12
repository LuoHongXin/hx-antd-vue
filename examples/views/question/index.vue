<template>
  <a-layout-content style="padding: 10px 60px">
    <title-detail title="问题汇总" detail="下面将会罗列 hx-antd-vue 使用配置过程中将会遇到的一些问题及解决办法。" />
    <div class="q-box">
      <h3 class="fun-title">1、按使用去引用 hx-antd-vue 后，组件没样式</h3>
      <p>若遇到按使用去引用 hx-antd-vue 后，组件没样式，且报组件未注册的错误，如下图：</p>
      <img :src="img1" />
      <p>
        这是因为2.0版本之前的 hx-antd-vue 是需要先安装和引用 ant-design-vue ，但在 2.0 版本之后（包括 2.0 ）的 hx-antd-vue
        就无需再安装和引用 ant-design-vue。若想解决错误，请将 hx-antd-vue 升级到 2.0 或先安装和引用 ant-design-vue。
      </p>
    </div>

    <div class="q-box">
      <h3 class="fun-title">2、Module not found: Error: Can't resolve 'less-loader' in</h3>
      <p>
        若报 Module not found: Error: Can't resolve 'less-loader' in 这个错误，是因为 antd 和 hx-antd-vue 都是使用 less 作为 css
        的预编译语言，所以项目需要先安装 less 和 less-loader 依赖
      </p>
      <img :src="img2" />

      <pre class="line-numbers">
        <code class="language-JavaScript">
         npm install less less-loader -D
        </code>
    </pre>
    </div>
    <div class="q-box">
      <h3 class="fun-title">3、Inline JavaScript is not enabled. Is it set in your options?</h3>
      <p>若遇到 Inline JavaScript is not enabled. Is it set in your options? 报错，如下图：</p>
      <img :src="img3" />
      <p>主要是因为 antd 的 less 样式表中有链式调用的写法:</p>
      <img :src="img4" />
      <p>我们需要在 vue.config.js 或 webpack 配置中去支持 less 的链式调用：</p>
      <img :src="img5" />
      <pre class="line-numbers">
        <code class="language-JavaScript">
        css:{
            loaderOptions:{
                less:{
                    lessOptions:{
                        javascriptEnabled:true // 支持链式调用
                        }
                    }
                }
        },
        </code>
    </pre>
    </div>
    <div class="q-box">
      <h3 class="fun-title">4、遇到报错 Operation on an invalid type 运行无效类型</h3>
      <img :src="img6" />
      <p>这是因为 less 是 4.x 版本且有 antd 有计算样式存在，如下图：</p>
      <img :src="img7" />
      <p>在 less 中，上图的写法类似 css 中的 calc，而 less 将会计算所有 未转义的内容，除非你用 strict math 模式。</p>
      <p>解决方法：将 less 版本降到 3.x</p>
      <pre class="line-numbers">
        <code class="language-JavaScript">
        npm i less@3 -D
        </code>
    </pre>
    </div>
    <div class="q-box">
      <h3 class="fun-title">5、Module not found: Error: Can't resolve 'path' in</h3>
      <p>
        在配置 主题与换肤 中的 2.1 换肤配置时，遇到错误 Module not found: Error: Can't resolve 'path' in BREAKING CHANGE: webpack &lt; 5
        used to include polyfills for node.js core modules by default. This is no longer the case. Verify if you need this module and
        configure a polyfill for it. If you want to include a polyfill, you need to: - add a fallback 'resolve.fallback: { "path":
        require.resolve("path-browserify") }' - install 'path-browserify' If you don't want to include a polyfill, you can use an empty
        module like this: resolve.fallback: { "path": false } Module not found: Error: Can't resolve 'fs' in Can't resolve 'crypto' in
      </p>
      <p>如下图：</p>
      <img :src="img8" />
      <p>
        这是因为你的项目使用的是 webpack5 ，v4 以前附带了许多node.js核心模块的polyfill，在构建时给
        bundle附加了庞大的polyfills，在大部分情况下，polyfills并不是必须。
      </p>
      <p>现在v5将要停止这一切，在模块的应用中不再自动引入Polyfills，明显的减小了打包体积。</p>
      <p>
        webpack 4，在v4中，crypto模块会主动添加
        polyfill，也就是crypto-browserify，我们运行的代码是不需要的，反而会使最后的包变大，影响编译速度。
      </p>
      <p>webpack 5，在v5编译中，会出现polyfill添加提示，如果不需要node polyfille,按照提示 alias 设置为 false 即可。</p>
      <p>解决方法： 在 vue.config.js 中配置 configureWebpack</p>
      <pre class="line-numbers">
        <code class="language-JavaScript">
        configureWebpack: config => {
            return {
                resolve: {
                    // 不需要node polyfilss
                    alias: {
                        crypto: false,
                        fs:false,
                        path:false
                    },
                },
            }
        }
        </code>
    </pre>
      <p>如果需要使用 polyfilss ，则需要自己手动安装添加，例如 crypto：</p>
      <p>1、安装</p>
      <pre class="line-numbers">
        <code class="language-JavaScript">
        npm install crypto-browserify
        </code>
    </pre>
      <p>2、配置 package.json</p>
      <pre class="line-numbers">
        <code class="language-JavaScript">
        {
            // ...
            "browser": {
                "crypto": false
            },
            "dependencies": {
                "crypto-browserify": "^3.12.0",
            // ...
            }
        }
        </code>
    </pre>
      <p>3、修改 webpack 配置</p>
      <pre class="line-numbers">
        <code class="language-JavaScript">
         resolve: {
        // 1.不需要node polyfilss
        // alias: {
        //  crypto: false
        // },
        // 2.手动添加polyfills
            fallback: {
                "crypto": require.resolve('crypto-browserify')
            }
         }
        </code>
    </pre>
    </div>
  </a-layout-content>
</template>
<script>
export default {
  name: 'question',
  data() {
    return {
      img1: require('@/assets/document1.png'),
      img2: require('@/assets/document2.png'),
      img3: require('@/assets/document3.png'),
      img4: require('@/assets/document4.png'),
      img5: require('@/assets/document5.png'),
      img6: require('@/assets/document6.png'),
      img7: require('@/assets/document7.png'),
      img8: require('@/assets/document8.png'),
    };
  },
};
</script>
<style scoped lang="less">
p {
  font-size: 14px;
}
.q-box {
  padding-bottom: 16px;
  border-bottom: 1px solid #000;
}
</style>
