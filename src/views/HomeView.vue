<script setup lang="ts">
    import ScrollTest from "@/components/ScrollTest.vue"
    import { useUsersStore } from "@/stores/users";
    import { onMounted } from "vue";

    const store = useUsersStore();

    onMounted(async () => {
        const error = await store.getUsers()
        console.log(error)
    })

</script>

<template>
    <h1>Home</h1>
    <div style="display: flex; flex-direction: column; justify-content: space-around; height: 80vh;">
        <div style="display: flex;">
            <v-avatar icon="mdi-tshirt-crew"></v-avatar>
            <h2>Västar</h2>
        </div>
        <v-divider />
        <ScrollTest :users="store.users.vests" />
        
        <div style="display: flex;">
            <v-avatar icon="mdi-hat-fedora"></v-avatar>
            <h2>Hattar</h2>
        </div>
        <v-divider />
        <ScrollTest :users="store.users.hats" />
        
        <div style="display: flex;">
            <v-avatar icon="mdi-minus"></v-avatar>
            <h2>Provisar</h2>
        </div>
        <v-divider />        
        <ScrollTest :users="store.users.bands" />
    </div>
</template>
