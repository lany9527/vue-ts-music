<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ address }}</p>
    <p>{{ date }}</p>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
  export default class ListItem extends Vue {
    @Prop({default: ''}) private title: string | undefined;
    @Prop({default: ''}) private address: string | undefined;
    @Prop({default: ''}) private date: string | undefined;
  }
</script>

<style scoped>

</style>
