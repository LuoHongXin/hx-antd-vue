<template>
  <div class="y-filter-form">
    <y-filter-form :form="form" layoutType="1col">
      <y-filter-form-item label="统计范围">
        <y-name-select style="margin-right:8px" title="主机池" />
        <y-name-select style="margin-right:8px" title="集群" />
        <y-name-select style="margin-right:8px" title="宿主机" />
        <y-name-select title="虚拟机" />
      </y-filter-form-item>
      <y-filter-form-item label="统计时间">
        <y-range-picker />
      </y-filter-form-item>
      <y-filter-form-item label="统计类型">
        <y-link-tag :data="dataArr" :selectType="1">
          <template v-slot:hzw>
            <div style="width:100px;height:100%">
              <img
                style="width:50%;height:100%"
                src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F201511%2F18%2F20151118172257_wcfKT.thumb.400_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636533506&t=31bca10c46e7c2d0778b56400e55849c"
                alt=""
              />
              <span>海贼王</span>
            </div>
          </template>
        </y-link-tag>
      </y-filter-form-item>
      <y-divider dashed />
      <template slot="btnCol">
        <y-button type="primary" html-type="submit">
          查询
        </y-button>
        <y-button>
          重置
        </y-button>
      </template>
    </y-filter-form>
  </div>
</template>
<script>
export default {
  name: 'filterForm2',
  data() {
    return {
      form: {
        user: '',
        password: '',
      },
      dataArr: [
        {
          label: 'CNware',
          value: '1',
          disabled: true,
        },
        {
          slot: 'hzw',
          value: '2',
        },
        {
          label: 'PowerVC',
          value: '3',
        },
        {
          label: '标签4',
          value: '4',
        },
        {
          label: '标签5',
          value: '5',
        },
        {
          label: 'CPU利用率(%)',
          value: '6',
        },
        {
          label: 'CPU使用情况(MHz)',
          value: '7',
        },
        {
          label: '内存利用率(%)',
          value: '8',
        },
        {
          label: '磁盘利用率(%)',
          value: '9',
        },
        {
          label: '网络吞吐量入统计(Mbps)',
          value: '10',
        },
        {
          label: '网络吞吐量出统计(Mbps)',
          value: '11',
        },
      ],
    };
  },
};
</script>
