<template>
  <div class="modal fade" id="deleteItemModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true" ref="modalRef">
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            您即將刪除
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <Warning style="width: 150px; height: 150px ;color:#fde4b4;"/>
          <h3>確定要刪除"{{ item.title }}"嗎?</h3>
          <h4 class="opacity-50">刪除後將無法復原，請務必確認!</h4>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal" @click="$emit('deleteItem', item.id)">確定刪除</button>
          <button type="button" class="btn btn-grey66" data-bs-dismiss="modal">取消</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
import { Warning } from "@element-plus/icons-vue";
export default {
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      modal: '',
    };
  },
  components: {
    Warning
  },
  mounted() {
    this.modal = new Modal(this.$refs.modalRef);
  },
  methods: {
    openModal() {
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    },
  },
}
</script>

<style lang="scss" scoped></style>