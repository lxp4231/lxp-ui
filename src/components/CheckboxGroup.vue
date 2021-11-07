<template>
  <div class="nj-checkbox-group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Provide, Emit } from "vue-property-decorator";

@Component
export default class NjCheckboxGroup extends Vue {
  @Prop(Array) private value: Array<any>;

  @Provide("CheckGroup") CheckGroup = this;
  @Emit("input") private emitChangeValue(value: Array<any>) {
    //do something
  }
}
</script>


<style lang="scss" scope>
</style>
