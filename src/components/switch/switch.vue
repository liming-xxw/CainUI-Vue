<template>
  <div class="Cain_Switch">
    <input
      type="checkbox"
      :style="bgcolor"
      :class="[disabled ? 'Cain_disabled' : '']"
      name="switch"
      v-model="switchchecked"
      :disabled="disabled"
    />
  </div>
</template>

<script>
import { watch, ref } from "vue";
export default {
  name: "CSwitch",
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    unCheckedColor: {
      type: String,
      default: "#7aa85d",
    },
  },

  setup(props, ctx) {
    const switchchecked = ref(props.checked);
    const bgcolor = ref({ "--Fcolor": props.unCheckedColor });
    watch(switchchecked, (val) => {
      ctx.emit("change", val);
    });
    return {
      switchchecked,
      bgcolor,
    };
  },
};
</script>

<style lang="scss" scoped>
.Cain_Switch {
  position: relative;
  width: 44px;
  height: 22px;
  border-radius: 38px;
  background-color: #e9e9e9;
  overflow: hidden;
  input {
    visibility: hidden;
    cursor: pointer;
    &::after {
      visibility: visible;
      content: "";
      position: absolute;
      top: 1.4px;
      left: 1.4px;
      width: 19px;
      height: 19px;
      background-color: white;
      border-radius: 50%;
      transition: 0.5s;
    }
    &::before {
      visibility: visible;
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transition: all 0.5s;
    }
    &:checked::after {
      transform: translateX(22px);
    }
    &:checked::before {
      background-color: var(--Fcolor);
      // background-color: red;
    }
  }
  .Cain_disabled {
    cursor: not-allowed !important;
  }
}
</style>
