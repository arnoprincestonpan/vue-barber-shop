<template>
  <div class="page">
    <Header></Header>
    <LogoArea></LogoArea>
    <main>
      <router-view></router-view>
    </main>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Header from './components/Layout/Header.vue';
import Footer from './components/Layout/Footer.vue';
import LogoArea from './components/LogoArea.vue';
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;

  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
}

body {
  background: lightseagreen;
  background-image: url("data:image/svg+xml,%3C!-- svg: first layer --%3E%3Csvg viewBox=\'0 0 250 250\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'4\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E");
}

.page {
  background-color: white;

  display: flex;
  flex-direction: column;

  margin-left: 15%;
  margin-right: 15%;

  height: 100vh;
}
</style>
