<template>
  <div class="cain-form-item">
    <label class="cain-form-item-label" v-if="label">{{ label }}</label>
    <div class="cain-form-item-txt">
      <slot></slot>
      <transition name="formstatus">
        <p
          v-if="vaildateStatus"
          :class="['cain-form-item-status', 'status-' + status]"
        >
          {{ errorMessgae }}
        </p>
      </transition>
    </div>
  </div>
</template>
<script>
import { inject, provide, reactive, toRefs } from "vue";
import schema from "async-validator";
export default {
  name: "CFormItem",
  props: {
    label: {
      type: String,
      default: ""
    },
    prop: {
      type: String,
      default: ""
    }
  },
  setup(props) {
    const form = inject("form", "");
    const Status = reactive({
      vaildateStatus: false,
      errorMessgae: "",
      status: ""
    });

    const validate = value => {
      if (props.prop) {
        return new Promise(resolve => {
          let descriptor = {
            [props.prop]: form.rules[props.prop]
          };
          let obj = {
            [props.prop]: value
          };
          const validator = new schema(descriptor);
          validator.validate(obj, errors => {
            if (errors) {
              Status.status = "error";
              Status.errorMessgae = errors[0].message;
              Status.vaildateStatus = true;
              console.log("error");
              resolve(true);
            } else {
              Status.status = "";
              Status.errorMessgae = "";
              Status.vaildateStatus = false;
              resolve(false);
            }
          });
        });
      }
    };
    provide(
      "formitem",
      reactive({
        validate
      })
    );

    return {
      ...toRefs(Status)
    };
  }
};
</script>

<style lang="scss" scoped>
.cain-form-item {
  position: relative;
  display: flex;
  padding-bottom: 30px;
  width: 100%;
  .cain-form-item-label {
    width: 20%;
    text-align: right;
    vertical-align: middle;
    font-size: 14px;
    color: #666666;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .cain-form-item-txt {
    width: 80%;
    .cain-form-item-status {
      color: #de3226;
      font-size: 12px;
      position: absolute;
      top: 65%;
      z-index: 1;
    }
  }
}
.formstatus-leave-active,
.formstatus-enter-active {
  transition: 0.3s;
}

.formstatus-enter-from,
.formstatus-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
