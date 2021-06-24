<template>
  <label class="cain-checkbox" :class="{ ' is-checked': isChecked }">
    <span class="cain-checkbox_input">
      <span class="cain-checkbox_inner"></span>
      <input
        type="checkbox"
        class="cain-checkbox_original"
        :name="name"
        v-model="model"
        :value="label"
      />
    </span>
    <span class="cain-checkbox_label">
      <slot></slot>
      <template v-if="!$slots.default">
        {{ label }}
      </template>
    </span>
  </label>
</template>
<script>
import { computed, inject } from "vue";
export default {
  name: "CCheckbox",
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    }
  },
  setup(props, context) {
    const checkboxgroup = inject("checkgroup", "");
    const isGroup = computed(() => {
      return !!checkboxgroup;
    });
    const model = computed({
      get() {
        return isGroup.value ? checkboxgroup.modelValue : props.modelValue;
      },
      set(value) {
        isGroup.value
          ? checkboxgroup.changEvent(value)
          : context.emit("update:modelValue", value);
      }
    });
    const isChecked = computed(() => {
      return isGroup.value ? model.value.includes(props.label) : model.value;
    });
    return {
      model,
      isChecked
    };
  }
};
</script>

<style lang="scss" scoped>
.cain-checkbox {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: ncain;
  margin-right: 30px;
  .cain-checkbox_input {
    white-space: nowrap;
    cursor: pointer;
    outline: ncain;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .cain-checkbox_inner {
      display: inline-block;
      position: relative;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      background-color: #fff;
      z-index: 1;
      transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
        background-color 0.25s, cubic-bezier(0.71, -0.46, 0.29, 1.46);
      &:after {
        box-sizing: content-box;
        content: "";
        border: 1px solid #ffffff;
        border-left: 0;
        border-top: 0;
        height: 7px;
        left: 4px;
        position: absolute;
        top: 1px;
        transform: rotate(45deg) scaleY(0);
        width: 3px;
        transition: transform 0.15s ease-in 0.05s;
        transform-origin: center;
      }
    }
    .cain-checkbox_original {
      opacity: 0;
      outline: ncain;
      position: absolute;
      left: 10px;
      margin: 0;
      width: 0;
      height: 0;
      z-index: -1;
    }
  }
  .cain-checkbox_label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
  }
}
.cain-checkbox.is-checked {
  .cain-checkbox_input {
    .cain-checkbox_inner {
      background-color: #409eff;
      border-color: #409eff;
    }
    &:after {
      transform: rotate(45deg) scaleY(1);
    }
  }
  .cain-checkbox_label {
    color: #409eff;
  }
}
</style>
