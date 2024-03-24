<template>
  <div style="min-height: 100vh;" class="d-flex flex-column relative over">
    <HeaderComponent></HeaderComponent>
    <RouterView></RouterView>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import memberStore from '@/stores/memberData'
import { mapActions } from 'pinia'
import HeaderComponent from '@/components/HeaderComponent/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent/FooterComponent.vue'

export default {
  components: { HeaderComponent, FooterComponent },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
    ...mapActions(memberStore, ['getUser'])
  },
  async mounted () {
    await this.getUser()
  }
}
</script>

<style lang="scss" scoped>
.over{
  overflow-x: hidden;
}
</style>
