<script setup lang="ts">
import ProgressCard from "@/components/ProgressCard.vue";

const frontendSkills = [
  { name: "Vue 3", level: 6 },
  { name: "TypeScript", level: 3 },
  { name: "Nuxt 3", level: 5 },
  { name: "Pinia", level: 5 },
  { name: "Vuetify 3", level: 6 },
];

const backendSkills = [
  { name: "Node.js", level: 4 },
  { name: "Express", level: 4 },
  { name: "Directus", level: 6 },
  { name: "PostgreSQL", level: 3 },
  { name: ".NET APIs", level: 2 },
];
</script>

<template>
  <v-container>
    <v-alert type="info" class="mb-4">
      These are technologies I’ve worked with professionally and/or personally. Skill levels are a mix of proficiency, comfort, and recency of use.
    </v-alert>

    <v-row>
      <v-col cols="12" md="6">
        <ProgressCard :color="'#00acc1'" :skills="frontendSkills" />
      </v-col>

      <v-col cols="12" md="6">
        <ProgressCard :color="'#8e24aa'" :skills="backendSkills" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
h3 {
  margin-bottom: 16px;
}
</style>
