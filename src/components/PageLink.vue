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