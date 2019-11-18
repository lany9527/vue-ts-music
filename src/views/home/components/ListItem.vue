<template>
  <div class="list-item">
    <div class="icon-wrap">
      <img :src="icon" alt="">
    </div>
    <div class="info">
      <h3>{{ name }}</h3>
      <p>{{ address }}</p>
      <p class="birthday">{{ birthday }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ListItem extends Vue {
  @Prop({ type: String, default: '-'})
  private icon: string | undefined;
  @Prop({ type: String, default: '-'})
  private name: string | undefined;
  @Prop({ type: String, default: '-'})
  private address: string | undefined;
  @Prop({ type: String, default: '-'})
  private birthday: string | undefined;
}
</script>

<style scoped lang="less">
.list-item {
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #ddd;
  .icon-wrap {
    flex: 2;
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
  }
  .info {
    flex: 8;
    padding-left: 20px;
    h3, p {
      text-align: left;
    }
    .birthday {
      font-size: 14px;
      margin-top: 10px;
    }
  }
}
</style>
