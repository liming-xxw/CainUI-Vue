<template>
  <div class="cain-input">
    <input
      class="cain-input-txt"
      :type="type"
      ref="inputtxt"
      @input="handleInput"
    />
  </div>
</template>

<script>
import { inject, ref } from "vue";
export default {
  name: "CInput",
  props: {
    type: {
      type: String,
      default: "text",
    },
    modelValue: {
      type: String,
      default: "",
    },
  },
  setup(props, ctx) {
    const inputtxt = ref(null);
    const formitem = inject("formitem", "");
    const handleInput = () => {
      const value = inputtxt.value.value;
      formitem.validate(value);
      ctx.emit("update:modelValue", value);
    };
    return {
      handleInput,
      inputtxt,
    };
  },
};
</script>

<style lang="scss" scoped>
.cain-input {
  position: relative;
  width: 100%;
  height: 40px;
  .cain-input-txt {
    outline: none;
    height: 40px;
    border: 1px #e6e6e6 solid;
    background-color: #fff;
    box-sizing: border-box;
    display: inline-block;
    font-size: inherit;
    border-radius: 4px;
    padding: 0;
    margin: 0;
    background-image: none;
    width: 100%;
    transition: 0.3s;
    text-indent: 20px;
    &:focus {
      border: 1px #0c84ff solid;
    }
  }
}
</style>
