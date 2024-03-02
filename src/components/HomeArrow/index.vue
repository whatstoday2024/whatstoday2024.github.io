<template>

    <div class="home-arrow" :class="{ isBottom: isBottom }" @click="scroll">
        <span ><SortDown style="width: 40px; height: 40px;"/></span>
        <p v-if="!isBottom" class="">scroll</p>
        <p v-if="isBottom" class="isBottom">Top</p>
    </div>

  
</template> 

<script>
import { SortDown } from "@element-plus/icons-vue";
export default {
  data() {
    return {
      isBottom: false
    }
  },
  components: {
    SortDown,
},
  methods: {
    scroll(){
      if(!this.isBottom){
        const distanceToScroll = 500; // 單位是像素
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const targetScroll = scrollTop + distanceToScroll;
        window.scrollTo({
          top: targetScroll,
          behavior: 'smooth' // 平滑滾動效果
        });
      }else{
      window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        })
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', () => {
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 5) {
      // if (window.scrollY + window.screen.height >= document.body.scrollHeight) {
        this.isBottom = true
    }else{
      this.isBottom = false
    }
});
  },
}
</script>

<style lang="scss" scoped>
.home-arrow{
  position: fixed;
  z-index: 999;
  bottom: 1rem;
  right: 1.5rem;
  transition: all 0.5s;
  color: $primary;

  &:hover {
      cursor: pointer;
      transform: translateY(-2px)
    }

  &:active {
      cursor: pointer;
      transform: translateY(2px)
    }
}

.isBottom{

  transform: rotate(180deg);
}

</style>