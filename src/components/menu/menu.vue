<template>
  <ul class="cain-menu">
    <slot></slot>
  </ul>
</template>

<script>
import { provide, reactive, toRefs } from "vue";
export default {
  name: "CMenu",
  props: {
    defaultSelectKeys: {
      type: String,
      default: "",
    },
    multiple: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    let defaultKeys = reactive({
      defaultIndex: props.defaultSelectKeys,
    });

    const defaultIndexChange = () => {
      return defaultKeys.defaultIndex;
    };

    const LenChange = (val) => {
      defaultKeys.defaultIndex = val;
    };

    provide(
      "menu",
      reactive({
        ...toRefs(defaultKeys),
        defaultIndexChange,
        LenChange,
      })
    );
  },
};
</script>

<style lang="scss" scoped>
.cain-menu {
  width: 100%;
  height: auto;
  min-height: 400px;
  position: relative;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>
