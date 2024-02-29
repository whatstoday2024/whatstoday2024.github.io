import { defineStore } from 'pinia';
import * as $cookie from '@/utils/cookie'
import axios from 'axios'

export default defineStore('memberData', {
  state: () => ({
    memberData: {},
    hasCheckLogin: false
  }),
  actions: {
    checkAuth(){
      this.hasCheckLogin = false
      const token = $cookie.getMemberToken();
      const id = $cookie.getMemberId();
      if(!token || !id) {
        this.memberData = {}
        this.hasCheckLogin = true
        return
      }
      return axios.get(`${import.meta.env.VITE_API_JSON_SERVER}/600/users/${id}`, {
        headers: {
          'Authorization': token
        }
      }).then((res) => {
        this.memberData = res.data.message
        this.hasCheckLogin = true
      }).catch(() => {
        this.hasCheckLogin = true
      });
    },
    setMemberData(data){
      this.memberData = data
    },
  },
})