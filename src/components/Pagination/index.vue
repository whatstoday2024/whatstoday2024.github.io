<template>
  <div class="pagination">
    <div class='page-item' :class="{'active': page === currentPage}" v-for="(page,index) in totalPages" :key="index">
          <button  class="page-link"
                  :key="index"
                  @click="goToPage(page)"
                  >
              {{ page }}
          </button>
      </div>
  </div>
</template>

<script>


export default {
  props: ["totalPages", "currentPage"],

  setup(props, { emit }) {
    const goToPage = (toPage) => {
      emit("goToPage", toPage);
    };

    return { goToPage };
  },
  data() {
    return {
    
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.pagination{
  margin-top: 2rem;
  display: flex;
  justify-content: center;
}
</style>