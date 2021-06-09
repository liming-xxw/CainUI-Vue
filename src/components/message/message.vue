<template>
  <transition
    name="message"
    @before-leave="onClose()"
    @after-leave="$emit('destroy')"
  >
    <div
      :class="[
        'cain-message',
        'cain-message-' + type,
        center ? 'is-center' : '',
      ]"
      :style="{ top: offset + 'px' }"
      v-show="visible"
      @mousemove="Vmove"
      @mouseout="Vout"
    >
      <svg class="icon" aria-hidden="true">
        <use :xlink:href="`#icon-${type}`"></use>
      </svg>
      <span v-if="message">{{ message }}</span>
    </div>
  </transition>
</template>

<script>
import { onMounted, onUnmounted, ref } from "vue";
export default {
  name: "CMessage",
  props: {
    id: { type: [String, Number], default: "" },
    message: { type: String, default: "" },
    type: { type: String, default: "" },
    duration: { type: Number, default: 3000 },
    center: { type: String, default: "" },
    onClose: { type: Function },
    offset: { type: Number, default: 20 },
  },
  setup(props) {
    let visible = ref(false);
    let time = null;
    const startTimer = () => {
      time = setTimeout(() => {
        visible.value = false;
      }, props.duration);
    };

    const Vmove = () => {
      clearInterval(time);
      time = null;
    };
    const Vout = () => {
      startTimer();
    };

    onMounted(() => {
      startTimer();
      visible.value = true;
    });
    onUnmounted(() => {
      clearTimeout(time);
    });
    return {
      visible,
      Vmove,
      Vout,
    };
  },
};
</script>

<style lang="scss" scoped>
.cain-message {
  display: inline-block;
  padding: 10px 16px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  span {
    font-size: 14px;
  }
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    padding-right: 5px;
  }
}
.message-leave-active,
.message-enter-active {
  transition: 0.3s;
}

.message-enter-from,
.message-leave-to {
  margin-top: -20px;
  opacity: 0;
}
</style>
