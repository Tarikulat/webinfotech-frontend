<script setup>
import { Topbar, Header, HomeSection, Footer } from '@/views/common'

</script>

<template>
  <div>
    <!-- This is home page Layout structure start -->

    <Topbar />

    <Header />

    <HomeSection />

    <RouterView />

    <!-- <Chartbot /> -->

    <Footer />

    <!-- This is home page Layout structure end -->
  </div>
</template>


<style scoped></style>