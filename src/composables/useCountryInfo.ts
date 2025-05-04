import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useCountryStore } from "@/stores/useCountryStore";

export function useCountryInfo() {
  const countryStore = useCountryStore();
  const { selectedCountry } = storeToRefs(countryStore);

  const area = computed(() => selectedCountry.value?.area ?? null);
  const capital = computed(() => selectedCountry.value?.capital?.[0] ?? "");
  const countryName = computed(() => selectedCountry.value?.name?.common ?? "");
  const currencyName = computed(() => {
    if (!selectedCountry.value?.currencies) return "";
    const key = Object.keys(selectedCountry.value.currencies)[0];
    return selectedCountry.value.currencies[key].name;
  });
  const currencySymbol = computed(() => {
    if (!selectedCountry.value?.currencies) return "";
    const key = Object.keys(selectedCountry.value.currencies)[0];
    return selectedCountry.value.currencies[key].symbol;
  });
  const flagUrl = computed(() => selectedCountry.value?.flags?.png ?? null);
  const languages = computed(() => {
    if (!selectedCountry.value?.languages) return "";

    const values = Object.values(selectedCountry.value.languages);
    return values.join(", "); // display as a comma-separated string
  });
  const officialName = computed(() => selectedCountry.value?.name?.official ?? "");
  const population = computed(() => selectedCountry.value?.population ?? null);


  return {
    area,
    capital,
    countryName,
    currencyName,
    currencySymbol,
    flagUrl,
    languages,
    officialName,
    population,
    selectedCountry,
  };
}
