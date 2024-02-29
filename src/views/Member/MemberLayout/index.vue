<template>
  <loadingVue :active="isLoading" />
  <RouterView @update-profile="updateProfile" v-if="isRouterAlive"/>
  <div class="flex-fill" v-else></div>
</template>

<script>
import memberStore from '@/stores/memberData'
import { mapActions, mapState } from 'pinia'
import { toast } from 'vue3-toastify';

export default {
  data() {
    return {
      isRouterAlive: false,
      isLoading: false
    }
  },
  computed: {
    ...mapState(memberStore, ['memberData', 'hasCheckLogin'])
  },
  watch: {
    hasCheckLogin(){
      this.checkStatus()
    }
  },
  methods: {
    checkStatus(){
      if(this.hasCheckLogin){
        if(!this.memberData.email){
          this.redirect()
        }else{
          this.isRouterAlive = true
        }
      }
    },
    redirect(){
      this.isLoading = false
      const delay = 1000
      toast.error('請先登入', {
        autoClose: delay,
      })
      setTimeout(() => {
        this.$router.replace({name: 'Login'})
      }, delay)
    },
    async updateProfile({ status, message }){
      this.isRouterAlive = false
      toast[status](message)
      await this.checkAuth()
      this.isRouterAlive = true
    },
    ...mapActions(memberStore, ['checkAuth'])
  },
  mounted(){
    this.checkStatus()
  }
};
</script>

<style lang="scss" scoped></style>