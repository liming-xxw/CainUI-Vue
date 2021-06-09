<template>
  <div class="cain-sub-menu">
    <div
      :class="['cain-sub-title', IsSelect ? 'cain-sub-isselect' : '']"
      @click="healClike"
    >
      <slot name="title"></slot>
      <i class="select-icon"></i>
    </div>
    <c-transition :duration="300">
      <ul class="cain-sub-list" v-show="IsSelect">
        <slot></slot>
      </ul>
    </c-transition>
  </div>
</template>

<script>
import { onMounted, provide, reactive, ref } from "vue";
export default {
  name: "CSubMenu",
  setup() {
    const IsSelect = ref(false);
    const ArrarDefautl = ref([]);
    const healClike = () => {
      IsSelect.value = !IsSelect.value;
    };
    const DefaultSelect = (val) => {
      ArrarDefautl.value.push(val);
    };
    onMounted(() => {
      for (let i = 0; i < ArrarDefautl.value.length; i++) {
        if (ArrarDefautl.value[i]) {
          IsSelect.value = ArrarDefautl.value[i];
        }
      }
    });
    provide(
      "submenu",
      reactive({
        DefaultSelect,
      })
    );
    return {
      IsSelect,
      healClike,
    };
  },
};
</script>

<style lang="scss">
.cain-sub-menu {
  position: relative;
  cursor: pointer;
  width: 100%;
  line-height: 40px;
  list-style: none;
  color: #303133;
  font-size: 14px;
  user-select: none;
  box-sizing: border-box;
  white-space: nowrap;
  transition: 0.3s;
  margin-top: 5px;
  text-indent: 24px;
  .cain-sub-title {
    &:hover {
      color: #0c84ff;
    }
    > span {
      margin-left: 10px;
    }
    .select-icon {
      position: absolute;
      top: 15px;
      right: 20px;
      display: inline-block;
      width: 10px;
      // height: 20px;
      // border: 1px red solid;
      &::after {
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        width: 6px;
        height: 1.5px;
        border-radius: 2px;
        transition: 0.3s;
        background: #666666;
        transform: rotate(45deg);
      }
      &::before {
        position: absolute;
        top: 0px;
        right: 0;
        content: "";
        width: 6px;
        height: 1.5px;
        border-radius: 2px;
        transition: 0.3s;
        background: #666666;
        transform: rotate(130deg);
      }
    }
  }
  .cain-sub-isselect {
    color: #0c84ff;
    .select-icon {
      &::after {
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        width: 6px;
        height: 1.5px;
        border-radius: 2px;
        transition: 0.3s;
        background: #666666;
        transform: rotate(-45deg);
      }
      &::before {
        position: absolute;
        top: 0px;
        right: 0;
        content: "";
        width: 6px;
        height: 1.5px;
        border-radius: 2px;
        transition: 0.3s;
        background: #666666;
        transform: rotate(230deg);
      }
    }
  }
  .cain-sub-list {
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
    .cain-menu-item {
      padding-left: 14px;
    }
  }
}
</style>
