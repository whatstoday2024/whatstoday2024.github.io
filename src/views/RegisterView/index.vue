<template>
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
          <VForm class="card rounded-4 p-4 p-lg-5" v-slot="{ errors }" @submit="register">
            <h3 class="h2 mb-3 text-center">註冊帳號</h3>
            <div class="text-center">
              <button type="button" class="btn btn-outline-brand-blue mb-4 rounded-pill" @click="$router.push({name: 'Login'})">已有會員，前往登入</button>
            </div>
            <div class="form-floating mb-4">
              <VField type="text" id="username" placeholder="請輸入姓名" name="姓名" class="form-control" :class="{ 'is-invalid': errors['姓名'] }" rules="required" v-model="user.name" />
              <ErrorMessage name="姓名" class="invalid-feedback"/>
              <label for="username">請輸入姓名</label>
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
            <div class="form-floating mb-4">
              <VField type="password" id="passwordDoubleCheck" placeholder="再次確認密碼" name="再次確認密碼" class="form-control" :class="{ 'is-invalid': errors['再次確認密碼'] }" rules="required|confirmed:@密碼" v-model="passwordDoubleCheck" />
              <ErrorMessage name="再次確認密碼" class="invalid-feedback"/>
              <label for="passwordDoubleCheck">再次確認密碼</label>
            </div>
            <button type="submit" class="btn btn-brand-blue btn-lg rounded-pill">註冊</button>
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
        name: '',
        email: '',
        password: '',
      },
      passwordDoubleCheck: ''
    }
  },
  methods: {
    register(){
      // API 註冊會員
    }
  }
}
</script>

<style lang="scss" scoped></style>