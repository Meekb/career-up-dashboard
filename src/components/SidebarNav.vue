<script setup lang="ts">
const navLinks = [
  { text: "Dashboard", icon: "mdi-view-dashboard", to: "/" },
  { text: "Timezones", icon: "mdi-clock-outline", to: "/timezones" },
  { text: "Skills", icon: "mdi-star", to: "/skills" },
  { text: "Checklist", icon: "mdi-check-circle-outline", to: "/checklist" },
];
</script>

<template>
  <v-list nav density="compact">
    <v-list-item
      v-for="link in navLinks"
      :key="link.to"
      :to="link.to"
      router
    >
      <template #prepend>
        <v-icon>{{ link.icon }}</v-icon>
      </template>
      <v-list-item-title>{{ link.text }}</v-list-item-title>
    </v-list-item>
  </v-list>
</template>
