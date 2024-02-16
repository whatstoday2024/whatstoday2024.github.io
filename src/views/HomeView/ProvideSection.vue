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
        </div>
      </div>
      <div class="d-none d-lg-block col-12 col-lg-5">
        <div class="card-right">
          <img class="img object-fit-cover" :src="eatingImg" alt="eating">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import eatingImg from '@/assets/img/sloution_person.png'
import { provideOptions } from '@/utils/variables'
import axios from 'axios'
export default {
  data() {
    return {
      eatingImg,
      provideOptions,
    }
  },
  computed: {
    classObject: () => {}
  },
  async mounted() {
    const res = await axios.patch('http://localhost:3000/items/59ee', {
      "title": "蔥爆牛肉555",
      "eng": "Stir-fried Beef with Scallions2",
      "healthLevel": 4.5,
      "starchLevel": 0,
      "proteinLevel": 0.25,
      "vegLevel": 0.5,
      "img": "https://res.cloudinary.com/dfvtounam/image/upload/v1707714590/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2_2024-02-12_130924_mbdgp0.png"
    })
    console.log(res)
  }
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

.card-right {
  border-radius: 1.25rem;
  overflow: hidden;
  height: 90%;
}
</style>