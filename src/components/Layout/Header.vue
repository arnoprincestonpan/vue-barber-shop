<template>
    <nav>
        <ul>
            <PageLink v-for="name in pageNames" :pageName="name"></PageLink>
        </ul>
    </nav>
</template>

<script setup>
import { pageNames } from '@/constants/routeNames';
import PageLink from '@/components/PageLink.vue';
</script>

<style scoped>
ul {
    margin-top: 1em;
    margin-bottom: 1em;
    margin-left: 3em;
    margin-right: 3em;

    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: center;

    gap: 0.5em;
    list-style: none;
}
</style>