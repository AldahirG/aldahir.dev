import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSisiAuth = defineStore('sisi-auth', () => {
  const user = ref(null)
  const DEMO = { email: 'designer@sisi.mx', password: 'demo1234', name: 'Ana Diseñadora', role: 'designer' }

  async function signIn({ email, password }) {
    await new Promise(r => setTimeout(r, 600))
    if (email === DEMO.email && password === DEMO.password) {
      user.value = { name: DEMO.name, role: DEMO.role, email }
      return true
    }
    return false
  }

  function signOut() { user.value = null }
  const isAuth = () => !!user.value

  return { user, signIn, signOut, isAuth }
})
