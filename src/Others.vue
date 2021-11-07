<template>
  <div class="root">
    <!-- <nj-dialog title="温馨提示"></nj-dialog> -->
    <!-- <nj-dialog>
      <template v-slot:title>
        <h3>我是标题</h3>
      </template>
    </Njdialog>-->
    <!-- <Njdialog width="40%" top="200px">123</nj-dialog> -->

    <!-- <nj-dialog width="20%" top="200px">
      <template v-slot:title>
        <h3>我是标题</h3>
      </template>
      123
      <template v-slot:footer>
        <nj-button>取消</nj-button>
        <nj-button type="warning">确定</nj-button>
      </template>
    </nj-dialog>-->
    <nj-button type="primary" @click="visible = true">对话框</nj-button>
    <nj-dialog title="温馨提示" :visible.sync="visible">
      <template v-slot:footer>
        <nj-button @click="visible = false">取消</nj-button>
        <nj-button type="warning">确定</nj-button>
      </template>
    </nj-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NjButton from "@/components/Button.vue";
import NjDialog from "@/components/Dialog.vue";

@Component({
  components: {
    NjButton,
    NjDialog
  }
})
export default class Diolag extends Vue {
  data() {
    return {
      visible: false
    };
  }

  // private close(visible: boolean, value: boolean) {
  //   (this as any).visible = value;
  // }
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
</style>
