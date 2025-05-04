<script setup lang="ts">
type Props = {
  text: string;
  color?: string;
  variant?: "flat" | "outlined" | "elevated";
};

const props = defineProps<Props>();
</script>

<template>
  <v-chip
    class="app-badge"
    :color="props.color"
    :variant="props.variant"
    size="small"
    label
  >
    {{ text }}
  </v-chip>
</template>

<style scoped>
.app-badge {
  font-weight: 500;
  text-transform: uppercase;
}
</style>
