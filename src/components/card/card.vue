<template>
  <div :class="['cain-card', 'size-' + size]">
    <div class="cain-card-header">
      <div class="cain-card-header-wapper">
        <div class="cain-card-header-title">{{ title }}</div>
        <div>
          <slot name="extra"></slot>
        </div>
      </div>
    </div>
    <div :class="['cain-center', CreationMode ? 'isCMode' : '']">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "CCard",
  props: {
    title: {
      type: String
    },
    size: {
      type: String,
      default: "default"
    },
    CreationMode: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.cain-card {
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px #e8e8e8 solid;
  .cain-card-header {
    padding-left: 24px;
    padding-right: 24px;
    border-bottom: 1px solid #e8e8e8;
    min-height: 48px;
    zoom: 1;

    .cain-card-header-wapper {
      display: flex;
      align-items: center;
      .cain-card-header-title {
        display: inline-block;
        flex: 1;
        padding: 16px 0;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-weight: 500;
      }
    }
  }
  .cain-center {
    box-sizing: border-box;
    padding: 24px;
  }
  .isCMode {
    padding: 0;
  }
}
.size-small {
  .cain-card-header {
    padding-left: 10px;
    padding-right: 10px;
    min-height: 36px;
    .cain-card-header-wapper {
      .cain-card-header-title {
        padding: 8px 0;
      }
    }
  }
  .cain-center {
    padding: 10px;
    box-sizing: border-box;
    position: relative;
  }
  .isCMode {
    padding: 0;
  }
}
</style>
