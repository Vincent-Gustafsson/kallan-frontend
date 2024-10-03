import { mande } from 'mande'

interface User {
    id: Number,
    username: string
    user_type: "vests" | "hats" | "bands"
}

const users = mande('http://127.0.0.1:8000/users/users')

export function getAllUsers() {
    return users.get<{ vests: User[], hats: User[], bands: User[] }>()
}