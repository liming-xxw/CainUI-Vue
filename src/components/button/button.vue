<template>
  <button
    class="cain-button"
    :class="[
      type ? 'cain-button-' + type : '',
      buttonSize ? 'cain-button-' + buttonSize : '',
      {
        'is-disabled': disabled,
        'is-circle': circle,
        'is-round': round,
      },
    ]"
    :disabled="disabled"
  >
    <c-icon  v-if="icon" :type="icon"></c-icon>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import { computed } from "vue";
export default {
  name: "CButton",
  props: {
    type: {
      type: String,
      default: "default",
    },
    icon: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "default",
    },
    circle: {
      type: Boolean,
      default: false,
    },
    round:{
      type:Boolean,
      default:false
    }

  },
  setup(props) {
    const buttonSize = computed(() => {
      return props.size;
    });
    return {
      buttonSize,
    };
  },
};
</script>

<style lang="scss" scoped>
.cain-button {
  outline: none;
  display: inline-block;
  border: 1px #e6e6e6 solid;
  font-size: 14px;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  color: #000000;
  transition: 0.3s;
  -moz-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  &:hover {
    border: 1px #0c84ff solid;
    background: #c8e0f8;
    color: #0c84ff;
  }
}

// type样式
.cain-button-primary {
  background-color: #0c84ff;
  color: #ffffff;
  &:hover {
    background-color: #8ccdfd;
    border: 1px #8ccdfd solid;
    color: #ffffff;
  }
}
.cain-button-error {
  background-color: #de3226;
  color: #ffffff;
  &:hover {
    background-color: #ed696c;
    border: 1px #ed696c solid;
    color: #ffffff;
  }
}
.cain-button-success {
  background-color: #7aa85d;
  color: #ffffff;
  &:hover {
    background-color: #84c8ad;
    border: 1px #84c8ad solid;
    color: #ffffff;
  }
}

//size样式
.cain-button-small {
  padding: 5px 10px;
}
.cain-button-large {
  padding: 15px 30px;
}

.is-disabled {
  background-color: #b2b2b2;
  color: #666666;
  border: 1px #b2b2b2 solid;

  &:hover {
    background-color: #b2b2b2;
    border: 1px #b2b2b2 solid;
    color: #666666;
    cursor: not-allowed;
  }
}
.is-circle{
  border-radius: 50%;
  padding: 8px 11px;
}
.is-round{
   border-radius: 20px;
}
// 按钮组
.cain-button-group .cain-button{
  // border-right: 1px red solid;
  border: 0px;
  border-radius: 0px;
}
.cain-button-group .cain-button:first-child{
   border-top-left-radius: 5px;
   border-bottom-left-radius: 5px;
}
.cain-button-group .cain-button:not(:last-child){
  border-right: 1px white solid;
}
.cain-button-group .cain-button:last-child{
    border-top-right-radius: 5px;
   border-bottom-right-radius: 5px;
}
</style>


