<script setup lang="ts">
import { computed } from "vue";
import ProgressCard from "@/components/ProgressCard.vue";
import AppBadge from "@/components/AppBadge.vue";

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

const completedBadges = computed(() => {
  return frontendSkills.reduce((acc, cur) => {
    if (cur.level === 6) {
      const badge = {
        text: cur.name,
        color: "green",
        variant: "elevated",
      }
      acc.push(badge);
    }
    return acc
  }, [])
});
</script>

<template>
  <v-container>
    <v-alert type="info" class="mb-4">
      These are technologies I’ve worked with professionally and/or personally. Skill levels are a mix of proficiency, comfort, and recency of use.
    </v-alert>

    <v-row>
      <v-col cols="12" md="6">
        <ProgressCard :color="'#4F959D'" :skills="frontendSkills" />
      </v-col>

      <v-col cols="12" md="6">
        <ProgressCard :color="'#205781'" :skills="backendSkills" />
      </v-col>
    </v-row>
  </v-container>
  <v-container fluid>
    <v-row class="justify-center items-center">
      <v-col cols="12" md="4">
        <AppBadge
          v-for="skill in completedBadges"
          :key="skill.name"
          :text="skill.text"
          color="green"
          variant="elevated"
          class="mr-4"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
h3 {
  margin-bottom: 16px;
}
</style>
