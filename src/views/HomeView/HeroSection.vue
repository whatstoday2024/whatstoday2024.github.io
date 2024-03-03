<template>
    <section class="section row my-0">
      <div class="col-md-4 p-0 order-md-1 order-2">
        <div class="rounded-4 hero-section position-relative hero_topl">
          <div style="position: absolute; left: 10px; bottom: 10px;">
            # 健康美味
          </div>
        </div>
      </div>
      <div class="col-md-4 p-0 px-0 px-md-2 order-md-2 order-3">
        <div class="rounded-4 hero-section position-relative hero_topr">
          <div style="position: absolute; left: 10px; bottom: 10px;">
            # 快速便利
          </div>
        </div>
      </div>
      <div class="col-md-4 p-0 order-md-3 order-4">
        <div class="rounded-4 hero-section position-relative hero_topm">
          <div style="position: absolute; left: 10px; bottom: 10px;">
            # 多樣選擇
          </div>
        </div>
      </div>
      <div class="col-md-12 p-0 order-md-4 order-1">
        <div class="rounded-4 hero-section position-relative hero_bottom  px-3" style="height: 548px;">
          <div class="en_title d-flex flex-wrap h3 lh-base">
            <div class="mb-0 me-2">What are we eating</div>
            <div class="flex-fill mb-0 me-2 position-relative darkLine"></div>
            <div class="mb-0">today !</div>
          </div>
          <div class="tw_title">
            <h1>今天吃什麼 😉</h1>
            <p class="text-grey66 lh-lg">
              煩惱整天，還沒決定要吃什麼嗎？<br>
              一鍵搞定您的困擾！
            </p>
            <router-link to="/menu" class="btn btn-outline-primary rounded-pill">
              <div class="d-flex align-items-center py-2 px-3">立即開始 <i class="bi bi-chevron-right"></i></div>
            </router-link>
          </div>
        </div>
      </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.btn-outline-primary:hover{
  background-color: $primary;
  border-color: $primary;
  color: white;
}
.hero-section {
  background-size: cover;
  background-position: center;
  margin-bottom: 10px;
  height: 222px;
  &.hero_topl {
    color: white;
    background-image: url('@/assets/img/hero_topl.png');
  }
  &.hero_topr {
    color: white;
    background-image: url('@/assets/img/hero_topr.png');
  }
  &.hero_topm {
    color: white;
    background-image: url('@/assets/img/hero_topm.png');
  }
  &.hero_bottom {
    background-image: url('@/assets/img/hero_bottom.png');
  }
  .en_title {
    padding-top: 10px;
    font-size: 1.5rem;
  }
  .tw_title {
    position: absolute;
    top: 70%;
    transform: translateY(-70%);
  }
}

.darkLine {
  min-width: 10px;
}
.darkLine::after {
  content: '';
  position: absolute;
  left: 0px;
  right: 0px;
  height: 1.5px;
  top: 50%;
  background-color: black;
}
</style>