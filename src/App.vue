<template>
  <div>
    <div>
      <c-button>默认按钮</c-button>
      <c-button style="margin-left:10px" type="error" @click="add"
        >默认按钮</c-button
      >
      <c-button style="margin-left:10px" type="primary" @click="xiaoa = true"
        >默认按钮</c-button
      >
      <c-button style="margin-left:10px" type="success">默认按钮</c-button>
    </div>
    <div>
      <c-button-group>
        <c-button type="error">默认按钮</c-button>
        <c-button type="primary">默认按钮</c-button>
        <c-button type="success">默认按钮</c-button>
      </c-button-group>
    </div>
    <!-- <div>
      <c-radio-group v-model="value">
        <c-radio label="1">男</c-radio>
        <c-radio label="0">女</c-radio>
      </c-radio-group>

      <c-radio label="1">男</c-radio>
      <c-radio label="0">女</c-radio>
    </div> -->

    <div>
      <c-model v-model="xiao" @ok="ok1">123123121 </c-model>
    </div>
    <div>
      
      <c-drawer v-model="xiaoa" direction="right">

        12321312
      </c-drawer>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "App",
  setup() {
    const value = ref(0);
    let xiao = ref(false);
    let xiaoa = ref(false);
    const add = () => {
      xiao.value = true;
    };
    const ok1 = () => {
      console.log("asd");
    };
    return {
      add,
      value,
      xiao,
      ok1,
      xiaoa,
    };
  },
};
</script>

<style>

</style>
