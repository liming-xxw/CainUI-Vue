<template>
  <transition
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @leave="leave"
    @after-leave="afterLeave"
  >
    <slot></slot>
  </transition>
</template>

<script>
import { computed, ref } from "vue";
export default {
  name: "CTransition",
  props: {
    duration: {
      type: [Number, String],
      default: 500,
    },
  },
  setup(props) {
    const elTransition = computed(() => {
      return `height ${props.duration}ms  ease-in-out`;
    });
    let Height = ref(0);
    const beforeEnter = (el) => {
      el.style.transition = elTransition.value;
      if (Height.value == 0) {
        let height = Number(el.style.height.replace("px", ""));
        if (
          height == 0 ||
          height == null ||
          height == undefined ||
          height == "auto"
        ) {
          const children = [...el.childNodes];
          for (let i = 0; i < children.length; i++) {
            if (children[i].nodeName === "#text") {
              children.splice(i, 1);
            }
          }
          height = children.length * 43;
        }
        Height.value = height;
      }
      el.style.height = "0";
    };
    const enter = (el) => {
      el.style.transition = elTransition.value;
      el.offsetHeight;
      el.style.height = Height.value + "px";
      el.style.overflow = "hidden";
    };
    const afterEnter = (el) => {
      el.style.transition = elTransition.value;
    };
    const leave = (el) => {
      el.style.transition = elTransition.value;
      el.style.overflow = "hidden";
      el.style.height = window.getComputedStyle(el).height;
      if (Height.value == 0) {
        let height = Number(
          window.getComputedStyle(el).height.replace("px", "")
        );
        Height.value = height;
      }
      el.offsetHeight;
      el.style.height = "0px";
    };
    const afterLeave = (el) => {
      el.style.transition = elTransition.value;
      el.style.height = "0px";
    };
    return {
      beforeEnter,
      enter,
      afterEnter,
      leave,
      afterLeave,
    };
  },
};
</script>
