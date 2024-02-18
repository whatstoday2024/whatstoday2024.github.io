<template>
  <nav class="navbar navbar-expand-lg navbar-light" aria-label="Offcanvas navbar large">
      <div class="container-fluid">
        <RouterLink class="navbar-brand" to="/">
          <img class="logo"  height="72" alt="login">
        </RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbar2Label"></h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3" data-bs-dismiss="offcanvas">
              <li class="nav-item">
                <RouterLink to="/" class="m-2">立即開始</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink to="/admin" class="mx-2">便當日記</RouterLink>
              </li>
            </ul>
            <form class="d-flex">
              <button class="btn btn-brand-blue rounded-pill ms-2 col-12" style="height: 3rem;">登入 / 註冊 ></button>
            </form>
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
  }  
  
  .logo {
    content: url("@/assets/logo.png");
  }

  @media screen and (max-width: 767px) {
    .navbar-nav li {
      height: 35px;
      margin-bottom: 12px;
    }
    
    /* Change the logo for mobile */
    .logo {
      content: url("@/assets/logo_small.png");
      height: 40px;
    }
  }


  /* 下面是按鈕的樣式 */
  .d-flex {
    display: flex;
    align-items: center; /* 垂直置中 */
  }
  
  /* 如果需要垂直置中按鈕，可以添加以下樣式 */
  .btn-brand-blue {
    margin-top: auto;
    margin-bottom: auto;
  }
   
  .d-flex {
    display: flex;
    align-items: center;
  }
  .btn {
    margin-left: auto;
  }
  </style>