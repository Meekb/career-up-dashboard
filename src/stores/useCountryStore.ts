import { ref, computed } from "vue";
import { defineStore } from "pinia";
import {StorageSerializers, useSessionStorage} from "@vueuse/core";
import { fetchCountries } from "@/api/dashboard.js";
import type { Country } from "@/models/country.model";

export const useCountryStore = defineStore("country", () => {
  // State
  const countries = ref<Country[]>([]);

  // ✅ Persist selectedCountry in sessionStorage
  const selectedCountry = useSessionStorage<Country | null>(
    "selected-country",
    null,
    { serializer: StorageSerializers.object }
  );

  const getSelectableCountries = computed(() => {
    const allowed = ["united states", "poland", "canada", "germany", "united kingdom", "portugal"];
    return countries.value
      .filter((country) => allowed.includes(country.name.common.toLowerCase()))
      .sort((a, b) => a.name.common.localeCompare(b.name.common));
  });

  async function getAllCountries() {
    const response = await fetchCountries();
    setCountries(response.data);
  }

  function setCountries(list: Country[]) {
    countries.value = list;
  }

  function setSelectedCountry(country: Country) {
    selectedCountry.value = null;
    selectedCountry.value = country;
  }

  return {
    countries,
    selectedCountry,
    getSelectableCountries,
    getAllCountries,
    setSelectedCountry,
  };
});
