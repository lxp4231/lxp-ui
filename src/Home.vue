<template>
  <div class="root">
    <div class="btn-container">
      <nj-button>默认按钮</nj-button>
      <nj-button type="primary">主要按钮</nj-button>
      <nj-button type="success">成功按钮</nj-button>
      <nj-button type="info">信息按钮</nj-button>
      <nj-button type="warning">警告按钮</nj-button>
      <nj-button type="danger">危险按钮</nj-button>
    </div>
    <div class="btn-container">
      <nj-button plain>朴素按钮</nj-button>
      <nj-button plain type="primary">主要按钮</nj-button>
      <nj-button plain type="success">成功按钮</nj-button>
      <nj-button plain type="info">信息按钮</nj-button>
      <nj-button plain type="warning">警告按钮</nj-button>
      <nj-button plain type="danger">危险按钮</nj-button>
    </div>
    <div class="btn-container">
      <nj-button rounded>圆角按钮</nj-button>
      <nj-button rounded type="primary">主要按钮</nj-button>
      <nj-button rounded type="success">成功按钮</nj-button>
      <nj-button rounded type="info">信息按钮</nj-button>
      <nj-button rounded type="warning">警告按钮</nj-button>
      <nj-button rounded type="danger">危险按钮</nj-button>
    </div>
    <div class="btn-container">
      <nj-button tile>方形按钮</nj-button>
      <nj-button tile type="primary">主要按钮</nj-button>
      <nj-button tile type="success">成功按钮</nj-button>
      <nj-button tile type="info">信息按钮</nj-button>
      <nj-button tile type="warning">警告按钮</nj-button>
      <nj-button tile type="danger">危险按钮</nj-button>
    </div>
    <div class="btn-container">
      <nj-button circle icon="nj-icon-search"></nj-button>
      <nj-button circle icon="nj-icon-shop" type="primary"></nj-button>
      <nj-button circle icon="nj-icon-write" type="success"></nj-button>
      <nj-button circle icon="nj-icon-transmit" type="info"></nj-button>
      <nj-button circle icon="nj-icon-share" type="warning"></nj-button>
      <nj-button circle icon="nj-icon-setting" type="danger"></nj-button>
    </div>
    <div class="btn-container">
      <nj-button icon="nj-icon-search">图标文字</nj-button>
      <nj-button icon="nj-icon-shop" type="primary">主要按钮</nj-button>
      <nj-button icon="nj-icon-write" type="success">成功按钮</nj-button>
      <nj-button icon="nj-icon-transmit" type="info">信息按钮</nj-button>
      <nj-button icon="nj-icon-share" type="warning">警告按钮</nj-button>
      <nj-button icon="nj-icon-setting" type="danger">危险按钮</nj-button>
    </div>
    <div class="btn-container">
      <nj-button>默认按钮</nj-button>
      <nj-button size="md" type="primary">中等按钮</nj-button>
      <nj-button size="sm" type="primary">小型按钮</nj-button>
      <nj-button size="mn" type="primary">超小按钮</nj-button>
    </div>
    <div class="btn-container">
      <nj-button disabled @click="onClick">禁用按钮</nj-button>
      <nj-button @click="onClick" type="primary">主要按钮</nj-button>
      <nj-button @click="onClick" type="success">成功按钮</nj-button>
      <nj-button @click="onClick" type="info">信息按钮</nj-button>
      <nj-button @click="onClick" type="warning">警告按钮</nj-button>
      <nj-button @click="onClick" type="danger">危险按钮</nj-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NjButton from "@/components/Button.vue";

@Component({
  components: {
    NjButton
  }
})
export default class Home extends Vue {
  private onClick(event: MouseEvent) {
    console.log(event);
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
.btn-container {
  width: 900px;
  height: 160px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
