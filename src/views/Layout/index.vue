<template>
  <HeaderComponent></HeaderComponent>
  <RouterView></RouterView>
  <FooterComponent></FooterComponent>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent'

import FooterComponent from '@/components/FooterComponent'

export default {
  components: { HeaderComponent, FooterComponent },
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