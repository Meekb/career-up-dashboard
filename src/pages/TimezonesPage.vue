<script setup>
import { computed } from "vue";
import { storeToRefs } from "pinia";
import MapAndTimezones from "@/components/MapAndTimezones.vue";
import { useCountryStore } from "@/stores/useCountryStore.js";

const countryStore = useCountryStore();
const { selectedCountry } = storeToRefs(countryStore);

const showMap = computed(() => {
  console.log(selectedCountry);
  return selectedCountry?.value !== {};
});
</script>

<template>
  <h1>Timezones</h1>
  <MapAndTimezones v-if="showMap" />
</template>
