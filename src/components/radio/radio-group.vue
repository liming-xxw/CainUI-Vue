<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import { nextTick, provide, reactive, toRefs } from "vue";
export default {
  name: "CRadioGroup",
  props: {
    modelValue: null,
  },
  setup(props, context) {
    const changEvent = (value) => {
      context.emit("update:modelValue", value);
      nextTick(()=>{
          context.emit("change",value)
      })
    };
    provide("RadioGroup", reactive({
      ...toRefs(props),
      changEvent:changEvent
    }));
  },
};
</script>
