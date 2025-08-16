<template>
    <nav>
        <ul>
            <li>
                <router-link v-bind:to="{ name: pageNames.HOME }">Home</router-link>
            </li>
            <li>
                <router-link v-bind:to="{ name: pageNames.BOOKING }">Booking</router-link>
            </li>
            <li>
                <router-link v-bind:to="{ name: pageNames.CONTACT }">Contact Us</router-link>
            </li>
            <li>
                <router-link v-bind:to="{ name: pageNames.SERVICES }">Services</router-link>
            </li>
            <li>
                 <router-link v-bind:to="{ name: pageNames.SCHEDULES }">Schedules</router-link>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { pageNames } from '@/constants/pageNames';
</script>
