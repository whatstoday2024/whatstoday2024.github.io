<template>
  <loadingVue :active="isLoading" />
  <RouterView @update-profile="updateProfile" v-if="isRouterAlive" />
  <div class="flex-fill" v-else></div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { toast } from 'vue3-toastify'
import memberData from '@/stores/memberData'

export default {
  data () {
    return {
      isRouterAlive: false,
      isLoading: false
    }
  },
  computed: {
    ...mapState(memberData, ['memberData', 'hasCheckLogin'])
  },
  watch: {
    hasCheckLogin () {
      this.checkStatus()
    }
  },
  methods: {
    checkStatus () {
      if (this.hasCheckLogin) {
        if (!this.memberData.email) {
          this.redirect()
        } else {
          this.isRouterAlive = true
        }
        this.isLoading = false
      }
    },
    redirect () {
      this.isLoading = false
      const delay = 1000
      toast.error('請先登入', {
        autoClose: delay
      })
      setTimeout(() => {
        this.$router.replace({ name: 'Login' })
      }, delay)
    },
    async updateProfile ({ status, message }) {
      this.isRouterAlive = false
      toast[status](message)
      await this.getUser()
      this.isRouterAlive = true
    },
    ...mapActions(memberData, ['getUser'])
  },
  mounted () {
    this.isLoading = true
    this.checkStatus()
  }
}
</script>

<style lang="scss" scoped></style>
