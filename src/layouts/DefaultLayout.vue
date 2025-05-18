<script setup lang="ts">
import AppFooter from "@/components/AppFooter.vue";
import BottomNav from "@/components/BottomNav.vue";
import SidebarNav from "@/components/SidebarNav.vue";
import { useDisplay } from "vuetify";

const { mdAndUp } = useDisplay();
</script>

<template>
  <!-- SidebarNav always exists; it just shows differently on screen sizes -->
  <v-navigation-drawer app permanent v-if="mdAndUp">
    <SidebarNav />
  </v-navigation-drawer>

  <!-- App bar -->
  <v-app-bar app>
    <v-toolbar color="primary">
      <v-toolbar-title>This is a Header</v-toolbar-title>
    </v-toolbar>
  </v-app-bar>

  <!-- Main content area -->
  <v-main class="px-xxl-1 pt-16">
    <router-view />
  </v-main>

  <!-- Bottom nav on mobile only -->
  <v-bottom-navigation v-if="!mdAndUp" app height="64">
    <BottomNav />
  </v-bottom-navigation>

  <!-- Footer -->
  <v-footer app tag="footer" class="bg-grey-lighten-4 text-center py-0">
    <AppFooter />
  </v-footer>
</template>
