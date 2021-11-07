<template>
  <div class="nj-input" :class="{'nj-input--suffix':showSuffix}">
    <input
      :type="showPwd?(passwordVisible?'text':'password'):type"
      class="nj-input-inner"
      :placeholder="placeholder"
      :name="name"
      :disabled="disabled"
      :class="{'nj-input-disabled':disabled}"
      :value="value"
      @input="changeValue"
      :clearable="clearable"
      :showPwd="showPwd"
    />
    <span class="nj-input-suffix" v-if="showSuffix">
      <i class="nj-icon-view" :class="{'nj-icon-view-active':passwordVisible}" v-if="showPwd" @click="changeView"></i>
      <i class="nj-icon-close" v-if="clearable && value" @click="clear"></i>
    </span>
  </div>
</template>


<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";

@Component
export default class NjInput extends Vue {
  @Prop(String) private placeholder: string | undefined;
  @Prop(String) private type: string | undefined;
  @Prop(String) private name: string | undefined;
  @Prop(Boolean) private disabled: boolean | undefined;
  @Prop(String) private value: string | undefined;
  @Prop(Boolean) private clearable: boolean | undefined;
  @Prop(Boolean) private showPwd: boolean | undefined;

  @Emit("input") private emitChangeValue(event: any) {
    // do something
  }
  @Emit("input") private emitClearValue(event: any) {
    // do something
  }
  data() {
    return {
      passwordVisible: false
    };
  }

  private get showSuffix() {
    return this.showPwd || this.clearable;
  }
  private changeView(passwordVisible: boolean) {
    return ((this as any).passwordVisible = !(this as any).passwordVisible);
  }

  private clear(event: any) {
    this.emitClearValue((event.target.value = ""));
  }
  private changeValue(event: any) {
    this.emitChangeValue(event.target.value);
  }
}
</script>


<style lang="scss" scope>
.nj-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .nj-input-inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    font-size: inherit;
    height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;
    &:focus {
      outline: none;
      border-color: #409eff;
    }
    &.nj-input-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
.nj-input--suffix {
  .nj-input-inner {
    padding-right: 30px;
  }
  .nj-input-suffix {
    position: absolute;
    height: 100%;
    right: 10px;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 1112;
  }
  i {
    color: #c0c4cc;
    font-size: 14px;
    cursor: pointer;
    transition: color 0.2s
      cubic-bezier(0.645, cubic-bezier(0.645, 0.045, 0.355, 1));
  }
  .nj-icon-view-active {
    color: blue;
  }
}
</style>
