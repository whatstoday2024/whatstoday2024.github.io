  <template>
    <nav class="navbar navbar-expand-md navbar-light" aria-label="Offcanvas navbar large">
      <div class="container-fluid">
        <RouterLink class="navbar-brand" to="/">
          <img class="logo" height="50" alt="login">
        </RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>          
        </button>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbar2Label"></h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body ">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 d-flex align-items-center mb-auto" data-bs-dismiss="offcanvas">
              <li class="nav-item">
                <RouterLink to="/" class="m-2">立即開始</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink to="/menu" class="mx-2">便當日記</RouterLink>
              </li>
              <li class="nav-item mx-2 d-none d-md-block">
                <div class="dropdown">
                  <a href="#"  class="dropdown-toggle" id="dropdownNavLink" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg width="40" height="40">
                      <circle cx="20" cy="20" r="20" fill="blue" />
                      <text x="20" y="20" text-anchor="middle" alignment-baseline="middle"  font-size="24" fill="white">G</text>
                    </svg>
                  </a>
                  <ul class="dropdown-menu text-small shadow dropdown-menu-end" aria-labelledby="dropdownNavLink" style="">
                    <li>
                      <RouterLink to="/member" class="dropdown-item">
                        <span class="material-symbols-outlined">face</span>
                         會員中心
                      </RouterLink>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <span class="material-symbols-outlined">move_item</span>
                         退出
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <div class="mt-auto">
              <ul class="navbar-nav d-block d-md-none justify-content-end flex-grow-1 pe-3 d-flex align-items-center">
                <li class="nav-item">
                  <RouterLink to="/admin" class="mx-2">登出</RouterLink>
                </li>
              </ul>
              <RouterLink to="/login" class="btn btn-brand-blue rounded-pill" style="height: 3rem;padding: 12px 12px 12px 16px;">
                登入 / 註冊 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                </svg> 
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style lang="scss" scoped>
  .navbar-nav {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-grow: 1;
    padding-right: 3rem;
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
  .btn-brand-blue {
    margin-top: auto;
    margin-bottom: auto;
  }
  @media screen and (max-width: 767px) {  
    .btn-brand-blue {
      width:100%;
    }
  }
  </style>