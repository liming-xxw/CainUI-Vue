<template>
  <div style="height:100vh">
    <c-layout style="height:100vh">
      <c-header
        ><c-breadcrumb>
          <c-breadcrumb-item>Message1</c-breadcrumb-item>
          <c-breadcrumb-item>Message1</c-breadcrumb-item>
          <c-breadcrumb-item>Message1</c-breadcrumb-item>
        </c-breadcrumb>
      </c-header>
      <c-layout>
        <c-aside>
          <c-menu default-select-keys="3-1">
            <c-menu-item index="1">
              <c-icon type="setting"></c-icon>
              <span>组件2</span>
            </c-menu-item>
            <c-menu-item index="2">
              <c-icon type="good"></c-icon>
              <span>组件1</span>
            </c-menu-item>
            <c-sub-menu>
              <template #title>
                <c-icon type="good"></c-icon>
                <span>组件1</span>
              </template>
              <c-menu-item index="3-1">
                <span>组件5</span>
              </c-menu-item>
              <c-menu-item index="3-2">
                <span>组件5</span>
              </c-menu-item>
            </c-sub-menu>
            <c-sub-menu>
              <template #title>
                <c-icon type="good"></c-icon>
                <span>组件1</span>
              </template>
              <c-menu-item index="4-1">
                <span>组件5</span>
              </c-menu-item>
              <c-menu-item index="4-2">
                <span>组件5</span>
              </c-menu-item>
              <c-menu-item index="4-3">
                <span>组件5</span>
              </c-menu-item>
              <c-menu-item index="4-4">
                <span>组件5</span>
              </c-menu-item>
            </c-sub-menu>
            <c-menu-item index="3">
              <c-icon type="good"></c-icon>
              <span>组件12131321</span>
            </c-menu-item>
          </c-menu>
        </c-aside>
        <c-main> <c-button @click="kk">提交</c-button></c-main>
      </c-layout>
      <c-footer>
        <c-radio-group v-model="value" @change="change">
          <c-radio label="0">男</c-radio>
          <c-radio label="1">女</c-radio>
        </c-radio-group>
      </c-footer>
    </c-layout>
  </div>
</template>

<script>
import { ref } from "vue";
import { Message } from "./components/message/index.js";
export default {
  setup() {
    let show = ref(false);
    let show1 = ref(false);
    const value = ref("1");
    const change = val => {
        console.log(val)
    };
    const kk = () => {
      Message({
        type: "info",
        message: "This is Message"
      });
    };
    return {
      show,
      show1,
      kk,
      value,
      change
    };
  }
};
</script>

<style>
body,
html {
  margin: 0;
  padding: 0;
}
</style>
