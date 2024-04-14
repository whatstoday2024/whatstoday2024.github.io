<template>
  <div class="modal fade" ref="modal">
    <div class="modal-dialog h-100 d-flex align-items-center my-0">
      <div class="modal-content">
        <div class="modal-body text-center">
          <Warning class="my-3" style="width: 150px; height: 150px ;color:#fde4b4;" />
          <h5 class="lh-base mb-1"><span class="d-block d-sm-inline">確定要移除</span>{{ `「 ${message} 」的放縱日嗎？` }}</h5>
          <p class="mb-0 text-muted">移除後不能復原，請務必確認！</p>
        </div>
        <div class="modal-footer justify-content-center border-0 pb-3">
          <a href="#" class="link-secondary" @click.prevent="modal.hide()">取消</a>
          <button type="button" class="btn btn-danger" @click="sendRemove">刪除</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
import { Warning } from '@element-plus/icons-vue'
export default {
  data () {
    return {
      modal: {},
      message: ''
    }
  },
  components: {
    Warning
  },
  methods: {
    show (message) {
      this.message = message
      this.modal.show()
    },
    sendRemove () {
      this.$emit('removeItem')
      this.modal.hide()
    }
  },
  mounted () {
    this.modal = new Modal(this.$refs.modal)
  }
}
</script>
