<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useCountryStore } from "@/stores/useCountryStore.js";
import { useCountryInfo } from "@/composables/useCountryInfo.js";

const countryStore = useCountryStore();
const { getSelectableCountries } = storeToRefs(countryStore);

const { flagUrl } = useCountryInfo();

const selectedCountryName = ref("");

const selectorCountries = computed(() => {
  return getSelectableCountries.value.map((country) => {
    return country.name.common;
  });
});

watch(selectedCountryName, (newCountry) => {
  const match = getSelectableCountries.value.find(
    (country) => country.name.common === newCountry
  );
  if (match) {
    countryStore.setSelectedCountry(match);
  }
});

onMounted(async () => {
  await countryStore.getAllCountries();
});
</script>

<template>
  <v-card height="450" elevation="4" rounded="lg" class="pa-2">
    <v-toolbar color="blue">
      <v-toolbar-title>Country Selector</v-toolbar-title>
    </v-toolbar>
    <div class="selector-content ma-4">
      <v-select
        v-if="selectorCountries.length"
        v-model="selectedCountryName"
        data-testid="country-select"
        label="Select a country"
        :items="selectorCountries"
        hint="Choose a country"
        persistent-hint
        return-object
        variant="underlined"
      />
      <div v-else class="text-caption text-grey">
        Loading countries...
      </div>
    </div>
    <!-- Wrap flag in a padded and centered div -->
    <div class="d-flex justify-center pa-6">
      <v-img
        v-if="flagUrl"
        :src="flagUrl"
        alt="Country flag"
        height="175"
        class="elevation-4 rounded"
        cover
      />
    </div>
  </v-card>
</template>

<style lang="css" scoped>
.selection {
  background-color: #f0f0f0;
  border-radius: 8px;
  margin: 0 auto;
  width: 80%;
  padding: 8px;
}

.flag-img {
  /*border: 1px solid #ccc;*/
  border-radius: 4px;
}
</style>
