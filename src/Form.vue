<template>
  <div class="root">
    <div class="container">
      <nj-input placeholder="请输入内容" type="password" name="password" disabled></nj-input>
    </div>
    <div class="container">
      <nj-input placeholder="请输入内容" type="text"></nj-input>
    </div>
    <div class="container">
      <nj-input placeholder="请输入内容" type="text" v-model="username"></nj-input>
    </div>
    <div class="container">
      <nj-input placeholder="请输入用户名" type="text" v-model="username" clearable></nj-input>
    </div>
    <div class="container">
      <nj-input placeholder="请输入密码" type="password" v-model="password" showPwd></nj-input>
    </div>
    <div class="container">
      <nj-switch v-model="active"></nj-switch>
    </div>
    <div class="container">
      <nj-switch v-model="active" activeColor="red" inactiveColor="blue"></nj-switch>
    </div>
    <div class="container">
      <nj-switch v-model="active" activeColor="white" inactiveColor="black" name="username"></nj-switch>
    </div>
    <div class="container">
      <nj-radio label="0" v-model="gender">男</nj-radio>
      <nj-radio label="1" v-model="gender">女</nj-radio>
    </div>
    <div class="container">
      <nj-radio label="0" v-model="gender"></nj-radio>
      <nj-radio label="1" v-model="gender"></nj-radio>
    </div>
    <div class="container">
      <nj-radio-group v-model="game">
        <nj-radio label="0">英雄联盟</nj-radio>
        <nj-radio label="1">Pubg</nj-radio>
        <nj-radio label="2">H1Z1</nj-radio>
      </nj-radio-group>
    </div>
    <div class="container">
      <nj-checkbox v-model="checked">是否选中</nj-checkbox>
    </div>
    <div class="container">
      <nj-checkbox-group v-model="selectAns">
        <nj-checkbox label="A"></nj-checkbox>
        <nj-checkbox label="B"></nj-checkbox>
        <nj-checkbox label="C"></nj-checkbox>
      </nj-checkbox-group>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NjInput from "./components/Input.vue";
import NjSwitch from "./components/Switch.vue";
import NjRadio from "./components/Radio.vue";
import NjRadioGroup from "./components/RadioGroup.vue";
import NjCheckbox from "./components/Checkbox.vue";
import NjCheckboxGroup from "./components/CheckboxGroup.vue";

@Component({
  components: {
    NjInput,
    NjSwitch,
    NjRadio,
    NjRadioGroup,
    NjCheckbox,
    NjCheckboxGroup
  }
})
export default class Form extends Vue {
  data() {
    return {
      username: "",
      password: "",
      active: false,
      gender: "0",
      game: 0,
      checked: false,
      selectAns: ["A", "B", "C"]
    };
  }
}
</script>


<style lang="scss" scope>
.root {
  width: 100vw;
  height: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container {
  width: 300px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
