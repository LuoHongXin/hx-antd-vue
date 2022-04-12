import YConfirm from './confirm';
import YNotification from './notification';
import YMessage from './message';
import { YInfo, YSuccess, YError, YWarning } from './modal';

export default [
  {
    name: '$YConfirm',
    method: YConfirm,
  },
  {
    name: '$YNotification',
    method: YNotification,
  },
  {
    name: '$YMessage',
    method: YMessage,
  },
  {
    name: '$YInfo',
    method: YInfo,
  },
  {
    name: '$YSuccess',
    method: YSuccess,
  },
  {
    name: '$YError',
    method: YError,
  },
  {
    name: '$YWarning',
    method: YWarning,
  },
];
