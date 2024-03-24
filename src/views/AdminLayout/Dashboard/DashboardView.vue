<template>
  <loadingVue :active="isLoading" />
  <div class="flex-fill d-flex align-items-center">
    <div class="container py-5">
      <h2 class="mb-4">後台管理系統</h2>
      <div class="row g-4">
        <div class="col-12 box" @click="goToAllItems">
          <div class="border border-primary rounded-4 p-5 text-center">
            <h5 class="fs-4">當前菜色總數</h5>
            <p class="mb-0" style="font-size: 8rem; line-height: 0.8;">{{ total }}</p>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="border border-primary bg-primary-light rounded-4 p-5 h-100 text-center">
            <h5 class="mb-4 fs-4">會員總數</h5>
            <p class="mb-0" style="font-size: 8rem; line-height: 0.8;">{{ members }}</p>
          </div>
        </div>
        <div @click="goToAddPage" class="col-lg-6 box">
          <div class="border border-primary rounded-4 p-5 h-100 text-center">
            <h5 class="mb-4 fs-4">新增菜色</h5>
            <Plus style="width: 100px; height: 100px ;cursor: pointer;"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import memberStore from '@/stores/memberData'
import { mapState, mapActions } from 'pinia'
import { Plus } from '@element-plus/icons-vue'

export default {
  data () {
    return {
      isLoading: false,
      total: '',
      members: ''
    }
  },
  components: {
    Plus
  },
  computed: {
    ...mapState(memberStore, ['checkIsAdmin'])
  },
  methods: {
    async getItemsQty () {
      const res = await axios.get(`${import.meta.env.VITE_APP_SERVER_URL}/dishes`)
      this.total = res.data.message.length
    },
    async getMembers () {
      const res = await axios.get(`${import.meta.env.VITE_APP_SERVER_URL}/users`)
      this.members = res.data.message.length - 1
    },
    goToAddPage () {
      this.$router.push('/admin/add-item')
    },
    goToAllItems () {
      this.$router.push({ name: 'AdminItems' })
    },
    ...mapActions(memberStore, ['checkIsAdmin', 'getUser'])
  },
  async mounted () {
    document.title = '後台管理'
    this.isLoading = true
    await this.getUser()
    if (!this.checkIsAdmin()) {
      toast.error('非管理者無法執行')
      this.$router.push('/')
    }
    await this.getItemsQty()
    await this.getMembers()

    this.isLoading = false
  }
}
</script>

<style lang="scss" scoped>
.box{
  transition: all 0.5s;

  &:hover{
    cursor: pointer;
    transform: translateY(-3px)
  }

  &:active{
    transform: translateY(5px)
  }
}
</style>
