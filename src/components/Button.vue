<template>
  <button
    class="nj-button"
    @click="onClickBtn"
    :class="[`nj-btn--${type}`,
    {'nj-btn--plain':plain},
    {'nj-btn--tile':tile},
    {'nj-btn--circle':circle},
    {'nj-btn--rounded':rounded},
    `nj-btn--${size}`,
    {'nj-btn-disabled':disabled}]"
  >
    <i v-if="icon" :class="icon"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";

@Component({})
export default class NjButton extends Vue {
  @Prop(String) private type: string | undefined; //primary success info warning danger
  @Prop(Boolean) private plain: boolean | undefined;
  @Prop(Boolean) private tile: boolean | undefined;
  @Prop(Boolean) private rounded: boolean | undefined;
  @Prop(Boolean) private circle: boolean | undefined;
  @Prop(String) private size: string | undefined;
  @Prop(String) private icon: string | undefined;
  @Prop(Boolean) private disabled: boolean | undefined;

  @Emit("click") private emitClickEvent(event: MouseEvent) {
    // do something
  }
  private onClickBtn(event: MouseEvent) {
    if (!this.disabled) {
      this.emitClickEvent(event);
    }
  }
}
</script>

<style lang="scss" scope>
@mixin changeType(
  $color,
  $background-color,
  $border-color,
  $--background,
  $--border-color,
  $--color
) {
  color: $color;
  background-color: $background-color;
  border-color: $border-color;
  &:hover,
  &:focus {
    background: $--background;
    border-color: $--border-color;
    color: $--color;
  }
}
@mixin changePlain(
  $--plain-color,
  $--plain-background-color,
  $--plain-border-color,
  $--plain--background,
  $--plain--border-color,
  $--plain--color
) {
  color: $--plain-color;
  background-color: $--plain-background-color;
  border-color: $--plain-border-color;
  &:hover,
  &:focus {
    background: $--plain--background;
    border-color: $--plain--border-color;
    color: $--plain--color;
  }
}
@mixin changeSize($padding, $font-size, $border-radius) {
  padding: $padding;
  font-size: $font-size;
  border-radius: $border-radius;
}
.nj-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #ffffff;
  border: 1px solid #dcdfe6;
  border-color: #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
  &.nj-btn--plain {
    &:hover,
    &:focus {
      color: #409eff;
      border-color: #409eff;
      background-color: #fff;
    }
  }
  &.nj-btn--primary {
    @include changeType(#fff, #409eff, #409eff, #66b1ff, #66b1ff, #fff);
    &.nj-btn--plain {
      @include changePlain(#409eff, #ecf5ff, #b3d8ff, #409eff, #409eff, #fff);
    }
  }
  &.nj-btn--success {
    @include changeType(#fff, #67c23a, #67c23a, #85ce61, #85ce61, #fff);
    &.nj-btn--plain {
      @include changePlain(#67c23a, #f0f9eb, #c2e7b0, #67c23a, 67c23a, #fff);
    }
  }
  &.nj-btn--info {
    @include changeType(#fff, #909399, #909399, #a6a9ad, #a6a9ad, #fff);
    &.nj-btn--plain {
      @include changePlain(#909399, #f4f4f5, #d3d4d6, #909399, #909399, #fff);
    }
  }
  &.nj-btn--warning {
    @include changeType(#fff, #e6a23c, #e6a23c, #ebb563, #ebb563, #fff);
    &.nj-btn--plain {
      @include changePlain(#e6a23c, #fdf6ec, #f5dab1, #e6a23c, #e6a23c, #fff);
    }
  }
  &.nj-btn--danger {
    @include changeType(#fff, #f56c6c, #f56c6c, #f78989, #f78989, #fff);
    &.nj-btn--plain {
      @include changePlain(#f56c6c, #fef0f0, #fbc4c4, #f56c6c, #f56c6c, #fff);
    }
  }
  &.nj-btn--rounded {
    border-radius: 20px;
    padding: 12px 23px;
  }
  &.nj-btn--tile {
    border-radius: 0;
  }
  &.nj-btn--circle {
    border-radius: 50%;
    padding: 10px;
  }
  &.nj-btn--md {
    @include changeSize(10px 20px, 14px, 4px);
  }
  &.nj-btn--sm {
    @include changeSize(9px 15px, 12px, 3px);
  }
  &.nj-btn--mn {
    @include changeSize(7px 15px, 12px, 3px);
  }
  &.nj-button [class*="nj-icon-"] + span {
    margin-left: 5px;
  }
  &.nj-btn-disabled {
    background: #f5f5f5;
    color: #c5c8ce;
    cursor: not-allowed;
  }
}
</style>
