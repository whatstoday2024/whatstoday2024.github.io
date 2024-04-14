<template>
  <loadingVue :active="isLoading" />
  <div class="container flex-fill py-4 py-lg-5 d-flex align-items-center">
    <div class="w-100">
      <div class="row g-3 g-lg-4 justify-content-evenly">
        <div class="col-lg-5 align-self-lg-center">
          <div class="text-center text-lg-end opacity-75">
            <h1 class="display-6">
              加入會員
              <span class="d-block d-lg-none d-xl-block mt-3">帶您探索菜色的無限可能</span>
              <span class="d-none d-lg-block d-xl-none mt-3">帶您探索菜色的</span>
              <span class="d-none d-lg-block d-xl-none mt-3">無限可能</span>
            </h1>
          </div>
        </div>
        <div class="col-lg-6">
          <VForm class="card border-primary rounded-4 p-4 p-lg-5" v-slot="{ errors }" @submit="register">
            <h3 class="h2 mb-4 text-center">註冊帳號</h3>
            <div class="alert alert-danger mb-4" v-if="registerError">
              {{ registerError }}
            </div>
            <div class="form-floating mb-4">
              <VField type="text" id="name" placeholder="請輸入暱稱" name="暱稱" class="form-control"
                :class="{ 'is-invalid': errors['暱稱'] }" rules="required" v-model="user.nickname" />
              <ErrorMessage name="暱稱" class="invalid-feedback" />
              <label for="name">請輸入暱稱</label>
            </div>
            <div class="form-floating mb-4">
              <VField type="email" id="email" placeholder="請輸入電子信箱" name="信箱" class="form-control"
                :class="{ 'is-invalid': errors['信箱'] }" rules="email|required" v-model="user.email" />
              <ErrorMessage name="信箱" class="invalid-feedback" />
              <label for="email">請輸入電子信箱</label>
            </div>
            <div class="form-floating mb-4">
              <VField type="password" id="password" placeholder="請輸入密碼" name="密碼" class="form-control"
                :class="{ 'is-invalid': errors['密碼'] }" rules="min:4" v-model="user.password" />
              <ErrorMessage name="密碼" class="invalid-feedback" />
              <label for="password">請輸入密碼</label>
            </div>
            <div class="form-floating mb-4">
              <VField type="password" id="passwordDoubleCheck" placeholder="再次確認密碼" name="再次確認密碼" class="form-control"
                :class="{ 'is-invalid': errors['再次確認密碼'] }" rules="required|confirmed:@密碼"
                v-model="passwordDoubleCheck" />
              <ErrorMessage name="再次確認密碼" class="invalid-feedback" />
              <label for="passwordDoubleCheck">再次確認密碼</label>
            </div>
            <div class="d-flex">
              <button type="button" class="btn btn-outline-primary btn-lg rounded-pill w-50 me-2"
                @click="$router.push({ name: 'Login' })">已有會員，前往登入</button>
              <button type="submit" class="btn btn-primary btn-lg rounded-pill w-50 ms-2">註冊</button>
            </div>
          </VForm>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { toast } from 'vue3-toastify'

document.title = '開始探索'

export default {
  data () {
    return {
      user: {
        nickname: '',
        email: '',
        password: ''
      },
      passwordDoubleCheck: '',
      registerError: '',
      isLoading: false
    }
  },
  methods: {
    register () {
      this.isLoading = true
      this.registerError = ''
      this.axios.post(`${import.meta.env.VITE_APP_SERVER_URL}/register`, this.user)
        .then(() => {
          this.isLoading = false
          const delay = 1000
          toast.success('註冊成功！前往登入', {
            autoClose: delay
          })
          setTimeout(() => {
            this.$router.push({ name: 'Login' })
          }, delay)
        }).catch(e => {
          if (e.response?.data === 'Email already exists') {
            this.registerError = `${this.user.email} 用戶已存在`
          } else {
            this.registerError = '註冊失敗'
          }
          this.isLoading = false
        })
    }
  }
}
</script>

<style lang="scss" scoped></style>
