<template>
  <HeaderComponent></HeaderComponent>
  <RouterView></RouterView>
  <FooterComponent></FooterComponent>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent'
import HomeView from '@/views/HomeView'
import FooterComponent from '@/components/FooterComponent'

export default {
  components: { HeaderComponent, HomeView, FooterComponent },
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

<style lang="scss" scoped></style>