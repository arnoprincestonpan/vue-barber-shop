<template>
    <li>{{ variable }}</li>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    variable: String,
})
</script>