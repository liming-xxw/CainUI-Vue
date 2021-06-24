<template>
  <div class="cain-drawer">
    <div class="drawer-mask" v-show="modelValue" @click="handleClose"></div>
    <transition :name="`drawer-${direction}`">
      <div
        class="drawer-body"
        v-show="modelValue"
        :class="['direction-' + direction]"
        :style="{ width: width + 'px' }"
      >
        <div v-show="!CreationMode" class="drawer-header">
          <span>{{ title }}</span>
        </div>
        <div :class="['drawer-main', { isCMode: CreationMode }]">
          <div>
            <slot></slot>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "CDrawer",
  props: {
    title: {
      type: String,
      default: "标题"
    },
    width: {
      type: [Number, String],
      default: 250
    },
    direction: {
      type: String,
      default: "right"
    },
    modelValue: {
      type: Boolean,
      default: false
    },
    CreationMode: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const handleClose = function() {
      context.emit("update:modelValue", false);
    };
    return {
      handleClose
    };
  }
};
</script>

<style lang="scss" scoped>
.cain-drawer {
  .drawer-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.45);
    z-index: 10000;
  }
  .drawer-body {
    position: fixed;
    background-color: white;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    z-index: 100001;
    .drawer-header {
      width: 100%;
      height: 60px;
      border-bottom: 1px #666666 solid;
      line-height: 60px;
      text-indent: 25px;
    }
    .drawer-main {
      flex: 1;
      padding: 20px;
      background: white;
    }
  }
  .isCMode {
    padding: 0 !important;
  }
  .direction-right {
    right: 0;
    top: 0;
    height: 100% !important;
  }
  .direction-top {
    top: 0;
    left: 0;
    width: 100% !important;
  }
  .direction-bottom {
    bottom: 1px;
    left: 0;
    width: 100% !important;
  }
  .direction-left {
    top: 0;
    left: 0;
    height: 100% !important;
  }
}
.drawer-bottom-leave-active,
.drawer-bottom-enter-active {
  transition: 0.3s;
}

.drawer-bottom-enter-from,
.drawer-bottom-leave-to {
  transform: translateY(100%);
}

.drawer-right-leave-active,
.drawer-right-enter-active {
  transition: 0.3s;
}
.drawer-right-enter-from,
.drawer-right-leave-to {
  transform: translateX(100%);
}

.drawer-left-leave-active,
.drawer-left-enter-active {
  transition: 0.3s;
}
.drawer-left-enter-from,
.drawer-left-leave-to {
  transform: translateX(-100%);
}

.drawer-top-leave-active,
.drawer-top-enter-active {
  transition: 0.3s;
}
.drawer-top-enter-from,
.drawer-top-leave-to {
  transform: translateY(-100%);
}
</style>
