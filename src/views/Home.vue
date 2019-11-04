<template>
  <div class="home">
    <h1>Home</h1>
    <button></button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Button from '@/components/Button.vue';

@Component({
  components: {
    Button,
  },
})
export default class Home extends Vue {}
</script>
