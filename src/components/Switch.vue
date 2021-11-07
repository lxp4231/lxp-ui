<template>
  <div class="nj-switch" @click="changeActive" :class="{'nj-switch-checked':value}">
    <span
      class="nj-switch-core"
      :style="{'--color-active':ActiveColor,'--color-inactive':InactiveColor}"
    >
      <span class="nj-switch-button"></span>
    </span>
    <input class="nj-switch-input" type="checkbox" :name="name" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";

@Component
export default class NjSwitch extends Vue {
  @Prop(Boolean) private value: boolean | undefined;
  @Prop(String) private activeColor: string | undefined;
  @Prop(String) private inactiveColor: string | undefined;
  @Prop(String) private name: string | undefined;

  @Emit("input") private emitChangeActive(value) {
    // do something
  }
  private get ActiveColor() {
    if (this.activeColor) {
      return this.activeColor;
    } else {
      return "#409eff";
    }
  }
  private get InactiveColor() {
    if (this.inactiveColor) {
      return this.inactiveColor;
    } else {
      return "#dcdfe6";
    }
  }
  private changeActive(value) {
    this.emitChangeActive(!this.value);
  }
}
</script>

<style lang="scss" scope>
.nj-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  .nj-switch-input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .nj-switch-core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid var(--color-inactive);
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: var(--color-inactive);
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .nj-switch-button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}
.nj-switch-checked {
  .nj-switch-core {
    border-color: var(--color-active);
    background-color: var(--color-active);
    .nj-switch-button {
      transform: translate(20px);
    }
  }
}
</style>