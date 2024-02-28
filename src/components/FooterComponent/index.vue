<template>
  <footer class="shadow bg-dark">
    <div class="row mx-auto py-4" style="width: 90%">
      <div
        class="order-2 order-md-1 col-12 col-md-6 align-items-center align-items-md-start d-flex flex-column justify-content-center gap-3">
        <RouterLink to="/" class="logo d-none d-md-block"><img alt="logo" :src="logo" />
        </RouterLink>
        <div class="text-center text-md-start">
          <a class="text-white" href="mailto:whatstoday2024@gmail.com">
            <h6>whatstoday2024@gmail.com</h6>
          </a>
          <h6 class="text-white">&copy;whatstoday2024. All rights reserved.</h6>
        </div>
      </div>
      <div
        class="order-1 order-md-2 col-12 col-md-6 align-items-center d-flex flex-column justify-content-center gap-4 align-items-md-end">
        <div class="d-none d-sm-block icon">
          <img :src="icon" alt="footer icon">
        </div>
        <div class="d-flex gap-3">
          <router-link to="/issue" class="link">
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
.logo {
  width: 11rem;
}
.icon{
  width: 7rem;
}

h6{
  font-size: 0.7rem;
}

.link {
  color: white;

  transition: all .3s;

  &:hover {
    color: $primary;
  }
}
</style>