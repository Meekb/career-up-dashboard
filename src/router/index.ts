import { createRouter, createWebHistory } from "vue-router";
import DashboardPage from "@/pages/DashboardPage.vue";
import TimezonesPage from "@/pages/TimezonesPage.vue";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: DashboardPage,
  },
  {
    path: "/timezones",
    name: "Timezones",
    component: TimezonesPage,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
