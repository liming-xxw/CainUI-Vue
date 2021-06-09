<template>
  <transition name="carousel">
    <div class="cain-carousel-item" v-if="selfIndex === currentIndex">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
import {
  computed,
  getCurrentInstance,
  inject,
  reactive,
  toRefs,
  watch,
} from "vue";
export default {
  name: "CCarouselItem",
  setup() {
    const instance = getCurrentInstance();
    const Carousel = inject("Carousel", "");
    const cindex = computed(() => {
      return Carousel.IndexChange();
    });

    const stateIndex = reactive({
      selfIndex: instance.vnode.key,
      currentIndex: Carousel.currendIndex,
    });
   
     

    watch(cindex, (val) => {
      stateIndex.currentIndex = val;
    });
    return {
      ...toRefs(stateIndex),
    };
  },
};
</script>

<style lang="scss" scoped>
.cain-carousel-item {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.carousel-enter-active,
.carousel-leave-active {
  transition: all 0.5s linear;
}

.carousel-enter-active {
  transform: translateX(100%);
}

.carousel-enter-to {
  transform: translateX(0);
}

.carousel-leave-active {
  transform: translateX(0);
}
.carousel-leave-to {
  transform: translateX(-100%);
}
</style>
