<template>
  <div class="root">
    <nj-form v-model="model" label-width="60px">
      <nj-form-item label="用户名">
        <nj-input placeholder="请输入用户名" type="text" v-model="model.username" clearable></nj-input>
      </nj-form-item>
      <nj-form-item label="密码">
        <nj-input placeholder="请输入密码" type="password" v-model="model.password" showPwd></nj-input>
      </nj-form-item>
      <nj-form-item label="radio">
        <nj-radio-group v-model="model.hobbies">
          <nj-radio label="0">男</nj-radio>
          <nj-radio label="1">女</nj-radio>
          <nj-radio label="2">保密</nj-radio>
        </nj-radio-group>
      </nj-form-item>
      <nj-form-item label="switch">
        <nj-switch v-model="model.active"></nj-switch>
      </nj-form-item>
    </nj-form>
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
import NjForm from "./components/Form.vue";
import NjFormItem from "./components/FormItem.vue";

@Component({
  components: {
    NjInput,
    NjSwitch,
    NjRadio,
    NjRadioGroup,
    NjCheckbox,
    NjCheckboxGroup,
    NjForm,
    NjFormItem
  }
})
export default class Form extends Vue {
  data() {
    return {
      model: {
        username: "",
        password: "",
        hobbies: [],
        active: false
      }
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
</style>
