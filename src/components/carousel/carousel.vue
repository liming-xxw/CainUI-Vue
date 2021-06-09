<template>
  <div class="cain-carousel" @mousemove="Mousemove" @mouseout="Mouseout">
    <div class="dot">
      <c-dot :itemLen="ItemLen" :itemN="currendIndex"></c-dot>
    </div>
    <div class="inner">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import {
  provide,
  reactive,
  toRefs,
  getCurrentInstance,
  onMounted,
  onBeforeUnmount,
} from "vue";
import Dot from "./Dot.vue";
export default {
  name: "CCarousel",
  components: {
    CDot: Dot,
  },
  props: {
    autoplay: {
      type: Boolean,
      default: true,
    },
    duration: {
      type: Number,
      default: 3000,
    },
    initial: {
      type: Number,
      default: 0,
    },
    hasDot: {
      type: Boolean,
      default: false,
    },
    hasDirector: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const instance = getCurrentInstance();

    const stateIndex = reactive({
      currendIndex: props.initial,
      ItemLen: instance.slots.default()[0].children.length,
    });
    const LenChange = (val)=>{
        stateIndex.currendIndex = val
    }
    const IndexChange = () => {
      return stateIndex.currendIndex;
    };

    let t = null;
    const autoPlay = () => {
      if (props.autoplay) {
        t = setInterval(() => {
          setIndex("next");
        }, props.duration);
      }
    };
    const setIndex = (val) => {
      switch (val) {
        case "next":
          stateIndex.currendIndex += 1;
          if (stateIndex.currendIndex === stateIndex.ItemLen) {
            stateIndex.currendIndex = 0;
          }
          break;
        case "prev":
          stateIndex.currendIndex -= 1;
          if (stateIndex.currendIndex === -1) {
            stateIndex.currendIndex = stateIndex.ItemLen - 1;
          }
          break;
        default:
          break;
      }
    };

    const Mousemove = () => {
      clearInterval(t);
      t = null;
    };

    const Mouseout = () => {
      autoPlay();
    };

    onMounted(() => {
      autoPlay();
    });
    onBeforeUnmount(() => {
      clearInterval(t);
      t = null;
    });

    provide(
      "Carousel",
      reactive({
        ...toRefs(stateIndex),
        IndexChange: IndexChange,
        LenChange:LenChange
      })
    );
    return {
      ...toRefs(stateIndex),
      Mousemove,
      Mouseout,
    };
  },
};
</script>

<style lang="scss" scoped>
.cain-carousel {
  width: 100%;
  height: 100%;
  position: relative;
  .inner {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
  }
}
</style>
