<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useCountryInfo } from "@/composables/useCountryInfo.js";
import { formatNumberWithCommas } from "@/utils/formatters.js";

const {
  area,
  capital,
  countryName,
  currencyName,
  currencySymbol,
  languages,
  officialName,
  population,
  selectedCountry,
} = useCountryInfo();

const formattedArea = computed<string>(() => {
  return formatNumberWithCommas(area?.value);
});

const formattedPopulation = computed<string>(() => {
  return formatNumberWithCommas(population?.value);
});

onMounted(() => {
  if (selectedCountry.value) {
    console.log("Restored from session:", selectedCountry.value);
  } else {
    console.log("No session country stored.");
  }
});
</script>

<template>
  <v-card height="450" elevation="4" rounded="lg" class="pa-2">
    <v-toolbar color="blue">
      <v-toolbar-title>
        {{ countryName || "Select a Country to View Summary"}}
      </v-toolbar-title>
    </v-toolbar>
    <div v-if="countryName" class="summary">
      <v-row>
        <v-col>
          <div class="summary">
            <v-card-text><strong>Official Name:</strong> <span class="ml-1">{{ officialName }}</span></v-card-text>
            <v-card-text><strong>Capital:</strong> <span class="ml-1">{{ capital }}</span></v-card-text>
            <v-card-text><strong>Population:</strong> <span class="ml-1">{{ formattedPopulation }}</span></v-card-text>
            <v-card-text><strong>Area:</strong>  <span class="ml-1">{{ formattedArea }}</span></v-card-text>
            <v-card-text ><strong>Languages:</strong> <span class="ml-1">{{ languages }}</span></v-card-text>
            <v-card-text><strong>Currency:</strong> <span class="ml-1">{{ currencyName }}</span></v-card-text>
            <v-card-text><strong>Currency Symbol:</strong> <span class="ml-1">{{ currencySymbol }}</span></v-card-text>
          </div>
        </v-col>
      </v-row>
    </div>
    <div v-else class="alt-content">
      <v-card-text class="text-center text-medium-emphasis">
        <v-icon size="48" color="primary">mdi-earth</v-icon>
        <div class="mt-2">No country selected</div>
        <div>Select one from the dropdown to begin.</div>
      </v-card-text>
    </div>
  </v-card>
</template>
