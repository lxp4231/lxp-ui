<template>
  <div id="app">
    <!-- <Home></Home> -->
    <!-- <Form></Form> -->
    <FormAll></FormAll>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Home from "@/Home.vue";
import Others from "@/Others.vue";
import Form from "@/Form.vue";
import FormAll from "@/FormAll.vue";

@Component({
  components: {
    Home,
    Others,
    Form,
    FormAll
  }
})
export default class App extends Vue {}
</script>
