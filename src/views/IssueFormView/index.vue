<template>
  <div class="flex-fill d-flex align-items-center">
    <div class="container flex-fill py-4 py-lg-5">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="w-100">
              <VForm ref="form" class="card rounded-4 p-4 p-lg-5" v-slot="{ errors }" @submit="sendEmail">
                <h1 class="h2 mb-3 text-center">客服信箱</h1>
                <div class="form-floating my-4">
                  <select id="type" name="問題類型" class="form-select" aria-label="請選擇問題類型"  v-model="issue.type">
                    <option value="問題回報">問題回報</option>
                    <option value="菜色許願">菜色許願</option>
                  </select>
                  <ErrorMessage name="問題類型" class="invalid-feedback"/>
                  <label for="name">請選擇問題類型</label>
                </div>

                <div class="form-floating mb-4">
                  <VField type="text" id="name" placeholder="請輸入姓名" name="姓名" class="form-control" :class="{ 'is-invalid': errors['姓名'] }" rules="required" v-model="issue.name" />
                  <ErrorMessage name="姓名" class="invalid-feedback"/>
                  <label for="name">請輸入姓名</label>
                </div>
                <div class="form-floating mb-4">
                  <VField type="email" id="email" placeholder="請輸入電子信箱" name="信箱" class="form-control" :class="{ 'is-invalid': errors['信箱'] }" rules="email|required" v-model="issue.email" />
                  <ErrorMessage name="信箱" class="invalid-feedback"/>
                  <label for="email">請輸入電子信箱</label>
                </div>
                <div class="form-floating mb-4">
                  <VField as="textarea" id="content" style="height:200px" placeholder="請輸入問題內容" name="問題內容" class="form-control"  :class="{ 'is-invalid': errors['問題內容'] }" rules="required" v-model="issue.content" />
                  <ErrorMessage name="問題內容" class="invalid-feedback"/>
                  <label for="content">請輸入問題內容</label>
                </div>
                <button type="submit" class="btn btn-brand-blue btn-lg rounded-pill mb-4">送出</button>
              </VForm>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser'
import { toast } from 'vue3-toastify'

export default {
  data () {
    return {
      issue: {
        type: '問題回報',
        name: '',
        email: '',
        content: ''
      }
    }
  },
  methods: {
    sendEmail () {
      try {
        emailjs.send('service_wrg9fdg', 'template_u74y2ir', this.issue, 'cU7MJETmO9Fcn--g1')
          .then(() => {
            const delay = 1000
            toast.success(this.issue.type + '已送出完成!', {
              autoClose: delay
            })
            this.$router.push({ name: 'IssueForm' })
            this.$refs.form.resetForm()
          })
      } catch (error) {
        alert('發生錯誤，請稍後再試')
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
