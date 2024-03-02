<template>
  <section class="container my-5 text-center">
    <div class="text-start mb-5 d-flex justify-content-between">
      <h3>菜色列表</h3>
      <button class="btn btn-outline-brand-blue">
        <RouterLink class="navbar-brand" to="/admin/add-item">
          新增菜色
        </RouterLink>
      </button>
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
              <star-rating
                :inline="true"
                :star-size="25"
                :read-only="true"
                :rating="+item.healthLevel"
                :round-start-rating="false"
                :show-rating="false"
                />
            </td>
            <td class="d-md-none">{{ item.healthLevel }}</td>

            <td>{{ item.starchPortion }} / {{ item.proteinPortion }} / {{ item.vegetablePortion }}</td>
            <td><button @click="goToItem(item.id)" type="button" class="btn btn-brand-blue">編輯</button></td>
            <td><button @click="showDeleteItemModal(item.id)" type="button" class="btn btn-outline-danger">刪除</button></td>
        </tr>
      </tbody>
    </table>
    <Pagination
            :currentPage="currentPage"
            :totalPages="totalPages"
            @goToPage="getItems"
    ></Pagination>
    <DeleteItemModal ref="deleteItemModal" :item="item" @deleteItem="deleteItem"/>
  </section>
</template>

<script>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import StarRating from 'vue-star-rating'
import DeleteItemModal from '@/views/AdminLayout/DeleteItemModal'
import axios from 'axios'
import memberStore from '@/stores/memberData'
import { mapActions } from 'pinia'

import Pagination from '@/components/Pagination'

export default {
  data() {
    return {
      items:[],
      item: {},
      currentPage:'',
      totalPages:''
    }
  },
  components: {
    DeleteItemModal,
    StarRating,
    Pagination
  },
  methods: {
    goToItem(id){
      this.$router.push(`/admin/edit-item/${id}`);
    },
    showDeleteItemModal(id){
      const item = this.items.find(it=>it.id === id)
      this.item = item
      this.$refs.deleteItemModal.openModal();
    },
    async deleteItem(id){
      try{
        await axios.delete(`${import.meta.env.VITE_APP_SERVER_URL}/dishes/${id}`)
        toast.success(`成功刪除`)
        await this.getItems()
      }catch(err){
        toast.error(err.data.message)
      }


    },
    async getItems(toPage = 1){
      this.currentPage = toPage
      const resTotal = await axios.get(`${import.meta.env.VITE_APP_SERVER_URL}/dishes`)
      const res = await axios.get(`${import.meta.env.VITE_APP_SERVER_URL}/dishes?_page=${toPage}`)
      this.totalPages = Math.ceil(resTotal.data.message.length / 10) 
      this.items = res.data.message
    },
    ...mapActions(memberStore, ['checkIsAdmin'])
  },
  async mounted() {
    if(!this.checkIsAdmin()) {
      toast.error('非管理者無法執行')
      this.$router.push(`/`);
    }
    await this.getItems()
  },
}
</script>

<style lang="scss" scoped>
.star{
  // margin-top: 0.5rem;
  // padding-bottom: 1.2rem;

  margin-top: 1rem;
  padding-bottom: 2rem;
}
</style>