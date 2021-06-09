<template>
  <ul class="dot-ul">
    <li
      v-for="(item, index) in itemLen"
      :key="index"
      :class="['dot-li', { 'dot-li-hover': index == itemN }]"
      @click="LenChange(index)"
    ></li>
  </ul>
</template>

<script>
import { inject } from 'vue';
export default {
  name: "CDot",
  props: {
    itemLen: {
      type: [Number, String],
      default: 0,
    },
    itemN: {
      type: [Number, String],
      default: 0,
    },
  },
  setup(){
     const Carousel = inject("Carousel");
     
     return {
         LenChange:Carousel.LenChange
     }
  }
};
</script>

<style lang="scss" scoped>
.dot-ul {
  position: absolute;
  margin: 0;
  padding: 10px 0;
  bottom: 0;
  left: 50%;
  z-index: 10;
  transform: translateX(-50%);
  .dot-li {
    width: 10px;
    height: 10px;
    border: 1px #daeaef solid;
    list-style: none;
    float: left;
    margin-left: 10px;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.4s;
  }
  .dot-li:hover {
    background-color: #ffffff;
  }
  .dot-li-hover {
    background-color: #ffffff;
  }
}
</style>
