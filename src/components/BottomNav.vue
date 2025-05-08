<script setup lang="ts">
import { useDisplay } from "vuetify";
import { useRoute, useRouter } from "vue-router";

const { mdAndDown } = useDisplay();
const route = useRoute();
const router = useRouter();

const navLinks = [
  { text: "Dashboard", icon: "mdi-view-dashboard", to: "/" },
  { text: "Timezones", icon: "mdi-clock-outline", to: "/timezones" },
  { text: "Skills", icon: "mdi-star", to: "/skills" },
  { text: "Checklist", icon: "mdi-check-circle-outline", to: "/checklist" },
];

function go(to: string) {
  if (route.path !== to) router.push(to);
}
</script>

<template>
  <v-bottom-navigation
    v-if="mdAndDown"
    app
    fixed
    grow
    height="64"
  >
    <v-btn
      v-for="link in navLinks"
      :key="link.to"
      :icon="true"
      @click="go(link.to)"
      color="blue"
    >
      <v-icon>{{ link.icon }}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>
