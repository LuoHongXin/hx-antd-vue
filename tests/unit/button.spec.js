// import { createVue, destroyVM } from '../util';
import Button from '../../packages/button/src/button';
import Vue from 'vue';
describe('Button.vue', () => {
  // it('存在.', done => {
  //   done();
  // });

  it('点击 button 触发 click 事件', () => {
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
      propsData: {
        icon: 'settings',
      },
    }).$mount();

    const callback = sinon.fake();
    vm.$on('click', callback);
    vm.$el.click();
    expect(callback).to.have.been.called;
  });
});
