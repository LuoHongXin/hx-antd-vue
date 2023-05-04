export default `<template>
       <y-drawer title="查看文件" :visible="visible" @close="visible = false" :footer="null" size="xl">
       <div ref="output"></div>
       </y-drawer>
      </template>

      <script>
        import { render, readBuffer } from 'hx-antd-vue/src/utils/previewFile/utils.js';
        export default {
        name: 'FilePopUp',
        data() {
        return {
            visible: false,
            // 上个渲染实例
            lastDom: null,
        };
        },
        methods: {
        open(file, extend) {
            this.visible = true;
            this.$nextTick(async () => {
            try {
                const arrayBuffer = await readBuffer(file);
                this.loading = false;
                this.lastDom = await this.displayResult(arrayBuffer, extend);
            } catch (e) {
                this.$YMessage.error(e);
            }
            });
        },
        displayResult(buffer, extend) {
            // 输出目的地
            const { output } = this.$refs;
            // 生成新的dom
            const node = document.createElement('div');
            // 添加孩子，防止vue实例替换dom元素
            if (this.lastDom) {
            output.removeChild(this.lastDom.$el);
            this.lastDom.$destroy();
            }
            const child = output.appendChild(node);
            // 调用渲染方法进行渲染
            return new Promise((resolve, reject) =>
            render(buffer, extend, child)
                .then(res => resolve(res))
                .catch(err => reject(err))
            );
        },
          },
        };
        </script>
        <style lang="less" scoped>
        ::v-deep .ant-drawer-body {
          padding: 0;
          height: 100%;
        }
        .prism-player {
          display: block;
        }
      </style>`;
