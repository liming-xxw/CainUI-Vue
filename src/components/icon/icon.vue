<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="`#icon-${type}`"></use>
  </svg>
</template>

<script>
export default {
  name: "CIcon",
  props: {
    type: String,
  },
};
</script>

<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
