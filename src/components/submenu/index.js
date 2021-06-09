import SubMenu from "../menu/submenu.vue";

SubMenu.install = function(Vue) {
  Vue.component(SubMenu.name, SubMenu);
};

export default SubMenu;
