<template>
  <transition name="dialog-transition">
    <div class="nj-dialog-wrapper" v-show="visible" @click.self="dialogColse">
      <div class="nj-dialog" :style="{width:width,marginTop:top}">
        <div class="nj-dialog-header">
          <slot name="title">
            <span class="nj-dialog-title">{{title}}</span>
          </slot>
          <button class="nj-icon-headerbtn" @click="dialogColse">
            <i icon="nj-icon-close"></i>
          </button>
        </div>
        <div class="nj-dialog-body">
          <slot></slot>
        </div>
        <div class="nj-dialog-footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";

@Component({
  components: {}
})
export default class NjDialog extends Vue {
  @Prop(String) private title: string | undefined;
  @Prop(String) private width: string | undefined;
  @Prop(String) private top: string | undefined;
  @Prop(Boolean) private visible: boolean | undefined = false;

  // 使用.sync语法糖
  @Emit("update:visible") private send(value: boolean) {
    //do something
  }
  private dialogColse(value: boolean) {
    this.send(false);
  }
}
</script>

<style lang="scss" scope>
.nj-dialog-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 1111;
  background-color: rgba(0, 0, 0, 0.5);
  .nj-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;
  }
  .nj-dialog-header {
    padding: 20px 20px 10px;
    .nj-dialog-title {
      line-height: 24px;
      font-size: 18px;
      color: #303133;
    }
    .nj-icon-headerbtn {
      position: absolute;
      top: 20px;
      right: 20px;
      padding: 0;
      background: transparent;
      border: none;
      outline: none;
      cursor: pointer;
      font-size: 16px;
      i {
        color: #909399;
      }
    }
  }
  .nj-dialog-body {
    padding: 30px 20px;
    color: #606266;
    font-size: 14px;
    word-break: break-all;
  }
  .nj-dialog-footer {
    padding: 10px 20px 20px;
    text-align: right;
    box-sizing: border-box;
    .nj-button:first-child {
      margin-right: 20px;
    }
  }
}
.dialog-transition-enter-active {
  animation: fade 0.8s;
}
.dialog-transition-leave-active {
  animation: fade 0.8s reverse;
}
@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(-50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
