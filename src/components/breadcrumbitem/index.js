import BreadcrumbItem from "../breadcrumb/breadcrumbitem.vue";

BreadcrumbItem.install = function(Vue) {
  Vue.component(BreadcrumbItem.name, BreadcrumbItem);
};

export default BreadcrumbItem;
