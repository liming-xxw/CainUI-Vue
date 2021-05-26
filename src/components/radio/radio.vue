<template>
  <label
    :class="[
      'cain-radio',
      isChecked ? 'is-checked' : '',
      disabled ? 'is-disabled' : '',
    ]"
  >
    <span class="cain-radio_input">
      <span class="cain-radio_inner"></span>
      <input
        class="cain-radio_original"
        type="radio"
        :disabled="disabled"
        :value="label"
        :name="name"
        v-model="model"
      />
    </span>
    <span class="cain-radio_lable1">
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script>
import { computed, inject} from "vue";
export default {
  name: "CRadio",
  props: {
    label: {
      type: [String, Number, Boolean],
      default: "",
    },
    modelValue: null,
    name: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const RadioGroup = inject("RadioGroup", "");

    const isGroup = computed(() => {
      return !!RadioGroup;
    });

    const model = computed({
      get() {
        return isGroup.value ? RadioGroup.modelValue : props.modelValue;
      },
      set(value) {
        isGroup.value
          ? RadioGroup.changEvent(value)
          : context.emit("update:modelValue", value);
      },
    });
    const isChecked = computed(() => {
      return  isGroup.value ? props.label == RadioGroup.modelValue : props.label == props.modelValue;
    });
    return {
      model,
      isChecked,
    };
  },
};
</script>

<style lang="scss" scoped>
.cain-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  .cain-radio_input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .cain-radio_inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &::after {
        content: "";
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        transition: transform 0.15s ease-in;
      }
    }
    .cain-radio_original {
      opacity: 0;
      outline: 0;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .cain-radio_lable1 {
    font-size: 14px;
    padding-left: 10px;
  }
}
.is-checked {
  .cain-radio_input {
    .cain-radio_inner {
      border-color: #409eff;
      background-color: #409eff;
      &::after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .cain-radio_lable1 {
    color: #409eff;
  }
}
.is-disabled {
  .cain-radio_input {
    .cain-radio_inner {
      border-color: #b2b2b2;
      background-color: #b2b2b2;
      &::after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .cain-radio_lable1 {
    color: #b2b2b2;
  }
}
</style>
