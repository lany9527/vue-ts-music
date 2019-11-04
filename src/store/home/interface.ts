// 接口管理
export interface User {
  id: string;
  icon: string;
  name: string;
  address: string;
  birthday: string;
}
export interface HomeState {
  count: number;
  users: User[];
}


