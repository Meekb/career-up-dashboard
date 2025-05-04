<script setup lang="ts">
// nothing needed yet
import DefaultLayout from "@/layouts/DefaultLayout.vue";
</script>

<template>
  <v-app class="d-flex flex-column min-h-screen">
    <DefaultLayout>
    <v-main>
      <router-view />
    </v-main>
    </DefaultLayout>
  </v-app>
</template>
