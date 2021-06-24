<template>
  <div class="cain-tag">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CTag"
};
</script>

<style lang="scss" scoped>
.cain-tag {
  display: inline-block;
  padding: 2px 5px;
  color: #409eff;
  background-color: #ecf5ff;
  border-radius: 3px;
  border: 1px solid #d9ecff;
  white-space: nowrap;
  font-size: 13px;
  cursor: pointer;
}
</style>
