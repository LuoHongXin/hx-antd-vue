export default {
  data() {
    return {
      tableData: [
        {
          params: 'freshCallback',
          explain: '重置按钮的点击回调，若有传，表格不会主动请求，而需要在该回调里面开发自己调用请求',
          type: 'function',
        },
        {
          params: 'rowSelection',
          explain: '选择功能的配置，false则隐藏选择，默认为true，对象则看rowSelection选择API',
          type: 'Object | Boolean',
          default: 'true',
        },
        {
          params: 'tableHeader',
          explain:
            '控制表头上的操作内容,若不想要左边的按钮，可以设对象属性中的 left 为 false，右边搜索同理；整个都不想要可以直接设为 false',
          type: 'Boolean|Object',
          default: '{left:true,right:true}',
        },
        {
          params: 'tableHeaderLeft',
          explain: '表格头部左侧slot位置',
          type: 'slot',
        },
        {
          params: 'tableHeaderRight',
          explain: '表格头部右侧slot位置',
          type: 'slot',
        },
        {
          params: 'scroll',
          explain: '控制表格滚动，具体看scroll滚动API',
          type: 'Object',
          default: 'null',
        },
        {
          params: 'affixTarget',
          explain: '表格吸顶吸底，函数返回滚动目标dom对象即可',
          type: 'Function',
          default: 'null',
        },
        {
          params: 'dataSource',
          explain: '表格数据，用于前端分页，可直接传入所有数据，有了该值， api 则不会再请求',
          type: 'Array',
          default: 'null',
        },
        {
          params: 'defaultCheckColumsValue',
          explain: '列设置展示默认勾选的数据',
          type: 'Array',
          default: '',
        },
        {
          params: 'autoSearchFilter',
          explain: '前端分页时，是否可支持表格根据搜索内容过滤',
          type: 'Boolean',
          default: `true`,
        },
        {
          params: 'columns',
          explain: '列数据，具体查看columns列数据API',
          type: 'Array',
          default: '[]',
        },
        {
          params: 'rowKey',
          explain: '表格行 key 的取值，可以是字符串或一个函数',
          type: 'String | Function',
          default: `id`,
        },
        {
          params: 'buttonList',
          explain: 'tableHeaderLeft插槽为空时将会根据buttonList生成表头左侧的操作按钮和批量操作按钮',
          type: 'Array',
          default: `null`,
        },
        {
          params: 'api',
          explain: '返回promise对象的请求方法，用于常见的后端分页',
          type: 'Function',
          default: `null`,
        },
        {
          params: 'immediately',
          explain: '是否在表格加载完成时就立即请求数据',
          type: 'Boolean',
          default: `true`,
        },
        {
          params: 'paramsKeyFilter',
          explain: `修改请求参数的名称，api的请求参数默认{
                start: 'start', // 起始页
                size: 'size', // 分页大小
                search: 'nameLike', // 搜索框
                sort: 'sort', // 排序对象
                order: 'order', // 排序顺序
              }，（参数值会自动根据组件当前数据传入请求），可通过paramsKeyFilter修改，比如将起始页的 start 改为 begin：{start: 'begin，'}，那之后的请求参数将会是{begin:1,...}`,
          type: 'Object',
          default: `null`,
        },
        {
          params: 'extraParams',
          explain: `额外的请求参数，在默认请求参数中添加其它额外的参数（参数值在传入时确定）`,
          type: 'Object',
          default: `null`,
        },
        {
          params: 'fresh',
          explain: `是否需要表头右侧的刷新功能`,
          type: 'Boolean',
          default: `true`,
        },
        {
          params: 'search',
          explain: `是否需要表头右侧的搜索`,
          type: 'Boolean',
          default: `true`,
        },
        {
          params: 'setting',
          explain: `是否需要表头右侧的设置列`,
          type: 'Boolean',
          default: `true`,
        },
        {
          params: 'selectOptions',
          explain: `searchPlaceholder为空时搜索下拉选项[{title:'标题',value:'值'}]，输入框会根据对应选项title显示到placeholder，若没有选项，默认是第一列title作为搜索对象`,
          type: 'Array',
          default: `null`,
        },
        {
          params: 'searchPlaceholder',
          explain: `搜索关键字的名称(placeholder)`,
          type: 'String',
          default: `null`,
        },
        {
          params: 'handleResponse',
          explain: `通过该回调函数的返回，处理请求成功后数据的赋值，参数一是请求返回的值，参数二是赋值类型，目前有两种 total 和 data，分别给总页数和表格数据赋值`,
          type: 'Function',
          default: `null`,
        },
        {
          params: 'getTableCallback',
          explain: `后端分页情况下，获取表格数据后的回调函数，形参为{ data: '接口返回数据或报错信息', type: 'success|error' }`,
          type: 'Function',
          default: `null`,
        },
        {
          params: 'download',
          explain: `点击导出操作的回调`,
          type: 'Function',
          default: `null`,
        },
        {
          params: 'filter',
          explain: `点击高级搜索按钮的回调`,
          type: 'Function',
          default: `null`,
        },
        {
          params: 'check',
          explain: `选中数据回调`,
          type: 'Function(selectDatakeys,selectData)',
          default: `null`,
        },
        {
          params: 'onSearch',
          explain: `进行搜索的回调`,
          type: 'Function',
          default: `null`,
        },
      ],
      tableData2: [
        {
          params: 'columnWidth',
          explain: '自定义列表选择框宽度，默认的选择列宽为40',
          type: 'string|number',
          default: `40`,
        },
        {
          params: 'columnTitle',
          explain: '自定义列表选择框标题',
          type: 'string|VNode',
          default: ``,
        },
        {
          params: 'fixed',
          explain: '把选择框列固定在左边',
          type: 'boolean',
          default: ``,
        },
        {
          params: 'getCheckboxProps',
          explain: '选择框的默认属性配置',
          type: 'Function(record)',
          default: ``,
        },
        {
          params: 'hideDefaultSelections',
          explain: '去掉『全选』『反选』两个默认选项',
          type: 'boolean',
          default: `false`,
        },
        {
          params: 'type',
          explain: '多选/单选，checkbox or radio',
          type: 'string',
          default: `checkbox`,
        },
      ],
      tableData3: [
        {
          params: 'x',
          explain: `设置横向滚动，也可用于指定滚动区域的宽和高，可以设置为像素值，百分比，true 和 'max-content'`,
          type: 'number | true',
          default: ``,
        },
        {
          params: 'y',
          explain: `设置纵向滚动，也可用于指定滚动区域的宽和高，可以设置为像素值，百分比，true 和 'max-content'`,
          type: 'number | true',
          default: ``,
        },
        {
          params: 'scrollToFirstRowOnChange',
          explain: `当分页、排序、筛选变化后是否滚动到表格顶部`,
          type: 'boolean',
          default: ``,
        },
      ],
      tableData4: [
        {
          params: 'columnSetTitle',
          explain: `自定义表头右上角列设置显示的名称`,
          type: `string`,
          default: ``,
        },
        {
          params: 'columnsCheckDisabled',
          explain: `是否可以进行列控制`,
          type: `Boolean`,
          default: `false`,
        },
        {
          params: 'align',
          explain: `设置列内容的对齐方式`,
          type: `'left' | 'right' | 'center'`,
          default: `'left'`,
        },
        {
          params: 'ellipsis',
          explain: `超过宽度将自动省略，注意：默认只会显示dataIndex对应的值，若没有对应的值，不要用ellipsis默认提示`,
          type: `boolean`,
          default: `false`,
        },
        {
          params: 'colSpan',
          explain: `表头列合并,设置为 0 时，不渲染`,
          type: `number`,
          default: ``,
        },
        {
          params: 'dataIndex',
          explain: `列数据在数据项中对应的 key，必填`,
          type: `string`,
          default: ``,
        },
        {
          params: 'defaultFilteredValue',
          explain: `默认筛选值`,
          type: `string[]`,
        },
        {
          params: 'align',
          explain: `设置列内容的对齐方式`,
          type: `'left' | 'right' | 'center'`,
          default: `'left'`,
        },
        {
          params: 'filterDropdown',
          explain: `可以自定义筛选菜单，此函数只负责渲染图层，需要自行编写各种交互`,
          type: `VNode | slot-scope`,
        },
        {
          params: 'filterDropdownVisible',
          explain: `用于控制自定义筛选菜单是否可见。`,
          type: `boolean`,
        },
        {
          params: 'filtered',
          explain: `标识数据是否经过过滤，筛选图标会高亮`,
          type: `boolean`,
          default: `false`,
        },
        {
          params: 'filteredValue',
          explain: `过滤初始值`,
          type: `Array`,
          default: ``,
        },
        {
          params: 'filterIcon',
          explain: `自定义 filter 图标。`,
          type: `VNode | (filtered: boolean, column: Column) => vNode |slot |slot-scope`,
          default: `false`,
        },
        {
          params: 'filterMultiple',
          explain: `是否多选`,
          type: `boolean`,
          default: `true`,
        },
        {
          params: 'filters',
          explain: `表头的筛选菜单项`,
          type: `object[]`,
        },
        {
          params: 'fixed',
          explain: `列是否固定，可选 true(等效于 left) 'left' 'right'`,
          type: `boolean|string`,
          default: `false`,
        },
        {
          params: 'customRender',
          explain: `	生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引，@return 里面可以设置表格行/列合并`,
          type: `Function(text, record, index) {}|slot-scope`,
        },
        {
          params: 'sorter',
          explain: `排序函数，本地排序使用一个函数(参考 Array.sort 的 compareFunction)，服务端排序可设为 true`,
          type: `Function|boolean`,
          default: `false`,
        },
        {
          params: 'sortOrder',
          explain: `排序初始值`,
          type: `string`,
          default: `'ascend' 'descend'`,
        },
        {
          params: 'sortDirections',
          explain: `支持的排序方式，取值为 'ascend' 'descend'`,
          type: `Array`,
          default: `['ascend', 'descend']`,
        },
        {
          params: 'title',
          explain: `列头显示文字`,
          type: `	string|slot	`,
        },
        {
          params: 'width',
          explain: `列宽度`,
          type: `string|number`,
          default: `false`,
        },
        {
          params: 'onFilter',
          explain: `本地模式下，确定筛选的运行函数, 使用 template 或 jsx 时作为filter事件使用`,
          type: `Function`,
        },
        {
          params: 'slots',
          explain: `使用 columns 时，可以通过该属性配置支持 slot 的属性，如 slots: { filterIcon: 'XXX'}`,
          type: `object`,
          default: `false`,
        },
        {
          params: 'scopedSlots',
          explain: `使用 columns 时，可以通过该属性配置支持 slot-scope 的属性，如 scopedSlots: { customRender: 'XXX'}`,
          type: `object`,
        },
      ],
      tableData5: [
        {
          params: 'text',
          explain: `按钮文字`,
          type: 'String',
          default: ``,
        },
        {
          params: 'copy',
          explain: `是否需要复制`,
          type: 'Boolean',
          default: `false`,
        },
        {
          params: 'click',
          explain: `按钮点击事件`,
          type: 'Function',
          default: ``,
        },
        {
          params: 'disabled',
          explain: `按钮是否禁用，按钮默认选择数据才可点击，不选数据则被禁用`,
          type: 'Boolean',
          default: `false`,
        },
        {
          params: 'show',
          explain: `按钮的显示隐藏`,
          type: 'Boolean',
          default: `true`,
        },
        {
          params: 'tips',
          explain: `	提示信息，若为字符串，则默认显示top位置；若为对象可根据对象中的placement（可选 top left right bottom topLeft topRight bottomLeft bottomRight leftTop leftBottom rightTop rightBottom）属性修改位置，text属性为字符串`,
          type: 'String|Object',
          default: ``,
        },
        {
          params: 'icon',
          explain: `图标`,
          type: 'String',
          default: ``,
        },
        {
          params: 'type',
          explain: `按钮类型，primary 类型默认不需选择数据，也不会被禁用`,
          type: '可选值为 primary dashed danger link 或者不设',
          default: ``,
        },
        {
          params: 'checkDisabled',
          explain: `此值将按钮与数据选中绑定，除了primary按钮默认一直可点，其它未设置disabled的按钮都是默认根据选中数据判断是否禁用；若想要primary按钮可根据是否选择数据禁用，则checkDisabled为true；若想要一般按钮不根据是否选择数据来判断禁用（即一直是可点的），则checkDisabled为false解除与数据选择的绑定`,
          type: 'Boolean',
          default: ``,
        },
      ],
      tableData6: [
        {
          params: 'clearSelect',
          explain: `清空表格所选数据`,
          type: 'function',
          default: ``,
        },
        {
          params: 'onSearch',
          explain: `可传参执行搜索，并重置页数回到第一页`,
          type: 'function(string)',
          default: ``,
        },
        {
          params: 'getTableData',
          explain: `执行搜索但不会重置页数回到第一页`,
          type: `function({
            needLoading:boolean // 是否需要loading效果的搜索，默认为 true
          })`,
          default: ``,
        },
        {
          params: 'freshTable',
          explain: `进行清空输入框、表格过滤、表格排序并重置回到第一页的搜索`,
          type: 'function',
          default: ``,
        },
        {
          params: 'selectedDataKeys',
          explain: `表格选中的数据key值，可操控清除选中`,
          type: 'Array',
          default: ``,
        },
        {
          params: 'selectedData',
          explain: `表格选中的数据`,
          type: 'Array',
          default: ``,
        },
      ],
    };
  },
};
