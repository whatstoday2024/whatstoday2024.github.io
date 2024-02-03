<template>
  <section class="member-section table-img">
    <h1 class="section-title fw-bold">成為會員，您可以...</h1>
    <div class="d-flex justify-content-around ">
      <div class="table-img"></div>
      <div class="d-flex flex-column align-items-center" v-for="(option, index) in  memberOptions " :key="option.id">
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
      <router-link to="/register" class="btn btn btn-brand-blue text-white">
        <span>成為會員 &#62;</span>
      </router-link>
    </div>
  </section>
</template>

<script>
import { memberOptions } from '@/utils/variables'
import tableImg from '@/assets/img/table.png'

export default {
  data() {
    return {
      memberOptions,
      tableImg,
      isShow: memberOptions[0].id,
      obj: { transform: 'translateY(-150px)' }
    }
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
  gap: 100px;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 100px;
}

.section-title {
  margin-left: 4rem;

}

.table-img {
  background-image: url('@/assets/img/table.png');
  background-repeat: no-repeat;
  background-position: 0% 48%;
  background-size: 80%;
}

.icon {
  width: 50px;
}

.option {
  &-item {
    width: 350px;
    height: 350px;
    display: grid;
    place-items: center;
    background-image: url('@/assets/img/plate.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    z-index: 999;
    transition: all 0.8s;

    &:hover {
      cursor: pointer;
      transform: translateY(-10px)
    }
  }
}

.option-content {
  width: 290px;
  height: 290px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: translateY(50px);
  border-radius: 50%;
  background-color: $primary-mid;
  position: absolute;
  z-index: 1;

  h6 {
    transform: translateY(45px);
  }
}
</style>