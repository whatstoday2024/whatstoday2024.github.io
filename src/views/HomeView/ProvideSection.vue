<template>
  <section class="section">
    <h1 class="section-title fw-bold"> 為了解決上述困擾，我們提供了... </h1>
    <div class="row">
      <div class="col-12 col-lg-7">
        <div class="card-left bg-primary-light">
          <!-- <div class="row"> -->
          <div class="row mb-2" v-for="(item, index) in provideOptions" :key="item.id">
            <div class="col-2"><img :src="item.icon" alt="icon"></div>
            <div class="col-10">
              <h3 class="fw-bold">{{ item.title }}</h3>
              <h6>{{ item.content }}</h6></div>
          </div>
          <div class="text-start mt-4">
            <router-link to="/menu" class="btn btn-lg btn-brand-blue text-white rounded-pill">
              <div class="d-flex align-items-center py-2 px-3">立即開始 <ArrowRightBold style="width: 20px; height: 20px ;color:white;;"/></div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="d-none d-lg-block col-12 col-lg-5">
        <div class="card-right">
          <img class="img" :src="eatingImg" alt="eating">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import eatingImg from '@/assets/img/sloution_person.png'
import { provideOptions } from '@/utils/variables'
import axios from 'axios'
import { CaretLeft, CaretRight, ArrowRightBold } from "@element-plus/icons-vue";

export default {
  data() {
    return {
      eatingImg,
      provideOptions,
    }
  },
  components: {
    CaretRight,
    CaretLeft,
    ArrowRightBold
},
  computed: {
    classObject: () => {}
  },
}
</script>

<style lang="scss" scoped>
.card-left {
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  border-radius: 1.25rem;
  height: 90%;
  padding: 4rem;

  background-image: url('@/assets/img/sloution_bottom.png');
  background-repeat: no-repeat;
  background-position: 100% 100%;
  background-size: 65%;
}

.icon {
  width: 60px;
}

.img{
  // object-fit: fill;
  object-fit: cover;
  object-position: center;
  height: 100%;
}

.card-right {
  border-radius: 1.25rem;
  overflow: hidden;
  height: 90%;
}
</style>