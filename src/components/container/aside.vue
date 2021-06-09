<template>
  <aside class="cain-aside">
    <slot></slot>
  </aside>
</template>

<script>
import { inject, onMounted } from "vue";
export default {
  name: "CAside",
  setup() {
    const container = inject("container", "");
    onMounted(() => {
      container.IsFlexChonge(true);
    });
  },
};
</script>

<style lang="scss" scoped>
.cain-aside {
  width: 200px;
  min-width: 200px;
  min-height: 200px;
  overflow: hidden;
  overflow-y: visible;
}
</style>
