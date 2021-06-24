<template>
  <textarea
    v-if="TextHeight"
    :class="['cain-textarea', focusI ? 'focusI-textarea' : '']"
    :style="{ height: TextHeight + 'px' }"
    @focus="inputfocus"
    @blur="inputblur"
    @keydown.enter="KeyEvent"
    @keydown.delete="KeySpace"
  ></textarea>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  name: "CTextarea",
  props: {
    autoSize: {
      type: Object,
      default: () => {
        return { minRows: 1, maxRows: 1 };
      }
    }
  },
  setup(props) {
    let focusI = ref(false);
    let TextHeight = ref(23);
    const autosize = () => {
      TextHeight.value *= props.autoSize.minRows;
    };
    let BHight = 23;
    const KeyEvent = () => {
      let minHeight = 23 * props.autoSize.minRows;
      if (BHight <= minHeight) {
        BHight += 23;
      }
      if (BHight > minHeight) {
        TextHeight.value += 23;
      }
    };
    const KeySpace = () => {
      let TextSize = 23 * props.autoSize.minRows;
      if (TextHeight.value > TextSize) {
        TextHeight.value -= 23;
      }
    };
    const inputfocus = () => {
      focusI.value = true;
    };
    const inputblur = () => {
      focusI.value = false;
    };
    onMounted(() => {
      autosize();
    });
    return {
      inputfocus,
      inputblur,
      focusI,
      TextHeight,
      KeyEvent,
      KeySpace
    };
  }
};
</script>

<style lang="scss" scoped>
.cain-textarea {
  //   width: 100%;
  outline: none;
  height: 23px;
  min-height: 23px;
  display: inline-block;
  border: 1px #c1c3c1 solid;
  border-radius: 4px;
  //   color: rgba(0, 0, 0, 0.65);
  resize: vertical;
  font-weight: 500;
  padding: 3px 11px;
  font-size: 17px;
  transition: all 0.3s, height 0s;
}
.focusI-textarea {
  border: 1px #0c84ff solid;
}
</style>
