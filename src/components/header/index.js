import Header from '../container/header.vue'

Header.install = function(Vue){
    Vue.component(Header.name,Header)
}

export default Header