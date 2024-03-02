<template>
  <section class="section w-100 my-0">
    <nav class="navbar navbar-expand-md navbar-light" aria-label="Offcanvas navbar large">
      <div class="container-fluid d-flex justify-content-between px-0">
        <RouterLink class="navbar-brand" to="/">
          <img class="logo" height="50" alt="login">
        </RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2"
                aria-controls="offcanvasNavbar2" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="offcanvasNavbar2"
            aria-labelledby="offcanvasNavbar2Label">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbar2Label"></h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body d-flex flex-column flex-md-row justify-content-between justify-content-md-end my-5 my-md-0">
            <ul class="navbar-nav align-items-center" data-bs-dismiss="offcanvas">
              <li class="nav-item text-center ">
                <RouterLink to="/menu" class="m-2">立即開始</RouterLink>
              </li>
              <li class="nav-item text-center ">
                <RouterLink to="/member/bento-dairy" class="mx-2">便當日記</RouterLink>
              </li>            
              <li v-if="isLogin" class="nav-item text-center d-block d-md-none">
                <RouterLink to="/member/profile" class="mx-2">會員中心</RouterLink>
              </li>
              <li v-if="isLogin" class="nav-item mx-2 d-none d-md-block">
                <div class="dropdown">
                  <a href="#" class="dropdown-toggle" id="dropdownNavLink" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg width="40" height="40">
                      <circle cx="20" cy="20" r="20" fill="#144bb8" />
                      <text x="20" y="22" text-anchor="middle" alignment-baseline="middle" font-size="24"
                            fill="white">{{ nickname.charAt(0) }}</text>
                    </svg>
                  </a>
                  <ul class="dropdown-menu text-small shadow dropdown-menu-end" aria-labelledby="dropdownNavLink" style="">
                    <li>
                      <RouterLink to="/member/profile" class="dropdown-item">
                        <span class="material-symbols-outlined">face</span>
                        會員中心
                      </RouterLink>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#" @click.prevent="logout">
                        <span class="material-symbols-outlined">move_item</span>
                        登出
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <div class="d-flex flex-column flex-md-row">
              <hr v-if="isLogin" class="mb-3">
              <ul v-if="isLogin" class="navbar-nav text-center align-items-center d-block d-md-none">
                <li class="nav-item">
                  <a href="#" class="mx-2" @click.prevent="logout">登出</a>
                </li>
              </ul>
              <RouterLink v-if="!isLogin" to="/login" class="btn btn-brand-blue rounded-pill" style="padding: 0.75rem;">
                登入 / 註冊
                <i class="bi bi-chevron-right"></i>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </section>
</template>
  
<script>
export default {
  data() {
    return {
      isLogin: false,
      nickname: ''
    }
  },
  methods: {
    checkAuth(){
      const token = this.$cookie.getMemberToken();
      const id = this.$cookie.getMemberId();

      this.axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      this.axios.get(`${import.meta.env.VITE_APP_SERVER_URL}/users/${id}`)
        .then((res) => {
          this.nickname = res.data.message.nickname;
          this.isLogin = true;
        }).catch(() => {
          this.isLogin = false;
        });
    },
    logout(){
      document.cookie = `whatstoday=`;
      document.cookie = `whatstodayMember=`;
      alert("已登出!");
      //重整後轉頁至首頁
      location.reload();
      this.$router.push('/');
    }
  },
  created(){
    this.checkAuth()
  }

};
</script>
  
<style lang="scss" scoped>
.dropdown-menu {
  --bs-dropdown-link-active-bg: '';
}

.navbar-nav a {
  color: $grey66;
  transition: color 0.3s ease-in-out;
}

.navbar-nav a:hover {
  color: $primary;
}

.logo {
  content: url("@/assets/logo.png");
}

@media screen and (max-width: 767px) {
  .navbar-nav li {
    height: 35px;
    margin-bottom: 12px;
  }

  .logo {
    content: url("@/assets/logo_small.png");
    height: 40px;
  }
}

/* 如果需要垂直置中按鈕，可以添加以下樣式 */
// .btn-brand-blue {
//   margin-top: auto;
//   margin-bottom: auto;
// }

@media screen and (max-width: 767px) {
  .btn-brand-blue {
    width: 100%;
  }
}
</style>