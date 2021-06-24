<template>
  <form class="cain-form">
    <slot></slot>
  </form>
</template>

<script>
import { reactive, provide } from "vue";
export default {
  name: "CForm",
  props: {
    model: {
      type: Object,
      required: true,
    },
    rules: {
      type: Object,
    },
  },
  setup(props) {
    const fileds = [];
    const FormItemAdd = (item) => {
      fileds.push(item);
      console.log(item);
      console.log(item.validate());
    };
    provide(
      "form",
      reactive({
        rules: props.rules,
        FormItemAdd,
      })
    );  
  },
};
</script>

<style lang="scss" scoped>
.cain-form {
  display: block;
  padding: 20px;
  // width: 400px;
}
</style>
