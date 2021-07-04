<template>
  <div class="home">
    <a-row>
      <a-col :span="24">
        <span class="row-label">面包屑组件：</span>
        <y-breadcrumb id="breadcrumb-container" class="breadcrumb-container" />
      </a-col>
    </a-row>
    <a-divider />
    <a-row>
      <a-col :span="24" class="flex-row">
        <span class="row-label">表格组件可伸缩列：</span>
        <div style="width: 80%; padding-top: 10px">
          <tableDraggable />
        </div>
      </a-col>
    </a-row>
    <a-divider />
    <!-- <transfer /> -->
    <a-row style="padding-top: 14px; padding-bottom: 14px">
      <a-col :span="24">
        <span class="row-label">标签Tag组件：</span>
        <y-tag color="green">成功</y-tag>
        <y-tag color="geekblue">正常</y-tag>
        <y-tag color="geekblue">进行中</y-tag>
        <y-tag color="red">错误</y-tag>
        <y-tag color="red">失败</y-tag>
        <y-tag color="gold">警示</y-tag>
        <y-tag color="gold">提示</y-tag>
        <y-tag color="volcano">更严重的警示</y-tag>
      </a-col>
    </a-row>
    <a-divider />
    <a-row>
      <a-col :span="24">
        <span class="row-label">button组件：</span>
        <y-button @click.native="test"> 123 </y-button>
      </a-col>
    </a-row>
    <a-divider />
    <a-row>
      <a-col :span="24" class="flex-row">
        <span class="row-label">表格组件：</span>
        <div style="width: 80%; padding-top: 10px">
          <table-demo />
        </div>
      </a-col>
    </a-row>
    <a-divider />
    <a-row>
      <a-col :span="24" class="flex-row">
        <span class="row-label" style="padding-top: 10px">分页组件：</span>
        <y-pagination :total="total" :page.sync="pages.page" :limit.sync="pages.limit" @pagination="paginationChange" />
      </a-col>
    </a-row>
    <a-divider />
    <a-row style="padding-top: 10px">
      <a-col :span="24" class="flex-row">
        <span class="row-label">自定义表格组件：</span>
        <div>
          <y-table-box>
            <template v-slot:button>button</template>
            <template v-slot:table>table</template>
          </y-table-box>
        </div>
      </a-col>
    </a-row>
    <a-divider />
    <a-row style="padding-top: 10px">
      <a-col :span="24" class="flex-row">
        <span class="row-label">tag标签组件：</span>
        <y-link-tag :data="dataArr" v-model="linkTagValue" :selectType="1" />
        选中值：{{ linkTagValue }}
        <input type="text" v-model="linkTagValue" />
      </a-col>
    </a-row>
    <a-divider />
    <a-row>
      <a-col :span="24" class="flex-row">
        <span class="row-label">上传组件：</span>
        <div style="width: 80%; padding-top: 10px">
          <upload />
        </div>
      </a-col>
    </a-row>
    <a-divider />
    <a-row style="padding-top: 10px">
      <a-col :span="24" class="flex-row">
        <span class="row-label">tree组件：</span>
        <y-custom-tree />
      </a-col>
    </a-row>
    <a-divider />
    <a-row style="padding-top: 10px">
      <a-col :span="24" class="flex-row">
        <span class="row-label">spin 全局组件：</span>
        <div>
          <a-button type="primary" @click="show" style="margin-right: 20px">show</a-button>
          <a-button type="primary" @click="hide">hide</a-button>
        </div>
      </a-col>
    </a-row>
    <a-divider />
    <a-row style="padding-top: 10px">
      <a-col :span="24" class="flex-row">
        <span class="row-label">弹窗组件：</span>
        <div>
          <a-button type="primary" @click="modalVisible = true">打开弹窗</a-button>
          <y-modal :move="modalMove" :visible="modalVisible" title="弹窗" @ok="modalVisible = false" @cancel="modalVisible = false">
            <p>弹窗内容</p>
            <a-button
              @click="
                modalMove = !modalMove;
                modalVisible = false;
              "
              >{{ modalMove ? '取消滑动' : '添加滑动' }}</a-button
            >
          <a-button type="primary" style="margin-left:20px" @click="modalVisible2 = true">打开弹窗2</a-button>
          </y-modal>
          <y-modal :move="false" :visible="modalVisible2" title="弹窗2" @ok="modalVisible2 = false" @cancel="modalVisible2 = false">
            <p>弹窗2内容</p>
          </y-modal>
        </div>
      </a-col>
    </a-row>
    <a-row style="padding-top: 10px">
      <a-col :span="24" class="flex-row">
        <span class="row-label">confirm 全局方法：</span>
        <div>
          <a-button type="primary" @click="$YConfirm({title:'可以移动confirm'})">可以移动confirm</a-button>
          <a-button type="primary" style="margin-left:20px" @click="$YConfirm({ title:'不移动confirm',move:false})">不移动confirm</a-button>
        </div>
      </a-col>
    </a-row>

    <!-- <a-divider />
    <a-row style="padding-top: 10px">
      <a-col :span="24" class="flex-row">
        <span class="row-label">自定义日期选择框面板组件：</span>
        <div>
          <y-custom-date-picker />
        </div>
      </a-col>
    </a-row> -->
  </div>
</template>

<script>
import tableDemo from '@/components/tableDemo';
import upload from '@/components/upload';
// import transfer from '@/components/transfer';
import tableDraggable from '@/components/tableDraggable';
export default {
  name: 'Home',
  components: {
    tableDemo,
    upload,
    // transfer,
    tableDraggable,
  },
  data() {
    return {
      modalVisible: false,
      modalVisible2: false,
      modalMove: true,
      total: 100,
      pages: {
        page: 1,
        limit: 10,
      },
      dataArr: [
        {
          label: 'CNware',
          value: '1',
          disabled: true,
        },
        {
          label: 'CNwareKV',
          value: '2',
        },
        {
          label: 'PowerVC',
          value: '3',
        },
        {
          label: '标签4',
          value: '4',
          disabled: true,
        },
        {
          label: '标签5',
          value: '5',
        },
      ],
      linkTagValue: '5',
    };
  },
  methods: {
    show() {
      this.$YSpin.show();
      setTimeout(() => {
        this.$YSpin.hide();
      }, 3000);
    },
    hide() {
      this.$YSpin.hide();
    },
    paginationChange(pages) {
      this.pages = pages;
    },
    test() {
      console.log('test:');
      const data = {
        message: '123',
      };
      this.$Ytipshow.info(data);
    }
  },
};
</script>

<style lang="less">
.home {
  padding-top: 10px;
  padding-left: 100px;
  text-align: left;
  .flex-row {
    display: flex;
    align-items: center;
  }
  .row-label {
    width: 120px;
    display: inline-block;
  }
}
</style>
