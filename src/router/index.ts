import { createRouter, createWebHistory } from "vue-router";
import ChecklistPage from "@/pages/ChecklistPage.vue";
import DashboardPage from "@/pages/DashboardPage.vue";
import SkillsPage from "@/pages/SkillsPage.vue";
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
  },
  {
    path: "/skills",
    name: "Skills",
    component: SkillsPage,
  },
  {
    path: "/checklist",
    name: "Checklist",
    component: ChecklistPage,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
