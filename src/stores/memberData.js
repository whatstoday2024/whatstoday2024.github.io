import { defineStore } from 'pinia';

export default defineStore('memberData', {
  state: () => ({
    memberData: {}
  }),
  actions: {
    setMemberData(data){
      this.memberData = data
    },
  },
})