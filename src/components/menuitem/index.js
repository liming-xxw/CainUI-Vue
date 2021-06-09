import MenuItem from '../menu/menuitem.vue'

MenuItem.install = function(Vue){
    Vue.component(MenuItem.name,MenuItem)
}

export default MenuItem