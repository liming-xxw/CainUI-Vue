import Model from './model.vue'

Model.install = function(Vue){
    Vue.component(Model.name,Model)
}

export default Model
