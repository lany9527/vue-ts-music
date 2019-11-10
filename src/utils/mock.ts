import { baseURL } from './constant';
import * as Mock from 'mockjs';
const Random = Mock.Random;

const pool = 'abcdefghijklmnopqrstuvwxyz-0123456789-ABCDEFGHIJKLMNOPQRSTUVWXYZ';

Mock.mock(`${baseURL}users`, {'list|10-200': [{
  id: () => Random.string(pool, 32, 32),
  icon: () => Random.image('200x100', Random.color(), '#FFF', 'png', '!'),
  name: () => Random.ctitle(),
  address: () => Random.province() + Random.city() + Random.county(),
  birthday: () => Random.date('yyyy/MM/dd') + ' ' + Random.time(),
}]});

export default Mock;
