<template>
  <div style="min-height: 100vh;" class="d-flex flex-column relative over">
    <HeaderComponent />
    <RouterView />
    <FooterComponent />
  </div>
</template>

<script>
import memberData from '@/stores/memberData'
import { mapActions } from 'pinia'
import HeaderComponent from '@/components/HeaderComponent'
import FooterComponent from '@/components/FooterComponent'

export default {
  components: { HeaderComponent, FooterComponent },
  data() {
    return {
    }
  },
  computed: {
  },
  methods: {
    ...mapActions(memberData, ['getUser'])
  },
  async mounted() {
    await this.getUser()
  }
}
</script>

<style lang="scss" scoped>
.over {
  overflow-x: hidden;
}
</style>
