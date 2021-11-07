<template>
  <label class="nj-checkbox" :class="{'nj-checkbox-checked':isChecked}">
    <span class="nj-checkbox-input">
      <span class="nj-checkbox-inner"></span>
      <input
        type="checkbox"
        class="nj-checkbox-original"
        :name="name"
        v-model="model"
        :value="label"
      />
    </span>
    <span class="nj-checkbox-label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>


<script lang="ts">
import { Component, Vue, Prop, Emit, Inject } from "vue-property-decorator";

@Component
export default class NjCheckbox extends Vue {
  @Inject({ from: "CheckGroup", default: "" }) readonly CheckGroup!: any[];
  @Prop(Boolean) private value: boolean | undefined;
  @Prop(String) private label: string | undefined;
  @Prop(String) private name: string | undefined;

  @Emit("input") private emitChangeCheck(value: boolean) {
    //do something
  }
  private get model() {
    return this.isGroup ? (this as any).CheckGroup.value : this.value;
  }
  private set model(value) {
    this.isGroup
      ? (this as any).CheckGroup.emitChangeValue(value)
      : this.emitChangeCheck(value);
  }
  private get isGroup() {
    return !!this.CheckGroup;
  }
  private get isChecked() {
    return this.isGroup ? this.model.includes(this.label) : this.model;
  }
}
</script>


<style lang="scss" scope>
.nj-checkbox {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
  margin-right: 30px;
  .nj-checkbox-input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .nj-checkbox-inner {
      display: inline-block;
      position: relative;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      background-color: #fff;
      z-index: 1;
      transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
        background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
      &::after {
        box-sizing: content-box;
        content: "";
        border: 1px solid #fff;
        border-left: 0;
        border-top: 0;
        height: 7px;
        left: 4px;
        position: absolute;
        top: 1px;
        transform: rotate(45deg) scaleY(0);
        width: 3px;
        transition: transform 0.15s ease-in 0.05s;
        transform-origin: center;
      }
    }
    .nj-checkbox-original {
      opacity: 0;
      outline: none;
      position: absolute;
      left: 10px;
      margin: 0;
      width: 0;
      height: 0;
      z-index: -1;
    }
  }
  .nj-checkbox-label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
  }
}
.nj-checkbox-checked {
  .nj-checkbox-input {
    .nj-checkbox-inner {
      background-color: #409eff;
      border-color: #409eff;
      &::after {
        transform: rotate(45deg) scaleY(1);
      }
    }
  }
  .nj-checkbox-label {
    color: #409eff;
  }
}
</style>