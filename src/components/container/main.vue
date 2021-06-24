<template>
  <main class="cain-main">
    <slot></slot>
  </main>
</template>

<script>
export default {
  name: "CMain"
};
</script>

<style lang="scss" scoped>
.cain-main {
  min-height: 120px;
  flex: auto;
}
</style>
