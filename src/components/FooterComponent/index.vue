<template>
  <footer class="shadow bg-dark">
    <div class="d-flex flex-wrap justify-content-between align-items-center mx-auto py-4" style="width: 90%">
      <div class="d-flex flex-column gap-3">
        <router-link to="/"> <img alt="logo" :src="logo" />
        </router-link>
        <div>
          <a class="text-white" href="mailto:whatstoday2024@gmail.com">
            <h6>whatstoday2024@gmail.com</h6>
          </a>
          <h6 class="text-white">&copy;whatstoday2024 2024. All rights reserved.</h6>
        </div>
      </div>
      <div class="d-flex flex-column gap-4 align-items-center">
        <div>
          <img :src="icon" alt="footer icon">
        </div>
        <div class="d-flex gap-3">
          <router-link to="/" class="link">
            <h6>問題回報</h6>
          </router-link>
          <router-link to="/admin" class="link">
            <h6>後台管理</h6>
          </router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
// import logo from '@/assets/logo_small.png'
import logo from '@/assets/img/logo_small.png';
import icon from '@/assets/img/logo_icon.png';


export default {
  data() {
    return {
      logo,
      icon
    }
  },

}
</script>

<style lang="scss" scoped>
.link {
  color: white;

  transition: all .3s;

  &:hover {
    color: $primary;
  }
}
</style>