<script setup lang="ts">
import AppFooter from "@/components/AppFooter.vue";
import SidebarNav from "@/components/SidebarNav.vue";
</script>

<template>
  <v-app>
    <header>
      <!-- Add something like a logo here -->
    </header>

    <v-navigation-drawer app permanent>
      <SidebarNav />
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>

    <footer>
      <AppFooter />
    </footer>
  </v-app>
</template>
