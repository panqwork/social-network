import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '601892c2-25f3-41e4-bb98-fa85cecf4f72',
  }
})

export const usersAPI = {
  setUsers: (currentPage, pageSize) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
  },
  followSwitch: (type, userId) => {
    switch(type) {
      case 'delete':
        return instance.delete('follow/' + userId).then(response => response.data.resultCode);
      case 'post':
        return instance.post('follow/' + userId).then(response => response.data.resultCode);
    }
  }
}

export const authAPI = {
  isAuth: () => {
    return instance.get('auth/me').then(response => response.data)
  },
  login: ({email, password, rememberMe, captcha}) => {
    return instance.post('auth/login', {email,password,rememberMe, captcha}).then(response => response.data)
  },
  logout: () => {
    return instance.delete('auth/login').then(response => response.data)
  }
}

export const profileAPI = {
  requireProfile: (userId) => {
    return instance.get('profile/' + userId)
  },
  getUserStatus: (userId) => {
    return instance.get('profile/status/' + userId).then(response => response.data)
  },
  updateUserStatus: (status) => {
    return instance.put('profile/status', {
      status: status
    })
  }
}