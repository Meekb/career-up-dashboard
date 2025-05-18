<script setup lang="ts">
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
        <v-card elevation="2" class="pa-4">
          <h3>Frontend Skills</h3>
          <v-col
            v-for="skill in frontendSkills"
            :key="skill.name"
            cols="12"
          >
            <v-progress-linear
              color="blue"
              height="24"
              :model-value="(skill.level / 6) * 100"
              rounded
              stream
            >
              <strong class="text-white ms-2 outlined-text">{{ skill.name }}</strong>
            </v-progress-linear>
          </v-col>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card elevation="2" class="pa-4">
          <h3>Backend & DevOps</h3>
          <v-col
            v-for="skill in backendSkills"
            :key="skill.name"
            cols="12"
          >
            <v-progress-linear
              color="purple"
              height="24"
              :model-value="(skill.level / 6) * 100"
              rounded
              stream
            >
              <strong class="text-white ms-2 outlined-text">{{ skill.name }}</strong>
            </v-progress-linear>
          </v-col>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
h3 {
  margin-bottom: 16px;
}
/*outline for better visibility*/
.outlined-text {
  color: white;
  text-shadow:
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px  1px 0 #000,
    1px  1px 0 #000;
}
</style>
