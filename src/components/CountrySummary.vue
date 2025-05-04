<script setup>
import { computed } from "vue";
import { useCountryInfo } from "@/composables/useCountryInfo.js";
import { formatNumberWithCommas } from "@/utils/formatters.js";

const formattedArea = computed(() => {
  return formatNumberWithCommas(area?.value);
})

const formattedPopulation = computed(() => {
  return formatNumberWithCommas(population?.value);
});

const {
  area,
  capital,
  countryName,
  currencyName,
  currencySymbol,
  languages,
  officialName,
  population,
} = useCountryInfo();
</script>

<template>
  <v-card height="450" elevation="4" rounded="lg" class="pa-4">
    <v-toolbar color="blue">
      <v-toolbar-title>
        {{ countryName}}
      </v-toolbar-title>
    </v-toolbar>
    <v-card-text><strong>Official Name:</strong> <span class="ml-1">{{ officialName }}</span></v-card-text>
    <v-card-text><strong>Capital:</strong> <span class="ml-1">{{ capital }}</span></v-card-text>
    <v-card-text><strong>Population:</strong> <span class="ml-1">{{ formattedPopulation }}</span></v-card-text>
    <v-card-text><strong>Area:</strong>  <span class="ml-1">{{ formattedArea }}</span></v-card-text>
    <v-card-text class="ml-1"><strong>Languages:</strong> {{ languages }}</v-card-text>
    <v-card-text><strong>Currency:</strong> <span class="ml-1">{{ currencyName }}</span></v-card-text>
    <v-card-text><strong>Currency Symbol:</strong> <span class="ml-1">{{ currencySymbol }}</span></v-card-text>
  </v-card>
</template>
