<template>
  <div class="errorpage container">
    <div>
    <img src="@/assets/img/point_03.png" class="card-img-top" alt="忘記昨天吃了什麼" />
    </div>
    <div>
      <h1 class="text-primary status">404</h1>
      <h6>您前往的頁面似乎不存在，</h6>
      <h6>請確認頁面地址是否正確或是 <span><router-link to="/issue">回報此問題</router-link></span>。</h6>
    <button class="btn btn-brand-blue mt-3" @click="toHome">返回首頁</button>
  </div>
  </div>
</template>

<script>
export default {
  methods:{
    toHome(){
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss">
.errorpage {
  text-align: center;
  height: 100vh;
  align-items: center;
  justify-content: center;
  display: flex;
  gap: 6rem;

  @include respond(md) {
    flex-direction: column;
    gap: 0.5rem;
  }

}

.status{
  font-size: 10rem;
}

.errorpage h1 {
  margin: 10px;
  font-weight: 300;
}
.card-img-top{
  width:24rem;
}
</style>