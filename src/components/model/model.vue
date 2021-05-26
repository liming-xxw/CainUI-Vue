<template>
  <div class="cain-model">
    <div
      class="model-Mask"
      v-if="mask"
      v-show="modelValue"
      @click="handleClose"
    ></div>
    <transition name="slide">
      <div
        class="model-body"
        v-show="modelValue"
        :style="{ width: width + 'px' }"
      >
        <div class="model-body-header">
          <div class="model-body-header-item">
            <span>{{ title }}</span>
            <c-icon type="good" @click="handleClose"></c-icon>
          </div>
        </div>
        <div class="model-boyd-main">
          <slot></slot>
        </div>
        <div class="model-body-footer">
          <div v-if="$slots.footer">
            <slot name="footer"></slot>
          </div>
          <div class="footer-def" v-else-if="footer">
            <c-button style="margin-right:10px" @click="handleClose"
              >取消</c-button
            >
            <c-button
              style="margin-right:10px"
              type="primary"
              @click="handleOpen"
              >确认</c-button
            >
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  name: "CModel",
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    width: {
      type: [Number],
      default: 520,
    },
    title: {
      type: String,
      default: "对话框",
    },
    footer: {
      type: Boolean,
      default: true,
    },
    mask: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, context) {
    const visibleMOdel = computed(() => {
      return props.modelValue;
    });

    const handleClose = () => {
      context.emit("update:modelValue", false);
      context.emit("close");
    };
    const handleOpen = () => {
      context.emit("update:modelValue", false);
      context.emit("ok");
    };
    return {
      visibleMOdel,
      handleClose,
      handleOpen,
    };
  },
};
</script>

<style lang="scss" scoped>
.cain-model {
  .model-Mask {
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.65);
    top: 0;
    left: 0;
    transition: 0.3s;
  }
  .model-body {
    position: absolute;
    z-index: 1;
    max-height: 800px;
    overflow: hidden;
    overflow-y: hidden;
    background: white;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    top: 30%;
    left: 50%;
    transform: translate(-50%, -30%);
    margin: 0px auto;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    transition: 0.3s;
    .model-body-header {
      width: 100%;
      height: 60px;
      border-bottom: 1px #ccc solid;
      line-height: 60px;
      .model-body-header-item {
        width: 95%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
      }
    }
    .model-boyd-main {
      width: 100%;
      padding: 20px;
    }
    .model-body-footer {
      border-top: 1px #ccc solid;
      width: 100%;
      height: 60px;
      text-align: right;
      line-height: 60px;
    }
  }
}

.slide-leave-active,
.slide-enter-active {
  transition: 0.4s;
}

.slide-leave-from,
.slide-enter-to {
  opacity: 1;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}
</style>
