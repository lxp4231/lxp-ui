<template>
  <div class="nj-form-item">
    <label class="nj-form-item-label" :style="{width:this.Form.labelWidth}">{{label}}</label>
    <div class="nj-form-item-content">
      <slot></slot>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue, Prop, Inject } from "vue-property-decorator";

@Component
export default class NjFormItem extends Vue {
  @Inject({ from: "Form" }) Form!: string;
  @Prop(String) private label: string | undefined;
}
</script>


<style lang="scss" scope>
.nj-form-item {
  margin-bottom: 25px;
  .nj-form-item-label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .nj-form-item-content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hidden;
  }
}
</style>