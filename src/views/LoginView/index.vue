<template>
  <loadingVue :active="isLoading" />
  <div class="container flex-fill py-4 py-lg-5 d-flex align-items-center">
    <div class="w-100">
      <div class="row g-3 g-lg-4 justify-content-evenly">
        <div class="col-lg-5 align-self-lg-center">
          <div class="text-center text-lg-end opacity-75">
            <h2 class="display-6">
              健康、美味、驚喜
              <span class="d-block mt-3">一鍵獲得</span>
            </h2>
          </div>
        </div>
        <div class="col-lg-6">
          <VForm class="card border-primary rounded-4 p-4 p-lg-5" v-slot="{ errors }" @submit="login">
            <h1 class="h2 mb-4 text-center">登入會員</h1>
            <div class="alert alert-danger mb-4" v-if="loginError">
              登入失敗！請確認帳號與密碼是否正確。
            </div>
            <div class="form-floating mb-4">
              <VField type="email" id="email" placeholder="請輸入電子信箱" name="信箱" class="form-control"
                :class="{ 'is-invalid': errors['信箱'] }" rules="email|required" v-model="user.email" />
              <ErrorMessage name="信箱" class="invalid-feedback" />
              <label for="email">請輸入電子信箱</label>
            </div>
            <div class="form-floating mb-4">
              <VField type="password" id="password" placeholder="請輸入密碼" name="密碼" class="form-control"
                :class="{ 'is-invalid': errors['密碼'] }" rules="required" v-model="user.password" />
              <ErrorMessage name="密碼" class="invalid-feedback" />
              <label for="password">請輸入密碼</label>
            </div>
            <div class="d-flex">
              <button type="button" class="btn btn-outline-primary btn-lg rounded-pill w-50 me-2"
                @click="$router.push({ name: 'Register' })">還不是會員？前往註冊</button>
              <button type="submit" class="btn btn-primary btn-lg rounded-pill w-50 ms-2">登入</button>
            </div>
          </VForm>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import memberData from '@/stores/memberData'
import { mapActions } from 'pinia'
import { toast } from 'vue3-toastify'

document.title = '馬上登入'

export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      loginError: false,
      isLoading: false
    }
  },
  methods: {
    login () {
      this.isLoading = true
      this.axios.post(`${import.meta.env.VITE_APP_SERVER_URL}/login`, this.user)
        .then((res) => {
          const { accessToken, user } = res.data
          this.$cookie.setMemberToken(accessToken)
          this.$cookie.setMemberId(user.id)
          this.setMemberData(user)
          this.isLoading = false
          const delay = 1000
          if (user.isAdmin) {
            toast.success('登入成功！前往後台', {
              autoClose: delay
            })
            setTimeout(() => {
              this.$router.push({ name: 'AdminDashboard' })
            }, delay)
          } else {
            toast.success('登入成功！前往菜單', {
              autoClose: delay
            })
            setTimeout(() => {
              this.$router.push({ name: 'MenuView' })
            }, delay)
          }
        }).catch(() => {
          this.loginError = true
          this.isLoading = false
        })
    },
    ...mapActions(memberData, ['setMemberData'])
  }
}
</script>

<style lang="scss" scoped></style>
