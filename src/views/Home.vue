<template>
  <div class="home">
    <h1>{{ count }}</h1>
    <van-button type="primary" @click="increment(1)">+</van-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter, Mutation } from 'vuex-class';
import { Button } from 'vant';

const namespace: string = 'home';

@Component({
  components: {
    [Button.name]: Button,
  },
})
export default class Home extends Vue {
  @Getter('count', { namespace }) private count: number | undefined;

  @Mutation('increment', { namespace }) private increment: (() => void | undefined) | undefined;
}
</script>
