<template>
  <div :class="['cain-input', focusI ? 'focusI' : '']" tabindex="0">
    <span> <c-icon v-if="icon" :type="icon"></c-icon> </span>
    <input
      :class="['cain-input-txt', icon ? 'ic' : '']"
      :type="type"
      ref="inputtxt"
      @input="handleInput"
      :placeholder="placeholder"
      @focus="inputfocus"
      @blur="inputblur"
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
      default: "text"
    },
    modelValue: {
      type: String,
      default: ""
    },
    icon: {
      type: String
    },
    placeholder: {
      type: String
    }
  },
  setup(props, ctx) {
    const inputtxt = ref(null);
    const formitem = inject("formitem", "");

    const handleInput = () => {
      const value = inputtxt.value.value;
      if (formitem != "") {
        formitem.validate(value);
      }
      ctx.emit("update:modelValue", value);
    };

    let focusI = ref(false);
    const inputfocus = () => {
      focusI.value = true;
    };
    const inputblur = () => {
      focusI.value = false;
    };

    return {
      handleInput,
      inputtxt,
      inputfocus,
      inputblur,
      focusI
    };
  }
};
</script>

<style lang="scss" scoped>
.cain-input {
  position: relative;
  width: 100%;
  height: 40px;
  display: flex;
  background-color: #fff;
  border: 1px #c1c3c1 solid;
  border-radius: 4px;
  font-size: 14px;
  line-height: 40px;
  overflow: hidden;
  box-sizing: border-box;
  > span {
    position: absolute;
    display: flex;
    align-items: center;
    top: 50%;
    transform: translateY(-50%);
    left: 14px;
  }
  .cain-input-txt {
    outline: none;
    height: 40px;
    box-sizing: border-box;
    display: inline-block;
    border: none;
    font-size: inherit;
    padding: 0;
    margin: 0;
    background-image: none;
    width: 100%;
    transition: 0.3s;
    padding: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 5px;
    color: rgba(0, 0, 0, 0.65);
  }
  .ic {
    padding-left: 35px;
  }
}
.focusI {
  border: 1px #0c84ff solid;
}
</style>
