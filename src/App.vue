<script>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '../src/components/HellowWorld.vue'

export default {
  components: { HelloWorld },
  data() {
    return {
    };
  },
  computed: {
  },
  methods: {
  },
};
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <nav>
        <h1 class="bg-primary">primary bg</h1>
        <h1 class="bg-brand-blue">brand-blue bg</h1>
        <h1 class="test">自訂變數也可以用在 css</h1>
        <h1 class="test2">自訂變數也可以用在 css (灰階也有加入)</h1>
        <!-- 把 primary 改成我們的主視覺顏色 -->
        <button type="button" class="btn btn-primary">Primary</button>
        <!-- primary-light 為輔助色yellow_light 反之 primary-dark 為輔助色brown -->
        <button type="button" class="btn btn-primary-light">Primary-light</button>
        <!-- brand-red 為輔助色red, 不用red命名是為了保留原本 bootstrap 的 red -->
        <button type="button" class="btn btn-brand-red">brand red</button>
        <!-- bootstrap只改掉 primary 其他的 info 沒改 -->
        <button type="button" class="btn btn-info">Info</button>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style lang="scss" scoped>
.test {
  //也可以用 $XXXXX 取用自訂變數
  color: $brand-red;
}

.test2 {
  //也可以用 $XXXXX 取用自訂變數
  color: $greyD4;
}
</style>
