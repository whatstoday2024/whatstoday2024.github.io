<template>
  <div class="flex-fill position-relative d-flex align-items-center" v-if="rescueStep === 1">
    <div class="position-absolute w-50 top-0 bottom-0 end-0 d-none d-lg-block rescueBgStep01">
    </div>
    <div class="container flex-fill">
      <div class="w-100">
        <div class="row g-3 g-lg-4">
          <div class="col-lg-6 py-4 py-lg-5">
            <h1 class="display-6 mb-3 mb-lg-4 text-center opacity-75 fw-light">帳戶救援</h1>
            <VForm class="card rounded-4 p-4 p-lg-5" v-slot="{ errors }" @submit="checkAccount">
              <h3 class="h2 mb-4 text-center">STEP 1 - 確認會員資料</h3>
              <p class="text-danger mb-4" v-if="isNotExistAccount">{{ `此帳號不存在 (${isNotExistAccount})，請確認！` }}</p>
              <div class="form-floating mb-4">
                <VField type="email" id="email" placeholder="請輸入電子信箱" name="信箱" class="form-control" :class="{ 'is-invalid': errors['信箱'] }" rules="email|required" v-model="account" />
                <ErrorMessage name="信箱" class="invalid-feedback"/>
                <label for="email">請輸入電子信箱</label>
              </div>
              <button type="submit" class="btn btn-brand-blue btn-lg rounded-pill">確認</button>
            </VForm>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="flex-fill position-relative d-flex align-items-center" v-if="rescueStep === 2">
    <div class="position-absolute w-50 top-0 bottom-0 end-0 d-none d-lg-block rescueBgStep02">
    </div>
    <div class="container flex-fill">
      <div class="w-100">
        <div class="row g-3 g-lg-4">
          <div class="col-lg-6 py-4 py-lg-5">
            <h1 class="display-6 mb-3 mb-lg-4 text-center opacity-75 fw-light">帳戶救援</h1>
            <VForm class="card rounded-4 p-4 p-lg-5"  v-slot="{ errors }" @submit="changePassword">
              <h3 class="h2 mb-4 text-center">STEP 2 - 重設密碼</h3>
              <p class="fs-5 mb-4 text-center text-success">{{ `會員帳戶 ${account}` }}</p>
              <div class="form-floating mb-4">
                <VField type="password" id="newPassword" placeholder="請輸入新密碼" name="新密碼" class="form-control" :class="{ 'is-invalid': errors['新密碼'] }" rules="required" v-model="password.new" />
                <ErrorMessage name="新密碼" class="invalid-feedback"/>
                <label for="newPassword">請輸入新密碼</label>
              </div>
              <div class="form-floating mb-4">
                <VField type="password" id="newPasswordDoubleCheck" placeholder="再次確認新密碼" name="確認新密碼" class="form-control" :class="{ 'is-invalid': errors['確認新密碼'] }" :rules="doubleCheckPassword" v-model="password.doubleCheck" />
                <ErrorMessage name="確認新密碼" class="invalid-feedback"/>
                <label for="newPasswordDoubleCheck">再次確認新密碼</label>
              </div>
              <button type="submit" class="btn btn-brand-blue btn-lg rounded-pill">確認</button>
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
      rescueStep: 1,
      account: '',
      isNotExistAccount: '',
      password: {
        new: '',
        doubleCheck: ''
      }
    }
  },
  methods: {
    checkAccount() {
      // API 帳戶是否存在
      // 回應:信箱不存在
      // this.isNotExistAccount = this.account
      // 回應:信箱存在
      this.rescueStep += 1
    },
    changePassword() {
      // API 修改密碼
    },
    doubleCheckPassword(value) {
      if (!value) return '確認新密碼 為必填'
      else return value === this.password.new ? true : '兩次輸入的密碼不一致'
    }
  }
}
</script>

<style lang="scss" scoped>
.rescueBgStep01 {
  background-image: url('@/assets/img/accountRescue_01.jpg');
  background-size: 700px; 
  background-repeat: no-repeat;
  background-position: left bottom;
}
.rescueBgStep02 {
  background-image: url('@/assets/img/accountRescue_02.jpg');
  background-size: 400px; 
  background-repeat: no-repeat;
  background-position: 100px bottom;
}
</style>