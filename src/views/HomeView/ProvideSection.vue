<template>
  <section class="section">
    <h1 class="section-title fw-bold"> 為了解決上述困擾，我們提供了... </h1>
    <div class="row">
      <div class="col-7">
        <div class="card-left bg-primary-light">
          <div class="d-flex gap-3" v-for="(item, index) in provideOptions" :key="item.id">
            <div class='icon icon-1'>
              <img :src="item.icon" alt="icon">
            </div>
            <div>
              <h3 class="fw-bold">{{ item.title }}</h3>
              <h6>{{ item.content }}</h6>
            </div>
          </div>
        </div>
      </div>
      <div class="col-5 ">
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
export default {
  data() {
    return {
      eatingImg,
      provideOptions,
    }
  },
  computed: {
    classObject: () => {}
  }

}
</script>

<style lang="scss" scoped>
.card-left {

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  border-radius: 20px;
  height: 90%;
  padding: 4rem;

  background-image: url('@/assets/img/sloution_bottom.png');
  background-repeat: no-repeat;
  background-position: 100% 100%;
  background-size: 65%;
}

.icon {
  // padding: 5px;
  // background-color: white;
  // border-radius: 8px;
  // display: grid;
  // place-items: center;
  width: 60px;
  height: 60px;

  // &-1 {
  //   border: 3px solid $primary;
  // }
}

.card-right {
  border-radius: 20px;
  overflow: hidden;
  height: 90%;
}
</style>