<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail
      title="分页组件"
      detail="基于 antd 的分页封装的，但是只有如下API可用，因为只是利用了 antd 的分页样式，功能是重写的。样式上也是为了配合表格组件，而进行了右对齐。表格本身是有自带分页组件的，所以在使用当前分页组件的时候，需要对表格的分页组件进行 :pagination='false' 的隐藏，然后再通过表格change事件去修改当前组件的页码数据等。"
    />
    <h3 class="fun-title">代码演示</h3>
    <!-- 组件展示 -->
    <com-show>
      <y-pagination :total="total" :page.sync="pages.page" :limit.sync="pages.limit" @pagination="paginationChange" />
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="`<y-pagination :total='total' :page.sync='pages.page' :limit.sync='pages.limit' @pagination='paginationChange' />`">
        </code>
        <code class="language-javascript" >
            export default {
                data() {
                    return {
                        total: 100,
                        pages: {
                            page: 1,
                            limit: 10,
                        },
                    };
                },
                methods: {
                    paginationChange(pages) {
                        this.pages = pages;
                    },
                }
            };
        </code>
    </pre>
    <api-table :data="tableData"></api-table>
  </div>
</template>
<script>
export default {
  name: 'button',
  data() {
    return {
      total: 100,
      pages: {
        page: 1,
        limit: 10,
      },
      tableData: [
        { params: 'total', explain: '数据总数量', type: 'Number' },
        { params: 'page', explain: '当前所在页', type: 'Number', default: 1 },
        { params: 'limit', explain: '每页限制多少条数据', type: 'Number', default: 10 },
      ],
    };
  },
  methods: {
    paginationChange(pages) {
      this.pages = pages;
    },
  }
};
</script>