<template>
  <loadingVue :active="isLoading" />
  <RouterView @update-profile="updateProfile" v-if="isRouterAlive"/>
</template>

<script>
import memberStore from '@/stores/memberData'
import { mapActions } from 'pinia'
export default {
  data() {
    return {
      isRouterAlive: true,
      isLoading: false
    }
  },
  methods: {
    checkAuth(){
      const token = this.$cookie.getMemberToken();
      const id = this.$cookie.getMemberId();
      if(!token || !id) {
        this.redirect()
        return
      }
      this.isLoading = true
      this.axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      this.axios.get(`${import.meta.env.VITE_APP_SERVER_URL}/600/users/${id}`)
        .then((res) => {
          this.setMemberData(res.data.message)
          this.isLoading = false
        }).catch(() => {
          this.redirect()
        });
    },
    redirect(){
      this.isLoading = false
      alert('請先登入')
      this.$router.replace({name: 'Login'})
    },
    async updateProfile(){
      this.isRouterAlive = false
      await this.checkAuth()
      this.isRouterAlive = true
    },
    ...mapActions(memberStore, ['setMemberData'])
  },
  created(){
    this.checkAuth()
  }
};
</script>

<style lang="scss" scoped></style>