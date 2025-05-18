<script setup lang="ts">
import ChecklistCard from "@/components/ChecklistCard.vue";
import {ref} from "vue";

const checklistItems = ref([
  { id: 1, text: "Start GitHub profile overhaul with simple Vue3 project", done: true },
  { id: 2, text: "Add CountrySelector test coverage", done: true },
  { id: 3, text: "Complete Skills Page progress logic", done: true },
  { id: 4, text: "Complete Checklist page logic", done: true },
  { id: 5, text: "Write and pass tests for all components", done: false },
  { id: 6, text: "Write the full README instructions for project", done: false },
]);
</script>

<template>
  <v-container>
    <v-alert type="info" class="mb-4">
      This is a checklist for the Career-Up Dashboard to track progress of project completion.
    </v-alert>

    <ChecklistCard :checkboxes="checklistItems" />
  </v-container>
</template>
