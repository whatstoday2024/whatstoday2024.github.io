<template>
  <div class="container flex-fill py-4 py-lg-5 d-flex align-items-center">
    <div class="w-100">
      <div class="row g-3 g-lg-4 justify-content-evenly">
        <div class="col-lg-6">
          <VForm class="card rounded-4 p-4 p-lg-5" v-slot="{ errors }" @submit="login">
            <h1 class="h2 mb-3 text-center">後台登入(僅供管理者)</h1>
            {{ memberStore }}
            <h4 v-if="errorMsg" class="text-center text-danger">{{ errorMsg }}</h4>
            <div class="form-floating mb-4">
              <VField type="email" id="email" placeholder="請輸入電子信箱" name="信箱" class="form-control" :class="{ 'is-invalid': errors['信箱'] }" rules="email|required" v-model="user.email" />
              <ErrorMessage name="信箱" class="invalid-feedback"/>
              <label for="email">請輸入電子信箱</label>
            </div>
            <div class="form-floating mb-4">
              <VField type="password" id="password" placeholder="請輸入密碼" name="密碼" class="form-control" :class="{ 'is-invalid': errors['密碼'] }" rules="required" v-model="user.password" />
              <ErrorMessage name="密碼" class="invalid-feedback"/>
              <label for="password">請輸入密碼</label>
            </div>
            <button type="submit" class="btn btn-brand-blue btn-lg rounded-pill mb-4">登入</button>
          </VForm>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

import memberStore from '@/stores/memberData'
import { mapActions } from 'pinia'
import { mapState } from 'pinia'

export default {
  data(){
    return { 
      user: {
        email: '',
        password: '',
      },
      errorMsg:''
    }
  },
  watch:{
    'user.email': function(){
      this.errorMsg = ''
    },
    'user.password': function(){
      this.errorMsg = ''
    },
  },
  computed:{
    ...mapState(memberStore, ['memberData'])
  },
  methods:{
    login(){
      axios.post(`${import.meta.env.VITE_API}/admin/signin`, { username:this.user.email,password:this.user.password })
        .then((res) => {
          const token = res.data.token
          const exp = res.data.expired
          document.cookie = `token=${token}`
          document.cookie = `expDate=${exp}`

        axios.post(`${import.meta.env.VITE_APP_SERVER_URL}/login`, this.user)
          .then((res) => {
            const { accessToken, user } = res.data
            document.cookie = `whatstoday=${accessToken}`
            document.cookie = `whatstodayMember=${user.id}`
            this.setMemberData(user)
            this.$router.push(`/admin/admin-items`);
          }).catch(() => {
            this.errorMsg = '登入失敗'
        })
      }).catch((error) => {
        this.errorMsg = error.response.data.message
    })
    },
    ...mapActions(memberStore, ['setMemberData'])
  },
  async mounted() {
  }

}
</script>

<style lang="scss" scoped></style>