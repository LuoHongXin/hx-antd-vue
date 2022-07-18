<template>
  <div>
    <!-- 组件标题和说明 -->
    <title-detail title="Select选择器" detail="从多个选项中选择一个或多个选项，并呈现选择结果。" />
    <h3 class="fun-title">代码演示</h3>
    <!-- 组件展示 -->
    <funTitleDetail title="常规" detail="注意如果你遇到菜单滚动定位问题，尝试给父元素设置position: relative"></funTitleDetail>
    <com-show>
      <div style="position: relative;">
        <y-select :options="options" disabled />
        <br /><br />
        <div>不使用v-model</div>
        <y-select defaultValue="jack">
          <y-select-option value="jack">
            Jack
          </y-select-option>
          <y-select-option value="lucy">
            Lucy
          </y-select-option>
        </y-select>
        <br /><br />
        <y-select :value="value1">
          <y-select-option value="jack">
            Jack
          </y-select-option>
          <y-select-option value="lucy">
            Lucy
          </y-select-option>
        </y-select>
        <br /><br />
        <div>使用v-model</div>
        <y-select v-model="value1">
          <y-select-option value="jack">
            Jack
          </y-select-option>
          <y-select-option value="lucy">
            Lucy
          </y-select-option>
          <y-select-option value="disabled" disabled>
            Disabled
          </y-select-option>
        </y-select>
        <br /><br />
        <y-select mode="multiple" :options="options"></y-select>
      </div>
    </com-show>
    <!-- 代码展示 -->
    <pre class="line-numbers">
        <code class="language-html" v-text='`<y-select :options="options" disabled />
        <br /><br />
        <div>不使用v-model</div>
        <y-select defaultValue="jack">
          <y-select-option value="jack">
            Jack
          </y-select-option>
          <y-select-option value="lucy">
            Lucy
          </y-select-option>
        </y-select>
        <br /><br />
        <y-select :value="value1">
          <y-select-option value="jack">
            Jack
          </y-select-option>
          <y-select-option value="lucy">
            Lucy
          </y-select-option>
        </y-select>
        <br /><br />
        <div>使用v-model</div>
        <y-select v-model="value1">
          <y-select-option value="jack">
            Jack
          </y-select-option>
          <y-select-option value="lucy">
            Lucy
          </y-select-option>
          <y-select-option value="disabled" disabled>
            Disabled
          </y-select-option>
        </y-select>
        <br /><br />
        <y-select mode="multiple" :options="options"></y-select>
        </div>`'/>
    </pre>
    <pre class="line-numbers">
      <code class="language-javascript">
        export default {
            data() {
              return {
                value1: '',
                options: [
                  {
                    value: 'jack',
                    disabled: true,
                    label: 'jack1jack1jack1jack1jack1jack1',
                  },
                  {
                    value: 'jack1',
                    label: 'jack1',
                  },
                  {
                    value: 'jack2',
                    label: 'jack2',
                  },
                  {
                    value: 'jack3',
                    label: 'jack3',
                  },
                ],
              };
            },
            watch: {
              value1(value1) {
                console.log(value1, 'value1');
              },
            },
        };
      </code>
    </pre>
  </div>
</template>
<script>
export default {
  name: 'NormalSelect',
  data() {
    return {
      options: [
        {
          value: 'jack',
          disabled: true,
          label: 'jack1jack1jack1jack1jack1jack1',
        },
        {
          value: 'jack1',
          label: 'jack1',
        },
        {
          value: 'jack2',
          label: 'jack2',
        },
        {
          value: 'jack3',
          label: 'jack3',
        },
      ],
      value1: '',
    };
  },
  watch: {
    value1(value1) {
      console.log(value1, 'value1');
    },
  },
};
</script>
