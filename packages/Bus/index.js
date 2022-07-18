import Vue from 'vue';
import VueDraggableResizable from 'vue-draggable-resizable';
Vue.component('vue-draggable-resizable', VueDraggableResizable);
const Bus = new Vue({
  methods: {
    getTablePagination(pagination) {
      return Object.assign(
        {
          pageSize: 10,
          pageSizeOptions: ['10', '20', '30', '50', '100', '200', '500'],
          total: 0,
          current: 1,
          showQuickJumper: true,
          showSizeChanger: true,
          showTotal: (total, range) => `${range[0]}-${range[1]}项 共${total} 项`,
        },
        pagination
      );
    },
    getTableDragHeader(columns, maxDragwidth = 1000) {
      const draggingMap = {};
      let totalWidth = 0;
      columns.forEach(col => {
        if (!isNaN(col.width)) {
          draggingMap[col.key] = col.width;
          totalWidth += col.width;
        }
      });
      const draggingState = Vue.observable(draggingMap);
      const resizeable = (a, b, c) => {
        let thDom = null;
        const props = b;
        const children = c;
        const { key, ...restProps } = props;
        let col = null;
        if (key === 'selection-column') {
          // 当前column为全选的时候，要返回全选的 th ，否则无法出现全选
          return (
            <th {...restProps} class={props.class}>
              {children}
            </th>
          );
        } else {
          col = columns.find(item => {
            const k = item.dataIndex || item.key;
            return k === key;
          });
        }
        if (!col) return {};
        if (!col.width) {
          return (
            <th {...restProps} class={props.class}>
              {children}
            </th>
          );
        }
        const onDrag = x => {
          draggingState[key] = 0;
          const maxWidth = totalWidth; // 拖拽最长长度不能超过所有的长度和
          col.width = Math.min(Math.max(x, 50), maxWidth, maxDragwidth);
        };

        const onDragstop = () => {
          draggingState[key] = thDom.getBoundingClientRect().width;
        };
        return (
          <th {...restProps} v-ant-ref={r => (thDom = r)} width={col.width} class={props.class + ' resize-table-th'}>
            {children}
            <vue-draggable-resizable
              key={col.key}
              class="table-draggable-handle"
              w={10}
              x={draggingState[key] - 0 || col.width - 0}
              z={1}
              axis="x"
              draggable={true}
              resizable={false}
              onDragging={onDrag}
              onDragstop={onDragstop}
            ></vue-draggable-resizable>
          </th>
        );
      };
      return {
        header: {
          cell: resizeable,
        },
      };
    },
  },
});

export default Bus;
