<template>
  <span class="cain-breadcrumbitem">
    <span><slot></slot> </span>
    <span>/</span>
  </span>
</template>

<script>
export default {
  name: "CBreadcrumbItem",
};
</script>

<style lang="scss" scoped>
.cain-breadcrumbitem {
    cursor: pointer;
  > span {
    margin-left: 10px;
  }
}
.cain-breadcrumbitem:last-child {
  color: black;
  > span:last-child {
    display: none;
  }
}
</style>
