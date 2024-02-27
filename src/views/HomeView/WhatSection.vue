<style lang="scss" scoped>
  .what{
    h2{
      padding-bottom: 7rem;
    }
    .what_margin{
      padding-top: 5rem;
    }
    .card-img-top {
      position: absolute;
      top: -248px;
      left: 50%;
      margin-left: -150px;
      width: 300px ;
    }  
    .card {
      margin-top: 30px;
      padding-top: 30px;
      transform: translate(0, 0);
      transition: transform 1.2s ease; // Increase transition duration to 0.5s
      &:hover {
        transform: translate(0, -1.5rem);
      }
    }
    
    @media screen and (max-width: 990px) {
      /* 小於等於 767px 寬度時的樣式 */
      h2{
        padding-bottom: 0rem;
      }
      .what_margin {
        padding-top: 20rem;
        margin-bottom: 0rem;
      }
    }
  }
</style>

<template>
  <section class="what">
    <div class="section mb-5">
      <h2 class="h1 col-12 fw-bold ps-0">想吃頓飯卻傷透腦筋？</h2>
    </div>
    <div class="section row">
      <div class="col rounded-4 px-4 bg-primary-light">
        <div class="row">
          <div class="col-md-6 col-lg-4 what_margin">
            <div class="card mb-4 border-0 shadow-sm h-75">
              <img src="@/assets/img/point_01.png" class="card-img-top point-img" alt="想不出來要吃什麼" />
              <div class="card-body p-5 text-center">
                <h4 class="text-primary">想不出來要吃什麼</h4>
                <p>
                    您總是挑選時猶豫不決嗎？<br>
                    每次想了很久遲遲沒有下手？<br>
                    明明不挑食，但最後總是吃相同料理 😰
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 what_margin">
            <div class="card mb-4 border-0 shadow-sm h-75">
              <img src="@/assets/img/point_02.png" class="card-img-top" alt="吃的健康嗎" />
              <div class="card-body p-5 text-center">
                <h4 class="text-primary">吃的健康嗎</h4>
                <p>
                  對於自助餐菜色不太了解？<br>
                  常常會偏好不太健康的選擇？<br>
                  使得飲食並不夠均衡，吃的不太健康
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 what_margin">
            <div class="card mb-4 border-0 shadow-sm h-75">
              <img src="@/assets/img/point_03.png" class="card-img-top" alt="忘記昨天吃了什麼" />
              <div class="card-body p-5 text-center">
                <h4 class="text-primary">忘記昨天吃了什麼</h4>
                <p>
                  今天想來點不一樣的選擇<br>
                  卻忘了您昨天吃了什麼？<br>
                  生活就夠操心動腦了，哪還有時間來記錄                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {

}
</script>