<script setup>
import CountrySelector from "@/components/CountrySelector.vue";
import CountrySummary from "@/components/CountrySummary.vue";
</script>

<template>
  <main>
    <v-container fluid>
      <v-row class="justify-center items-center">
        <v-col cols="12" md="4">
          <CountrySelector />
        </v-col>
        <v-col cols="12" md="8">
          <CountrySummary />
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

