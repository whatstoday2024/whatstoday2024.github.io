<template>
  <div class="container flex-fill py-4 py-lg-5 d-flex align-items-center">
    <div class="w-100">
      <div class="row g-3 g-lg-4 justify-content-evenly">
        <div class="col-lg-5 align-self-lg-center">
        </div>
        <div class="col-lg-6">
          <VForm class="card rounded-4 p-4 p-lg-5" v-slot="{ errors }" @submit="login">
            <h1 class="h2 mb-3 text-center">管理者登入</h1>
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
export default {
  data(){
    return { 
      user: {
        email: '',
        password: '',
      },
    }
  },
  methods:{
    login(){
      axios.post(`${import.meta.env.VITE_API}/admin/signin`, { username:this.user.email,password:this.user.password })
        .then((res) => {
          const token = res.data.token
          const exp = res.data.expired
          document.cookie = `token=${token}`
          document.cookie = `expDate=${exp}`
          this.$router.push(`/admin/admin-items`);
      }).catch((error) => {
      console.log(error)
    })
    }
  },
  async mounted() {
  
  }

}
</script>

<style lang="scss" scoped></style>