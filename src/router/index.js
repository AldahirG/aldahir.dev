import { createRouter, createWebHistory } from 'vue-router'

const Portfolio = () => import('../views/Portfolio.vue')

// SICEL
const SicelLogin          = () => import('../views/preview/sicel/SicelLogin.vue')
const SicelLayout         = () => import('../views/preview/sicel/SicelLayout.vue')
const SicelLeads          = () => import('../views/preview/sicel/SicelLeads.vue')
const SicelInscripciones  = () => import('../views/preview/sicel/SicelInscripciones.vue')
const SicelReportes       = () => import('../views/preview/sicel/SicelReportes.vue')

// SISA
const SisaLogin     = () => import('../views/preview/sisa/SisaLogin.vue')
const SisaLayout    = () => import('../views/preview/sisa/SisaLayout.vue')
const SisaDashboard = () => import('../views/preview/sisa/SisaDashboard.vue')
const SisaAlumnos   = () => import('../views/preview/sisa/SisaAlumnos.vue')

// SISI
const SisiLogin        = () => import('../views/preview/sisi/SisiLogin.vue')
const SisiLayout       = () => import('../views/preview/sisi/SisiLayout.vue')
const SisiBoard        = () => import('../views/preview/sisi/SisiBoard.vue')
const SisiSolicitudes  = () => import('../views/preview/sisi/SisiSolicitudes.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Portfolio },

    // SICEL
    { path: '/preview/sicel', component: SicelLogin },
    {
      path: '/preview/sicel/app',
      component: SicelLayout,
      children: [
        { path: '', redirect: '/preview/sicel/app/leads' },
        { path: 'leads',          component: SicelLeads },
        { path: 'inscripciones',  component: SicelInscripciones },
        { path: 'reportes',       component: SicelReportes },
      ]
    },

    // SISA
    { path: '/preview/sisa', component: SisaLogin },
    {
      path: '/preview/sisa/app',
      component: SisaLayout,
      children: [
        { path: '', redirect: '/preview/sisa/app/dashboard' },
        { path: 'dashboard', component: SisaDashboard },
        { path: 'alumnos',   component: SisaAlumnos },
      ]
    },

    // SISI
    { path: '/preview/sisi', component: SisiLogin },
    {
      path: '/preview/sisi/app',
      component: SisiLayout,
      children: [
        { path: '', redirect: '/preview/sisi/app/board' },
        { path: 'board',        component: SisiBoard },
        { path: 'solicitudes',  component: SisiSolicitudes },
      ]
    },
  ]
})

export default router
