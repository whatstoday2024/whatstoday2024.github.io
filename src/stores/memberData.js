import { defineStore } from 'pinia';
import axios from 'axios'
import * as $cookie from '@/utils/cookie'

export default defineStore('memberData', {
  state: () => ({
    memberData: {},
    hasCheckLogin: false
  }),
  actions: {
    setMemberData(data){
      this.memberData = data
    },
    async getUser(){ 
      this.hasCheckLogin = false
      const token = $cookie.getMemberToken();
      const id = $cookie.getMemberId();
      if(!token || !id) {
        this.setMemberData({})
        this.hasCheckLogin = true
        return
      } 

      try{
        axios.defaults.headers.common.Authorization = token;
        const res = await axios.get(`${import.meta.env.VITE_APP_SERVER_URL}/600/users/${id}`)
        this.setMemberData(res.data.message)
        this.hasCheckLogin = true
        }catch(error){
        this.setMemberData({})
        this.hasCheckLogin = true
      }   
    },
    checkIsAdmin(){
      if(!this.memberData?.isAdmin){
        return false
      }else{
        return true
      }
    },
  },
})