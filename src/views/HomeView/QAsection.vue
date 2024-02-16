<template>
  <div class="section">d
    <div class="card bg-primary-mid">
      <div class="card-body d-flex justify-content-between">
        <h2 class="card-title fw-bold card-left">常見問題</h2>
        <div class="accordion" id="myAccordion">
          <div v-for="(item, index) in items" :key="index" class="accordion-item">
            <h2 class="accordion-header" :id="'heading' + index">
              <button class="accordion-button fw-bold" type="button" :class="{ 'collapsed': activeItem !== index }"
                @click="toggleAccordion(index)">Q. {{ item.title }} </button>
            </h2>
            <div :id="'collapse' + index" class="accordion-collapse collapse" :class="{ 'show': activeItem === index }"
              :aria-labelledby="'heading' + index">
              <div class="accordion-body text-primary-dark">A. {{ item.content }} </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { QAs } from '@/utils/variables'
export default {
  data() {
    return {
      items: [],
      activeItem: 1,
    }
  },
  methods: {
    toggleAccordion(index) {
      this.activeItem = this.activeItem === index ? null : index;
    },
  },
  mounted() {
    this.items = QAs
  }
}
</script>

<style lang="scss" scoped>
.card {
  background-image: url('@/assets/img/qa_bg.png');
  background-repeat: no-repeat;
  // background-position: start;
  background-size: contain;
}
</style>