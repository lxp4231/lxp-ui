<template>
  <label class="nj-radio" :class="{'nj-radio-checked':label === radioValue}">
    <span class="nj-radio-input">
      <span class="nj-radio-inner"></span>
      <input
        type="radio"
        class="nj-radio-original"
        :value="label"
        :name="name"
        v-model="radioValue"
      />
    </span>
    <span class="nj-radio-label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop,
  Emit,
  Model,
  Inject
} from "vue-property-decorator";
@Component
export default class NjRadio extends Vue {
  @Inject({ from: "RadioGroup", default: "" }) readonly RadioGroup!: object;
  @Prop()
  private label: string | boolean | number | undefined;
  @Prop() private value: any;
  @Prop(String) private name: string | undefined;
  @Emit("input") private emitChangeValue(value: any) {
    // do something
  }
  private get radioValue() {
    return this.isGroup ? (this as any).RadioGroup.value : this.value;
  }
  private set radioValue(value) {
    this.isGroup
      ? (this as any).RadioGroup.emitChangeValue(value)
      : this.emitChangeValue(value);
  }
  private get isGroup() {
    return !!this.RadioGroup;
  }
}
</script>

<style lang="scss" scope>
.nj-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  .nj-radio-input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .nj-radio-inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &::after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.15s ease-in;
      }
    }

    .nj-radio-original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .nj-radio-label {
    font-size: 14px;
    padding-left: 10px;
  }
}
.nj-radio-checked {
  .nj-radio-input {
    .nj-radio-inner {
      border-color: #409eff;
      background: #409eff;
      &::after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .nj-radio-label {
    color: #409eff;
  }
}
</style>