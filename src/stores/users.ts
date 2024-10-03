import { defineStore } from 'pinia'

import { getAllUsers } from '@/api/users'

interface User {
    id: Number,
    username: string
    user_type: "vests" | "hats" | "bands"
}

interface UsersState {
    users: {
        vests: User[],
        hats:  User[],
        bands: User[]
    }
}

export const useUsersStore = defineStore('users', {
    state: (): UsersState => {
        return {
            users: {
                vests: [],
                hats:  [],
                bands: []
            }
        }
    },

    actions: {
        async getUsers() {
            try {
                this.users = await getAllUsers()
            } catch (error) {
                return error
            }
        }
    }
})