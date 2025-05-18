<script setup lang="ts">
import { ref } from "vue";

const checklistItems = ref([
  { id: 1, text: "Start GitHub profile overhaul with simple Vue3 project", done: true },
  { id: 2, text: "Add CountrySelector test coverage", done: true },
  { id: 3, text: "Complete Skills Page progress logic", done: true },
  { id: 4, text: "Complete Checklist page logic", done: false },
  { id: 5, text: "Write and pass tests for all components", done: false },
  { id: 6, text: "Write the full README instructions for project", done: false },
]);
</script>

<template>
  <v-container>
    <v-alert type="info" class="mb-4">
      This is a checklist for the Career-Up Dashboard to track progress of project completion.
    </v-alert>

    <v-card elevation="2" class="pa-4">
      <h2 class="font-weight-bold mb-4">Project Checklist</h2>
      <v-list>
        <v-list-item
          v-for="item in checklistItems"
          :key="item.id"
          class="d-flex align-center"
        >
          <v-checkbox
            v-model="item.done"
            :label="item.text"
            color="primary"
            hide-details
          />
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>
