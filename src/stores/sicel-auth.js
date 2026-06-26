import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSicelAuth = defineStore('sicel-auth', () => {
  const user = ref(null)
  const DEMO = { email: 'demo@sicel.mx', password: 'demo1234', name: 'Admin Demo', role: 'admin' }

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
