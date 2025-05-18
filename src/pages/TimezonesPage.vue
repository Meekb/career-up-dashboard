<script setup>
import { computed } from "vue";
import { storeToRefs } from "pinia";
import MapAndTimezones from "@/components/MapAndTimezones.vue";
import { useCountryStore } from "@/stores/useCountryStore.js";

const countryStore = useCountryStore();
const { selectedCountry } = storeToRefs(countryStore);

const showMap = computed(() => {
  return selectedCountry?.value !== {};
});
</script>

<template>
  <v-alert type="info" variant="tonal" class="mb-4">
    <strong>What do these timezones mean?</strong><br>
    UTC stands for <em>Coordinated Universal Time</em>. The number after it shows the difference in hours from UTC:
    <ul class="pl-8">
      <li><code>UTC+01:00</code> means 1 hour ahead of UTC (e.g., Central Europe in winter)</li>
      <li><code>UTC-05:00</code> means 5 hours behind UTC (e.g., Eastern US)</li>
    </ul>
  </v-alert>
  <h2 class="ma-4 font-weight-bold">Timezones</h2>
  <MapAndTimezones v-if="showMap" />
</template>
