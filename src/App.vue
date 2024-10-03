<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <v-app>
    <RouterView />

    <v-bottom-navigation mode="shift" grow>
        <v-btn to="/calendar" value="recent">
            <v-icon icon="mdi-calendar"/>
            <span>Calendar</span>
        </v-btn>

        <v-btn to="/" value="favorites">
            <v-icon icon="mdi-home"/>
            <span>Home</span>
        </v-btn>

        <v-btn to="/profile" value="nearby">
            <v-icon icon="mdi-account"/>
            <span>Profile</span>
        </v-btn>
    </v-bottom-navigation>
    </v-app>
</template>

<style scoped>
</style>
