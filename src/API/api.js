import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'e9cfa886-9308-44ec-b928-1eb2cf84a1d9',
  }
})

export const usersAPI = {
  setUsers: (currentPage, pageSize) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
  },
  followSwitch: (type, userId) => {
    switch(type) {
      case 'delete':
        console.log(2);
        return instance.delete('follow/' + userId).then(response => response.data.resultCode);
      case 'post':
        return instance.post('follow/' + userId).then(response => response.data.resultCode);
    }
  }
}

export const authAPI = {
  isAuth: () => {
    return instance.get('auth/me').then(response => response.data)
  }
}

export const profileAPI = {
  requireProfile: (userId) => {
    return instance.get('profile/' + userId)
  }
}