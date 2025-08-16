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
