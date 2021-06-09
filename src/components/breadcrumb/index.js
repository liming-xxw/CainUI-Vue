import BreadcrumbItem from "../breadcrumbitem";
import Breadcrumb from "./breadcrumb.vue";

BreadcrumbItem.install = function(Vue) {
  Vue.component(Breadcrumb.name, Breadcrumb);
};

export default Breadcrumb;
