<template>
  <footer class="cain-footer">
    <slot></slot>
  </footer>
</template>

<script>
export default {
  name: "CFooter",
};
</script>

<style lang="scss" scoped>
.cain-footer {
  height: 70px;
  background: #cccccc;
}
</style>
