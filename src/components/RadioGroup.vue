<template>
  <div class="nj-radio-group">
    <slot></slot>
  </div>
</template>


<script lang="ts">
import { Component, Vue, Prop, Provide, Emit } from "vue-property-decorator";

@Component
export default class NjRadioGroup extends Vue {
  @Prop() private value: any;
  @Provide("RadioGroup") RadioGroup = this;
  @Emit("input") private emitChangeValue(value: any) {
    // do something
  }
}
</script>


<style lang="scss" scope>
</style>