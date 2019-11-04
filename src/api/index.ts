import request from '@/utils/request';

export const fetchUsers = () => {
  return request({
    url: 'users',
    method: 'GET',
  });
};
