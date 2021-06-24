<template>
  <li
    :class="['cain-menu-item', currentIndex == index ? 'isselect' : '']"
    :key="index"
    @click="LenChange(index)"
  >
    <slot></slot>
  </li>
</template>

<script>
import { computed, inject, onMounted, reactive, toRefs, watch } from "vue";
export default {
  name: "CMenuItem",
  props: {
    index: {
      type: String,
      default: ""
    }
  },
  setup(props) {
    const menu = inject("menu", "");
    const submenu = inject("submenu", "");
    const MIndex = computed(() => {
      return menu.defaultIndexChange();
    });

    const stateIndex = reactive({
      currentIndex: menu.defaultIndex
    });

    watch(MIndex, val => {
      stateIndex.currentIndex = val;
    });

    onMounted(() => {
      if (submenu != "") {
        submenu.DefaultSelect(props.index == menu.defaultIndex);
      }
    });
    return {
      ...toRefs(stateIndex),
      LenChange: menu.LenChange
    };
  }
};
</script>

<style lang="scss">
.cain-menu-item {
  cursor: pointer;
  width: 100%;
  height: 40px;
  line-height: 40px;
  padding-left: 24px;
  list-style: none;
  color: #303133;
  font-size: 14px;
  user-select: none;
  box-sizing: border-box;
  white-space: nowrap;
  transition: 0.3s;
  margin-top: 5px;
  &:hover {
    color: #0c84ff;
  }
  > span {
    margin-left: 10px;
  }
}
.isselect {
  background-color: #e6f7ff;
  color: #0c84ff;
}
</style>
