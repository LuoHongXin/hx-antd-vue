import request from '../utils/request';

export default {
  getTableData(params = {}) {
    return request({
      url: '/tableData',
      method: 'get',
      params,
    });
  },
};
