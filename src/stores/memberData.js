import { defineStore } from 'pinia';
import axios from 'axios'
import { getMemberToken, getMemberId } from '@/utils/cookie';

export default defineStore('memberData', {
  state: () => ({
    memberData: {}
  }),
  actions: {
    setMemberData(data){
      this.memberData = data
    },
    getUser(){
      const token = getMemberToken();
      const id = getMemberId();
      if(!token || !id) {
        return
      } 
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      axios.get(`${import.meta.env.VITE_APP_SERVER_URL}/600/users/${id}`)
        .then((res) => {
          this.setMemberData(res.data.message)
        }).catch(() => {
          this.setMemberData({})
        });
    },
    checkIsAdmin(){
      if(!this.memberData.isAdmin){
        return false
      }else{
        return true
      }
    },
  },
})