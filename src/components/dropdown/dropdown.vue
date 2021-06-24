<template>
  <div class="cain-dropdown">
    <div
      class="dropdown-defautl"
      @mouseenter="Mouseenter"
      @mouseleave="Mouseleave"
      ref="DropDownDefault"
    >
      <slot></slot>
    </div>
    <transition name="overlay">
      <div
        @mouseenter="Mouseenter"
        @mouseleave="Mouseleave"
        class="cain-overlay"
        v-show="overlay1"
        :style="{ top: Divtop + 'px', left: Divleft + 'px' }"
      >
        <slot name="overlay"> </slot>
      </div>
    </transition>
  </div>
</template>

<script>
import { onMounted, reactive, ref, toRefs } from "vue";
export default {
  name: "CDropdown",
  props: {},
  setup() {
    const DropDownDefault = ref(null);
    const overlay1 = ref(false);
    const elxy = reactive({
      Divtop: 0,
      Divleft: 0
    });
    let time = null;
    const Mouseenter = () => {
      if (time) {
        clearInterval(time);
      }
      overlay1.value = true;
    };
    const Mouseleave = () => {
      time = setTimeout(() => {
        overlay1.value = false;
      }, 100);
    };
    onMounted(() => {
      const Oheight = Number(
        window.getComputedStyle(DropDownDefault.value).height.replace("px", "")
      );
      const Otop = DropDownDefault.value.offsetTop + Oheight + 10;
      const Oleft = DropDownDefault.value.offsetLeft;
      elxy.Divtop = Otop;
      elxy.Divleft = Oleft;
      document.addEventListener("click", function(e) {
        if (e.target.className != "dropdown-defautl") {
          overlay1.value = false;
        }
      });
    });
    return {
      overlay1,
      DropDownDefault,
      Mouseleave,
      Mouseenter,
      ...toRefs(elxy)
    };
  }
};
</script>

<style lang="scss" scoped>
.cain-dropdown {
  .dropdown-defautl {
    border: 1px red solid;
    display: inline-block;
    height: auto;
  }
  .cain-overlay {
    position: absolute;
    z-index: 1000;
    width: 130px;
    height: auto;
    box-shadow: 0 2px 8px #e8e8e8;
    border-radius: 5px;
    background: #fff;
    &::before {
      position: absolute;
      top: -7px;
      right: 0;
      bottom: -7px;
      left: -7px;
      z-index: -9999;
      opacity: 0.0001;
      content: " ";
    }
  }
}
.overlay-leave-active,
.overlay-enter-active {
  transition: all 0.2s;
}
.overlay-enter-from,
.overlay-leave-to {
  transform-origin: -20% -20%;
  transform: rotateX(60deg);
  opacity: 0;
}
</style>
