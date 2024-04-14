<template>
  <loadingVue :active="isLoading" />
  <section class="container my-5 text-center">
    <div class="text-start mb-5 d-flex justify-content-between">
      <h3>菜色列表</h3>
      <div>
        <form class="search-input input-group" @submit.prevent="getItems">
          <input type="text" class="form-control" placeholder="搜尋菜色" aria-label="Search"
            aria-describedby="Input Box For Searching Dishes" size="10" v-model.trim="searchInput">
          <button type="button" class="btn btn-outline-primary search" id="button-addon2" @click="getItems">
            <Search style="width: 18px; height: 18px;" class="" />
          </button>
        </form>
      </div>
      <div>
        <button type="button" class="btn btn-outline-primary me-2">
          <RouterLink class="navbar-brand search" to="/admin/dashboard">
            <span class="d-none d-md-block">Dashboard</span>
            <span class="d-block d-md-none">
              <Grid style="width: 15px; height: 15px;" />
            </span>
          </RouterLink>
        </button>
        <button type="button" class="btn btn-outline-brand-blue">
          <RouterLink class="navbar-brand search" to="/admin/add-item">
            <span class="d-none d-md-block">新增菜色</span>
            <span class="d-block d-md-none ">
              <Plus style="width: 12px; height: 12px;" />
            </span>
          </RouterLink>
        </button>
      </div>

    </div>
    <table class="table align-middle">
      <thead>
        <tr>
          <th scope="col">中文名稱</th>
          <th scope="col">英文名稱</th>
          <th scope="col">分類</th>
          <th scope="col">健康分數</th>
          <th scope="col">澱粉 / 蛋白質 / 蔬菜</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <th scope="row">{{ item.title }}</th>
          <td>{{ item.engTitle }}</td>
          <td>{{ item.category }}</td>
          <td class="d-none d-md-block star">
            <star-rating :inline="true" :star-size="25" :read-only="true" :rating="+item.healthLevel"
              :round-start-rating="false" :show-rating="false" />
          </td>
          <td class="d-md-none">{{ item.healthLevel }}</td>

          <td>{{ item.starchPortion }} / {{ item.proteinPortion }} / {{ item.vegetablePortion }}</td>
          <td>
            <button @click="goToItem(item.id)" type="button" class="btn btn-brand-blue d-none d-lg-block">
              編輯
            </button>
            <button @click="goToItem(item.id)" type="button" class="btn d-lg-none">
              <Edit style="width: 20px; height: 20px ;color:#144bb8;" />
            </button>

          </td>
          <td>
            <button @click="showDeleteItemModal(item.id)" type="button"
              class="btn btn-outline-danger d-none d-lg-block">
              刪除
            </button>
            <button @click="showDeleteItemModal(item.id)" type="button" class="btn d-lg-none">
              <DeleteFilled style="width: 20px; height: 20px ;color:#dc3545;" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination v-show="totalPages > 1" :currentPage="currentPage" :totalPages="totalPages" @goToPage="getItems" />
    <DeleteItemModal ref="deleteItemModal" :item="item" @deleteItem="deleteItem" />
  </section>
</template>

<script>
import { DeleteFilled, Edit, Search, Plus, Grid } from '@element-plus/icons-vue'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import StarRating from 'vue-star-rating'
import DeleteItemModal from '@/views/AdminLayout/DeleteItemModal'
import axios from 'axios'
import memberData from '@/stores/memberData'
import { mapActions } from 'pinia'

import Pagination from '@/components/Pagination'

export default {
  data() {
    return {
      items: [],
      item: {},
      currentPage: '',
      totalPages: '',
      isLoading: false,
      searchInput: '',
      searchUrl: '',
      totalSearchUrl: ''
    }
  },
  components: {
    DeleteItemModal,
    StarRating,
    Pagination,
    DeleteFilled,
    Edit,
    Search,
    Plus,
    Grid
  },
  methods: {
    goToItem(id) {
      this.$router.push(`/admin/edit-item/${id}`)
    },
    showDeleteItemModal(id) {
      const item = this.items.find(it => it.id === id)
      this.item = item
      this.$refs.deleteItemModal.openModal()
    },
    async deleteItem(id) {
      try {
        await axios.delete(`${import.meta.env.VITE_APP_SERVER_URL}/dishes/${id}`)
        toast.success('成功刪除')
        await this.getItems()
      } catch (err) {
        toast.error(err.data.message)
      }
    },
    async getItems(toPage = 1) {
      this.currentPage = toPage
      this.isLoading = true

      this.totalSearchUrl = `${import.meta.env.VITE_APP_SERVER_URL}/dishes`
      this.searchUrl = `${import.meta.env.VITE_APP_SERVER_URL}/dishes?_page=${toPage}`

      if (this.searchInput) {
        this.totalSearchUrl = `${import.meta.env.VITE_APP_SERVER_URL}/dishes?q=${this.searchInput}`
        this.searchUrl = `${import.meta.env.VITE_APP_SERVER_URL}/dishes?q=${this.searchInput}&_page=${toPage}`
      }

      try {
        const resTotal = await axios.get(this.totalSearchUrl)
        const res = await axios.get(`${this.searchUrl}`)
        if (!res.data.message.length) throw new Error('查無菜色')
        this.totalPages = Math.ceil(resTotal.data.message.length / 10)
        this.items = res.data.message
      } catch (error) {
        toast.error('查無菜色')
      }
      this.isLoading = false
    },
    ...mapActions(memberData, ['checkIsAdmin', 'getUser'])
  },
  async mounted() {
    document.title = '菜色列表'
    await this.getUser()
    if (!this.checkIsAdmin()) {
      toast.error('非管理者無法執行')
      this.$router.push('/')
    }
    await this.getItems()
  }
}
</script>

<style lang="scss" scoped>
.star {
  // margin-top: 0.5rem;
  // padding-bottom: 1.2rem;

  margin-top: 1rem;
  padding-bottom: 2rem;
}

.search {
  display: grid;
  place-items: center
}
</style>
