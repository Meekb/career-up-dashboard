<script setup>
const props = defineProps({
  checkboxes: { type: Array, default: () => [] },
});
</script>

<template>
  <v-card elevation="2" class="pa-4">
    <h2 class="font-weight-bold mb-4">Project Checklist</h2>
    <v-list>
      <v-list-item
        v-for="item in props.checkboxes"
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
</template>
