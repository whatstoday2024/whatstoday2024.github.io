<template>
  <loadingVue :active="isLoading" />
  <div class="flex-fill d-flex align-items-center">
    <div class="container py-5">
      <h1 class="display-5 mb-4">個人資料總覽</h1>
      <div class="row g-4" v-if="user.email">
        <div class="col-12">
          <div class="border rounded-4 p-5 text-center">
            <h5 class="fs-4">累積產生的便當數</h5>
            <p class="mb-0" style="font-size: 8rem; line-height: 0.8;">{{ dinnerCount }}</p>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="border rounded-4 p-5 h-100">
            <h5 class="mb-4 fs-4">會員資料</h5>
            <div class="form-floating mb-4">
              <input type="email" class="form-control" :value="user.email" disabled title="會員帳號不得修改" />
              <label>帳號</label>
            </div>
            <VForm v-slot="{ errors }" @submit="editProfile">
              <div class="form-floating mb-4">
                <VField type="text" id="username" placeholder="暱稱" name="暱稱" class="form-control" :class="{ 'is-invalid': errors['暱稱'] || renameInvalid }" rules="required" v-model="user.nickname" @input="renameInvalid = false" />
                <ErrorMessage name="暱稱" class="invalid-feedback" style="font-size: 0.875rem;"/>
                <p class="text-danger mb-0 mt-2" style="font-size: 0.875rem;" v-if="renameInvalid">新名稱與舊名稱相同</p>
                <label for="username">暱稱</label>
              </div>
              <div class="text-end mt-4">
                <button type="submit" class="btn btn-primary btn-lg rounded-pill">修改資料</button>
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
                <VField type="password" id="newPassword" placeholder="請輸入新密碼" name="新密碼" class="form-control" :class="{ 'is-invalid': errors['新密碼'] }" rules="min:4|is_not:@舊密碼" v-model="password.new" />
                <ErrorMessage name="新密碼" class="invalid-feedback"/>
                <label for="newPassword">請輸入新密碼</label>
              </div>
              <div class="form-floating mb-4">
                <VField type="password" id="newPasswordDoubleCheck" placeholder="再次確認新密碼" name="確認新密碼" class="form-control" :class="{ 'is-invalid': errors['確認新密碼'] }" rules="required|confirmed:@新密碼" v-model="password.doubleCheck" />
                <ErrorMessage name="確認新密碼" class="invalid-feedback"/>
                <label for="newPasswordDoubleCheck">再次確認新密碼</label>
              </div>
              <div class="text-end">
                <button type="submit" class="btn btn-primary btn-lg rounded-pill">修改密碼</button>
              </div>
            </VForm>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import memberStore from '@/stores/memberData'
import { mapState } from 'pinia'
export default {
  data() {
    return {
      dinnerCount: 0,
      renameInvalid: false,
      password: {
        old: '',
        new: '',
        doubleCheck: ''
      },
      isLoading: false
    }
  },
  emits: ['updateProfile'],
  computed: {
    user(){
      if (this.memberData.email) {
        const { email, nickname } = this.memberData
        return {
          email, nickname
        }
      } else {
        return {}
      }
    },
    ...mapState(memberStore, ['memberData'])
  },
  methods: {
    getProfile() {
      // 取得便當數量資料
      this.dinnerCount = 166
    },
    editProfile() {
      if (this.user.nickname === this.memberData.nickname) {
        this.renameInvalid = true
        return
      }
      this.isLoading = true
      this.axios.patch(`${import.meta.env.VITE_APP_SERVER_URL}/600/users/${this.memberData.id}`, {
          'nickname': this.user.nickname
        }).then(() => {
          alert('會員名稱修改成功')
          this.$emit('updateProfile')
          this.isLoading = false
        }).catch(() => {
          alert('會員名稱修改失敗')
          this.$emit('updateProfile')
          this.isLoading = false
        })
    },
    async changePassword() {
      this.isLoading = true
      const isValid = await this.checkPassword()
      if (isValid) {
        this.axios.patch(`${import.meta.env.VITE_APP_SERVER_URL}/600/users/${this.memberData.id}`, {
          password: this.password.new
        }).then(() => {
          alert('密碼修改成功')
          this.$emit('updateProfile')
        }).catch(() => {
          alert('密碼修改失敗')
          this.isLoading = false
        })
      } else {
        alert('舊密碼輸入不正確')
        this.isLoading = false
      }
    },
    checkPassword() {
      const user = {
        email: this.user.email,
        password: this.password.old
      }
      return new Promise((resolve) => {
        this.axios.post(`${import.meta.env.VITE_APP_SERVER_URL}/login`, user)
          .then(() => {
            resolve(true)
          }).catch(() => {
            resolve(false)
          })
      })
    }
  },
  mounted() {
    this.getProfile()
    const token = this.$cookie.getMemberToken();
    if(token) {
      this.axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
  }
}
</script>

<style lang="scss" scoped></style>