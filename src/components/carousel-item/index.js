import CarouselItem from '../carousel/carousel-item.vue'

CarouselItem.install = function(Vue){
    Vue.component(CarouselItem.name,CarouselItem)
}

export default CarouselItem