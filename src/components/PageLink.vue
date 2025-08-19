<template>
    <li>
        <router-link v-bind:to="{ name: pageName }">{{ pageName.toString().charAt(0).toUpperCase() +
            pageName.toString().slice(1).toLowerCase() }}
        </router-link>
    </li>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    pageName: String,
})
</script>

<style scoped>
li {
    list-style: none;
}

a {
    display: flex;
    flex-direction: row;
    justify-content: center;

    flex: 1;
    padding: 10px 15px;
    border: 1px solid lightgrey;
    border-radius: 5px;

    text-decoration: none;
    font-size: large;
    color: #36454F;
}

a:hover{
    background-color: lightgreen;
   color: lightseagreen;
}

@media screen and (max-width: 768px) {
    li {
        width: 100%;
    }
    a {
        flex-direction: column;
    }
}
</style>