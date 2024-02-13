<template>
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
          <VForm class="card rounded-4 p-4 p-lg-5" v-slot="{ errors }" @submit="login">
            <h1 class="h2 mb-3 text-center">登入會員</h1>
            <div class="text-center">
              <button type="button" class="btn btn-outline-brand-blue mb-4 rounded-pill" @click="$router.push({name: 'Register'})">還不是會員？前往註冊</button>
            </div>
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
            <a href="#" class="link-secondary link-offset-2 text-center" @click.prevent="$router.push({name: 'AccountRescue'})">忘記密碼？</a>
          </VForm>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: '',
        password: '',
      }
    }
  },
  methods: {
    login(){
      // API 登入會員
    }
  }
}
</script>

<style lang="scss" scoped></style>