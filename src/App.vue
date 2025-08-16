<template>
  <Header></Header>
  <router-view></router-view>
  <Footer></Footer>
</template>

<script setup>
import Header from './components/Layout/Header.vue';
import Footer from './components/Layout/Footer.vue';
</script>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
