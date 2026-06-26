import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSisaAuth = defineStore('sisa-auth', () => {
  const user = ref(null)
  const DEMO = { email: 'admin@sisa.mx', password: 'demo1234', name: 'Coordinador SISA', role: 'admin' }

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
