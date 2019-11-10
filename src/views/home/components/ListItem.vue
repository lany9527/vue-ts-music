<template>
  <div>
    <h1>{{ name }}</h1>
    <p>{{ address }}</p>
    <p>{{ birthday }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component
export default class ListItem extends Vue {
  @Prop({ type: String, default: '-'})
  private name: string | undefined;
  @Prop({ type: String, default: '-'})
  private address: string | undefined;
  @Prop({ type: String, default: '-'})
  private birthday: string | undefined;
}
</script>

<style scoped>

</style>
