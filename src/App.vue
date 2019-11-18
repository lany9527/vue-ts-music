<template>
  <div id="app">
    <div id="main">
      <!-- 路由出口 路由匹配到的组件将渲染在这里 -->
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
    <van-tabbar v-model="active" active-color="#07c160" inactive-color="#000">
      <van-tabbar-item icon="home-o">home</van-tabbar-item>
      <van-tabbar-item icon="search">search</van-tabbar-item>
      <van-tabbar-item icon="setting-o">setting</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Tabbar, TabbarItem } from 'vant';

// TS引用 vant 例子
// vue.use 会报错
@Component({
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
  },
})
export default class App extends Vue {
  public active: number = 0;
}
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  padding: 0;
  margin: 0;
}
</style>
