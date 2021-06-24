<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
import { nextTick, provide, reactive, toRefs } from "vue";
export default {
  name: "CCheckboxGroup",
  props: {
    modelValue: {
      type: Array
    }
  },
  setup(props, context) {
    const changEvent = value => {
      context.emit("update:modelValue", value);
      nextTick(() => {
        context.emit("change", value);
      });
    };
    provide(
      "checkgroup",
      reactive({
        ...toRefs(props),
        changEvent
      })
    );
  }
};
</script>
