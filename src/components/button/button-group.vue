<template>
  <div class="cain-button-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "CButtonGroup",
};
</script>

<style lang="scss" scoped>
.cain-button-group {
  display: inline-block;
  vertical-align: middle;
}

</style>
