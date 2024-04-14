<template>
  <section class="relative">
    <HeroSection />
    <WhatSection />
    <ProvideSection />
    <MemberSection />
    <QAsection />
    <HomeArrow />
  </section>
</template>

<script>
import HeroSection from './HeroSection.vue'
import MemberSection from './MemberSection.vue'
import ProvideSection from './ProvideSection.vue'
import QAsection from './QAsection.vue'
import WhatSection from './WhatSection.vue'
import HomeArrow from '@/components/HomeArrow'

export default {
  components: { HeroSection, WhatSection, QAsection, MemberSection, ProvideSection, HomeArrow }
}
</script>

<style lang="scss" scoped></style>
