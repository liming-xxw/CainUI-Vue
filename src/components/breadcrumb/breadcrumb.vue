<template>
  <div class="cain-breadcrumb">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CBreadcrumb",
};
</script>

<style lang="scss" scoped>
.cain-breadcrumb {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  font-feature-settings: "tnum";
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
}
</style>
