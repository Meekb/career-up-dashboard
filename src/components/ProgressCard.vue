<script setup lang="ts">
const props = defineProps({
  color: { type: String, default: "blue" },
  skills: { type: Array, default: () => [] },
});
</script>

<template>
  <v-card elevation="2" class="pa-4">
    <h3>Frontend Skills</h3>
    <v-col
      v-for="skill in props.skills"
      :key="skill.name"
      cols="12"
    >
      <v-progress-linear
        :color="color"
        height="24"
        :model-value="(skill.level / 6) * 100"
        rounded
        stream
      >
        <strong class="text-white ms-2 outlined-text">{{ skill.name }}</strong>
      </v-progress-linear>
    </v-col>
  </v-card>
</template>

<style>
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
