<template>
  <div class="nj-from">
    <slot></slot>
  </div>
</template>


<script lang="ts">
import { Component, Vue, Prop, Provide } from "vue-property-decorator";

@Component
export default class NjForm extends Vue {
  @Prop() private model: any;
  @Prop({ default: "80px" }) private labelWidth: string | undefined;

  @Provide("Form") Form = this;
}
</script>


<style lang="scss" scope>
</style>