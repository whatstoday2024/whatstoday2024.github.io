<template>
  <section class="member-section table-img">
    <h1 class="section-title fw-bold">成為會員，您可以...</h1>
    <!-- <div class="d-flex justify-content-around "> -->
    <div class="row">
      <div class="col-6 col-lg-3 g-5 d-flex flex-column align-items-center" v-for="(option, index) in  memberOptions " :key="option.id">
        <div class="option-item relative" :style="isShow === option.id ? obj : ''" @click="showDetail(option.id)">
          <div class="d-flex flex-column gap-1 align-items-center">
            <img :src="option.icon" alt="icon" class="icon">
            <h5 class="fw-bold">{{ option.title }}</h5>
          </div>
        </div>
        <div class="text-center option-content">
          <h6 class="fw-bold">{{ option.content1 }}</h6>
          <h6 class="fw-bold">{{ option.content2 }}</h6>
          <h6 class="fw-bold">{{ option.content3 }}</h6>
        </div>
      </div>
    </div>
    <div class="text-center">
      <router-link to="/register" class="btn btn-lg btn-brand-blue text-white rounded-pill">
        <div class="d-flex align-items-center py-2 px-3">成為會員 <ArrowRightBold style="width: 20px; height: 20px ;color:white;"/></div>
      </router-link>
    </div>
  </section>
</template>

<script>
import { memberOptions } from '@/utils/variables'
import tableImg from '@/assets/img/table.png'
import { ArrowRightBold } from "@element-plus/icons-vue";

export default {
  data() {
    return {
      memberOptions,
      tableImg,
      isShow: memberOptions[1].id,
      obj: { transform: 'translateY(-120px)' }
    }
  },
  components: {

    ArrowRightBold
},
  methods: {
    showDetail(id) {
      this.isShow = id

    }
  }
}
</script>

<style lang="scss" scoped>
.member-section {
  width: 100vw;
  display: flex;
  gap: 5rem;
  flex-direction: column;
  justify-content: center;
  // margin-bottom: 6.25rem;
}

.section-title {
  margin-left: 2rem;

  @include respond(xl) {
    margin-left: 2rem;
  }

  @include respond(sm) {
    margin-left: 1rem;
  }
}

.table-img {
  background-image: url('@/assets/img/table.png');
  background-repeat: no-repeat;
  background-position: 0% 30%;


  @include respond(lg) {

  }

  @include respond(md) {
    background-position: 0% 20%;
  }
}

.icon {
  width: 3.125rem;

}

.option {
  &-item {
    width: 18rem;
    height: 18rem;
    display: grid;
    place-items: center;
    background-image: url('@/assets/img/plate.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    z-index: 999;
    transition: all 0.8s;

    @include respond(sm) {
      width: 15.5rem;
    height: 15.5rem;
  }

    &:hover {
      cursor: pointer;
      transform: translateY(-10px)
    }
  }
}

.option-content {
  width: 14.5rem;
  height: 14.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: translateY(3.125rem);
  border-radius: 50%;
  background-color: $primary-mid;
  position: absolute;
  z-index: 1;


  @include respond(sm) {
      width: 12.5rem;
    height: 12.5rem;
  }
  h6 {
    font-size: 0.8rem;
    transform: translateY(3.125rem);

    @include respond(lg) {
      transform: translateY(1.5rem);
  }
  }
}
</style>