<template>
  <div class="home">
<!--    <h1>{{ count }}</h1>-->
<!--    <van-button type="primary" @click="increment(1)">+</van-button>-->
    <list-item
      v-for="user in users"
      :key="user.id"
      :name="user.name"
      :address="user.address"
      :birthday="user.birthday"></list-item>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter, Mutation, Action, State, namespace } from 'vuex-class';
import { Button } from 'vant';
import { User } from '@/store/home/interface';

import ListItem from './components/ListItem.vue';

// 使用 namespace('path/to/module') 装饰器
// 参考 https://segmentfault.com/a/1190000019906575
const homeModule = namespace('home');

interface ListState {
  title: string;
  date: string;
  address: string;
}

@Component({
  components: {
    [Button.name]: Button,
    ListItem,
  },
})
export default class Home extends Vue {
  // private List: {title: string, date:string, address: string}[] = [
  /*private list: ListState[] = [
    {
      title: 'MTSC2019 深圳站大会',
      date: '2019 年 12 月 14 日',
      address: '中国·深圳科兴科学园国际会议中心',
    },
    {
      title: '2019 成都 Web 全栈大会',
      date: '成都市高新区天府五街 菁蓉国际广场 7 号楼主会场',
      address: '2019 年 11 月 16 ~ 17 日 09:00 ~ 18:00',
    },
    {
      title: '2019 freeCodeConf 西安站',
      date: '2019年11月16日 10:00 ～ 2019年11月16日 17:00',
      address: '陕西西安软件新城软件研发基地2期C1栋 阿里巴巴丝路总部 19楼',
    },
    {
      title: '全球架构师峰会',
      date: '2019年12月06-07日',
      address: '北京 · 国际会议中心',
    },
    {
      title: '腾讯前端技术大会',
      date: '2019-11-16 09:00 - 18:00',
      address: '科兴国际会议中心,深圳',
    },
  ];*/
  // TODO ts computed 写法 监听users的变化 渲染页面
    // typescript computed 写法2
  @homeModule.State('users') private users!: User[];
    // typescript computed 写法3
  // @homeModule.Getter('users') private users!: User[];
  @homeModule.Getter('count') private count!: number;

  @homeModule.Mutation('increment') private increment: (() => void | undefined) | undefined;

  @homeModule.Action('fetchUsers') private fetchUsers!: () => any;

  private created() {
    this.fetchUsers().then();
  }

  // typescript computed 写法1
  // get users(): User[] {
  //     console.log('this.$store.state.users -->', this.$store.state.home.users);
  //     return this.$store.state.home.users;
  // }
}
</script>
