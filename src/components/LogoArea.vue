<template>
    <div>
        <img v-bind:src="logo" alt="vue barber shop" />
        <button v-on:click="router.push({ name: pageNames.BOOKING });">Book A Haircut</button>
    </div>
</template>

<script setup>
import { pageNames } from '@/constants/routeNames';
import { useRouter } from 'vue-router'
import logo from '@/images/logo-vue-barber-shop.png'

const router = useRouter();
</script>

<style scoped>
div {
    display: flex;
    flex-direction: column;

    align-items: center;
}

img{
    margin-bottom: 0.5em;

    border: 1px solid lightseagreen;
    border-radius: 12px;

    max-width: 300px;
    height: auto;
}

button {
    background-color: lightseagreen;

    padding-top: 8px;
    padding-bottom: 8px;
    padding-right: 4px;
    padding-left: 4px;

    border-color: green;
    border-radius: 8px;

    color: white;
    text-transform: uppercase;
    text-shadow: 1px 1px 1px green;
}

button:hover {
    color: black;
    text-shadow: 1px 1px 1px grey;
}
</style>