import YButton from './button';
import YPagination from './pagination';
import YButtonAction from './buttonAction';
import YLinkTag from './linkTag';
import YSpin from './spin';
import YCustomTree from './customTree';
import YTableBox from './tableBox';
import YSvgIcon from './svgIcon';
import YBreadcrumb from './breadcrumb';
import YTag from './tag';
import YTabSwitch from './tabSwitch';
import YModal from './modal';
import YTableActionButton from './tableActionButton';
import YTable from './table';
import YTipsButton from './tipsButton';
import YTagInput from './tagInput';
import YDropdownCheckButton from './dropdownCheckButton';
import YSelect from './select';
import YSearchSelect from './searchSelect';
import YCheckbox from './checkbox';
import YCheckboxTag from './checkboxTag';
import YTextLink from './textLink';
import YInput from './input';
import YInputNumber from './inputNumber';
import YSteps from './steps';
import YBadge from './badge';
import YCollapse from './collapse';
import YEmpty from './empty';
import YModelTable from './modelTable';
import YButtonGroup from './buttonGroup';
import YForm from './form';
import YFormModel from './formModel';
import YTransfer from './transfer';
import YTimePicker from './timePicker';
import YCascaderMulti from './cascaderMulti';

import YDatePicker from './datePicker';
import YQuarterPicker from './quarterPicker';
import YAutoComplete from './autoComplete';
import YRadio from './radio';
import YSwitch from './switch';
import YSlider from './slider';
import YTabs from './tabs';
import YTimeLine from './timeLine';
import YTooltip from './tooltip';
import YPopconfirm from './popconfirm';
import YPopover from './popover';
import YDrawer from './drawer';
import YLoading from './loading';
import YAlert from './alert';
import YProgress from './progress';
import YTagAction from './tagAction';
import YPageViews from './pageViews';
import YNameSelect from './nameSelect';
import YDivider from './divider';
import YDropdown from './dropdown';
import YMenu from './menu';
import YCard from './card';
import YTree from './tree';
import YConfirm from './methods/confirm';
import YNotification from './methods/notification';
import YConfigProvider from './configProvider';
import YDescribe from './describe';
import YEditor from './editor';
import YUpload from './upload';
import YJsonViewer from './jsonViewer';
import YAnchor from './anchor';
import YColumnCheck from './columnCheck';
import YLayout from './layout';
import YAffix from './affix';
import YRow from './row';
import YCol from './col';
import YIcon from './icon';
import YSpace from './space';
import YInfiniteSelect from './infiniteSelect';
import YvirtualBox from './virtualBox';

// 国际化
import lang from '../src/locale';

// 方法类的组件
import YMethods from './methods';

// 复制
import YClipboard from 'vue-clipboard2';
// 公共的vue实例，有些方法必须得在vue实例中注册才能使用，所以Bus就是解决这个问题的公共Vue
import { getTableDragHeader, getTablePagination } from './Bus';
const YGetTableDragHeader = getTableDragHeader;
const YGetTablePagination = getTablePagination;
export {
  YButton,
  YPagination,
  YButtonAction,
  YLinkTag,
  YSpin,
  YCustomTree,
  YTableBox,
  YSvgIcon,
  YBreadcrumb,
  YTag,
  YTabSwitch,
  YModal,
  YTableActionButton,
  YTable,
  YTipsButton,
  YTagInput,
  YDropdownCheckButton,
  YSelect,
  YSearchSelect,
  YCheckbox,
  YCheckboxTag,
  YTextLink,
  YInput,
  YInputNumber,
  YSteps,
  YDatePicker,
  YQuarterPicker,
  YAutoComplete,
  YRadio,
  YSwitch,
  YSlider,
  YBadge,
  YCollapse,
  YEmpty,
  YModelTable,
  YButtonGroup,
  YForm,
  YFormModel,
  YTransfer,
  YTimePicker,
  YCascaderMulti,
  YTabs,
  YTimeLine,
  YTooltip,
  YPopconfirm,
  YPopover,
  YDrawer,
  YLoading,
  YAlert,
  YProgress,
  YPageViews,
  YTagAction,
  YNameSelect,
  YDivider,
  YDropdown,
  YMenu,
  YCard,
  YTree,
  YConfirm,
  YNotification,
  YConfigProvider,
  YDescribe,
  YEditor,
  YUpload,
  YJsonViewer,
  YAnchor,
  YColumnCheck,
  YLayout,
  YAffix,
  YRow,
  YCol,
  YIcon,
  YSpace,
  YInfiniteSelect,
  YvirtualBox,
  YMethods,
  YClipboard,
  YGetTableDragHeader,
  YGetTablePagination,
  lang,
};
