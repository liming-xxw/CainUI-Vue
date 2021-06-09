<template>
  <section :class="['cain-section', IsFlex ? 'isflex' : '']">
    <slot></slot>
  </section>
</template>
<script>
import { provide, reactive, ref } from "vue";
export default {
  name: "CLayout",
  setup() {
    const IsFlex = ref(false);
    const IsFlexChonge = (val) => {
      IsFlex.value = val;
    };
    provide(
      "container",
      reactive({
        IsFlexChonge,
      })
    );
    return {
      IsFlex,
    };
  },
};
</script>

<style lang="scss" scoped>
.cain-section {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  min-height: 0;
}
.isflex{
  flex-direction:row;
}
</style>
