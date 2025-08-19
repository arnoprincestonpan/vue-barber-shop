<template>
    <div>
        <div class="image-container">
            <img v-bind:src="logo" alt="vue barber shop" />
        </div>
        <div class="button-container">
            <button v-on:click="router.push({ name: pageNames.BOOKING });">Book A Haircut</button>
        </div>
    </div>
</template>

<script setup>
import { pageNames } from '@/constants/routeNames';
import { useRouter } from 'vue-router'
import logo from '@/images/logo-vue-barber-shop.png'

const router = useRouter();
</script>

<style scoped>
div{
    display: flex;
    flex-direction: column;
}

.image-container, .button-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

img {
    min-width: 200px;

    margin-left: 1em;
    margin-right: 1em;

    border: 1px solid lightseagreen;
    border-radius: 12px;
    max-width: 300px;
}

button {
    margin-top: 0.5em;
    background-color: lightseagreen;

    padding-top: 8px;
    padding-bottom: 8px;
    padding-right: 4px;
    padding-left: 4px;

    border-color: green;
    border-radius: 8px;

    color: white;
    text-align: center;
    text-transform: uppercase;
    text-shadow: 1px 1px 1px green;
}

button:hover {
    color: black;
    text-shadow: 1px 1px 1px grey;
}
</style>