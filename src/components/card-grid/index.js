import CardGrid from '../card/card-grid.vue'

CardGrid.install = function(Vue){
    Vue.component(CardGrid.name,CardGrid)
}

export default CardGrid