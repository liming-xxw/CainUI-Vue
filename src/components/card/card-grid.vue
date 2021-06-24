<template>
  <div class="cain-card-grid">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CCardGrid"
};
</script>

<style lang="scss" scoped>
.cain-card-grid {
  float: left;
  width: 25%;
  padding: 24px;
  border: 0;
  border-radius: 0;
  transition: all 0.3s;
  &:hover {
    box-shadow: 1px 0 0 0 #e8e8e8, 0 1px 0 0 #e8e8e8, 1px 1px 0 0 #e8e8e8,
      inset 1px 0 0 0 #e8e8e8, inset 0 1px 0 0 #e8e8e8;
  }
}
</style>
