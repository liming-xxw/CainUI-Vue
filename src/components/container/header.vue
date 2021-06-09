<template>
  <header class="cain-header">
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: "CHeader",
};
</script>

<style>
.cain-header {
  height: 60px;
  background: #cccccc;
}
</style>
