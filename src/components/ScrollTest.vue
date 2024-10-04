<script setup lang="ts">
    interface User {
        id: Number,
        username: string
        user_type: "vests" | "hats" | "bands"
    }
    
    const props = defineProps<{
        users: User[]
    }>()
</script>

<template>
    <div style="display: flex; overflow-x: auto; overflow-y: hidden; margin: 20px 0;">

        <div class="it" v-for="user in props.users">
            <v-card
                :to="{ name: 'user', params: { id: String(user.id) } }"
                link
                width="300"
                height="200"
            >
            <v-img
                class="align-end text-white"
                height="200"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                cover
                >
                <v-card-title>{{ user.username }}</v-card-title>
                </v-img>
            </v-card>
        </div>
    </div>
</template>

<style>
    .it {
        margin: 0 10px
    }
</style>