<template>
  <section>
    <HeroSection></HeroSection>
    <WhatSection></WhatSection>
    <ProvideSection></ProvideSection>
    <MemberSection></MemberSection>
    <QAsection></QAsection>
  </section>
</template>

<script>
import HeroSection from './HeroSection.vue';
import MemberSection from './MemberSection.vue';
import ProvideSection from './ProvideSection.vue';
import QAsection from './QAsection.vue';
import WhatSection from './WhatSection.vue';

export default {
  components: { HeroSection, WhatSection, QAsection, MemberSection, ProvideSection }
}
</script>

<style lang="scss" scoped></style>