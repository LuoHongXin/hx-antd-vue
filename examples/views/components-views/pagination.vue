<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail title="分页组件" detail="用于解决海量信息展示、滚动条过长不方便用户查看。" />
    <declareList :value="declareList" />
    <h3 class="fun-title">代码演示</h3>
    <funTitleDetail title="常规(页面数 < 10)" detail=""></funTitleDetail>
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
                        total: 90,
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
    <funTitleDetail title="常规(页面数 >= 10)" detail=""></funTitleDetail>
    <com-show>
      <y-pagination :total="total2" :page.sync="pages.page" :limit.sync="pages.limit" @pagination="paginationChange" />
    </com-show>
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
    <funTitleDetail title="middle(页面数 < 10)" detail=""></funTitleDetail>
    <!-- 组件展示 -->
    <com-show>
      <y-pagination :total="total" :page.sync="pages.page" type="middle" :limit.sync="pages.limit" @pagination="paginationChange" />
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="`<y-pagination :total='total' :page.sync='pages.page' type='middle' :limit.sync='pages.limit' @pagination='paginationChange' />`">
        </code>
        <code class="language-javascript" >
            export default {
                data() {
                    return {
                        total: 90,
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
    <funTitleDetail title="middle(页面数 >= 10)" detail=""></funTitleDetail>
    <com-show>
      <y-pagination :total="total2" :page.sync="pages.page" type="middle" :limit.sync="pages.limit" @pagination="paginationChange" />
    </com-show>
    <pre class="line-numbers">
        <code class="language-html" v-text="`<y-pagination :total='total' :page.sync='pages.page' type='middle' :limit.sync='pages.limit' @pagination='paginationChange' />`">
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
    <funTitleDetail title="mini(页面数 < 10)" detail=""></funTitleDetail>
    <!-- 组件展示 -->
    <com-show>
      <y-pagination :total="total" :page.sync="pages.page" type="mini" :limit.sync="pages.limit" @pagination="paginationChange" />
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text="`<y-pagination :total='total' :page.sync='pages.page' type='mini' :limit.sync='pages.limit' @pagination='paginationChange' />`">
        </code>
        <code class="language-javascript" >
            export default {
                data() {
                    return {
                        total: 90,
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
    <funTitleDetail title="mini(页面数 >= 10)" detail=""></funTitleDetail>
    <com-show>
      <y-pagination :total="total2" :page.sync="pages.page" type="mini" :limit.sync="pages.limit" @pagination="paginationChange" />
    </com-show>
    <pre class="line-numbers">
        <code class="language-html" v-text="`<y-pagination :total='total' :page.sync='pages.page' type='mini' :limit.sync='pages.limit' @pagination='paginationChange' />`">
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
  name: 'pagination',
  data() {
    return {
      total: 90,
      total2: 100,
      pages: {
        page: 1,
        limit: 10,
      },
      declareList: ['翻页器默认定位在第一页', '当页面数 > 10 的时候，需要提供快速跳转页面的功能', '单页展示的内容数最好不低于 10 个'],
      tableData: [
        { params: 'total', explain: '数据总数量，数据为 0 时会隐藏分页', type: 'Number' },
        { params: 'page', explain: '当前所在页', type: 'Number', default: 1 },
        { params: 'limit', explain: '每页限制多少条数据', type: 'Number', default: 10 },
        { params: 'type', explain: '分页类型，目前有默认的normal和 middle 中等类型 和 mini简单类型', type: 'String', default: 'normal' },
        {
          params: 'pageSizeOptions',
          explain: '单页展示选项',
          type: 'Array',
          default: "['10', '20', '30', '50', '100', '200']",
        },
      ],
    };
  },
  methods: {
    paginationChange(pages) {
      this.pages = pages;
    },
  },
};
</script>
