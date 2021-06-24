<template>
  <div style="margin-top:100px;margin-left:500px">
    <c-dropdown
      >123
      <template #overlay>
        <c-menu>
          <c-menu-item index="7">
            <span>带参菜单</span>
          </c-menu-item>
          <c-menu-item index="8">
            <span>动态路由菜单</span>
          </c-menu-item>
        </c-menu>
      </template>
    </c-dropdown>

    <c-form :model="model" :rules="rules" @submit.prevent="onSubmit">
      <c-form-item prop="username">
        <c-input
          icon="user"
          v-model="forminput.username"
          placeholder="admin"
        ></c-input>
      </c-form-item>
      <c-form-item prop="userpass">
        <c-input
          icon="lock"
          type="password"
          v-model="forminput.userpass"
          placeholder="2021"
        ></c-input>
      </c-form-item>
      <div style="width: 320px">
        <c-checkbox v-model="checkbox" label="自动登录"></c-checkbox>
        <a style="float: right">忘记密码</a>
      </div>
      <c-form-item>
        <c-button style="margin-top: 24px" block>登录</c-button>
      </c-form-item>
      <div></div>
    </c-form>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    const forminput = ref({ username: "", userpass: "" });
    const rules = {
      username: [{ required: true, message: "用户名不能为空" }],
      userpass: [{ required: true, message: "密码不能为空" }]
    };
    const model = ref({
      username: "",
      userpass: ""
    });
    return { forminput, rules, model };
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
