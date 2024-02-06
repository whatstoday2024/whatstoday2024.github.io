<template>
  <div class="flex-fill d-flex align-items-center">
    <div class="container py-5">
      <h1 class="display-5 mb-4">個人資料總覽</h1>
      <div class="row g-4" v-if="user.email">
        <div class="col-12">
          <div class="border rounded-4 p-5 text-center">
            <h5 class="fs-4">累積產生的便當數</h5>
            <p class="mb-0" style="font-size: 8rem; line-height: 0.8;">{{ user.dinnerCount }}</p>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="border rounded-4 fs-4 p-5 h-100">
            <h5 class="mb-4 fs-4">會員資料</h5>
            <div class="row">
              <div class="col-auto">
                <p>帳號</p>
              </div>
              <div class="col">
                <p class="mb-4">{{ user.email }}</p>
              </div>
            </div>
            <VForm class="row g-3" v-slot="{ errors }" @submit="editProfile">
              <div class="col-auto">
                <label for="username" class="col-form-label">姓名</label>
              </div>
              <div class="col">
                <VField type="text" id="username" style="font-size: 1.5rem;" name="姓名" class="form-control" :class="{ 'is-invalid': errors['姓名'] || newProfile.invalid }" rules="required" v-model="newProfile.name" @input="newProfile.invalid = false" />
                <ErrorMessage name="姓名" class="invalid-feedback" style="font-size: 0.875rem;"/>
                <p class="text-danger mb-0 mt-2" style="font-size: 0.875rem;" v-if="newProfile.invalid">新名稱與舊名稱相同</p>
              </div>
              <div class="text-end mt-4">
                <button type="submit" class="btn btn-outline-brand-blue btn-lg rounded-pill">修改資料</button>
              </div>
            </VForm>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="border rounded-4 p-5 h-100">
            <h5 class="mb-4 fs-4">修改密碼</h5>
            <VForm v-slot="{ errors }" @submit="changePassword">
              <div class="form-floating mb-4">
                <VField type="password" id="oldPassword" placeholder="請輸入舊密碼" name="舊密碼" class="form-control" :class="{ 'is-invalid': errors['舊密碼'] }" rules="required" v-model="password.old" />
                <ErrorMessage name="舊密碼" class="invalid-feedback"/>
                <label for="oldPassword">請輸入舊密碼</label>
              </div>
              <div class="form-floating mb-4">
                <VField type="password" id="newPassword" placeholder="請輸入新密碼" name="新密碼" class="form-control" :class="{ 'is-invalid': errors['新密碼'] }" rules="required|is_not:@舊密碼" v-model="password.new" />
                <ErrorMessage name="新密碼" class="invalid-feedback"/>
                <label for="newPassword">請輸入新密碼</label>
              </div>
              <div class="form-floating mb-4">
                <VField type="password" id="newPasswordDoubleCheck" placeholder="再次確認新密碼" name="確認新密碼" class="form-control" :class="{ 'is-invalid': errors['確認新密碼'] }" rules="required|confirmed:@新密碼" v-model="password.doubleCheck" />
                <ErrorMessage name="確認新密碼" class="invalid-feedback"/>
                <label for="newPasswordDoubleCheck">再次確認新密碼</label>
              </div>
              <div class="text-end">
                <button type="submit" class="btn btn-outline-brand-blue btn-lg rounded-pill">修改密碼</button>
              </div>
            </VForm>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {},
      newProfile: {
        name: '',
        invalid: false,
      },
      password: {
        old: '',
        new: '',
        doubleCheck: ''
      }
    }
  },
  methods: {
    getProfile() {
      // API 取得會員資料
      // 賦予 api 回傳的資料
      this.user = {
        name: 'xxx',
        email: 'xxxxx@gmail.com',
        dinnerCount: 166,
      }
      this.newProfile.name = this.user.name
    },
    editProfile() {
      if (this.newProfile.name === this.user.name) {
        this.newProfile.invalid = true
        return
      }
      // API 修改會員名稱
    },
    changePassword() {
      // API 修改密碼
    }
  },
  created() {
    this.getProfile()
  }
}
</script>

<style lang="scss" scoped></style>