import GlModal from "./src/modal";

GlModal.install = function (Vue) {
    Vue.component(GlModal.name,GlModal);
}

export default GlModal;