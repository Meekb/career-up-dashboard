<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { GoogleMap } from "vue3-google-map";
import { useCountryInfo } from "@/composables/useCountryInfo.ts";
import { useCountryStore } from "@/stores/useCountryStore.js";
import { DateTime } from "luxon";
import { useDisplay } from "vuetify";

const { mdAndUp } = useDisplay();

const apiKey: string = import.meta.env.VITE_MAPS_API_KEY;

const countryStore = useCountryStore();
const { selectedCountry } = storeToRefs(countryStore);

const countryInfo = useCountryInfo();
const mapRef = ref(null);

const _lng = ref<number>(countryInfo.countryLatLng.value?.lng ?? 0);

const timezoneTimes = ref<{ zone: string; time: string }[]>([]);

// Computed
const lng = computed({
  get: () => _lng.value,
  set: (v: number) => {
    _lng.value = Number.isFinite(v) ? Math.max(-180, Math.min(180, v)) : 0;
  }
});

const center = computed(() => ({
  lat: countryInfo.countryLatLng.value?.lat,
  lng: lng.value,
}));

const zoomValue = computed(() => {
  const veryLargeCountry = ["Canada", "United States"];
  if (veryLargeCountry.includes(countryInfo.countryName.value)) {
    if (mdAndUp.value) {
      return 4;
    }
    return 3.75;
  }
  return 6;
});

function updateTimezoneTimes() {
  if (!selectedCountry.value?.timezones) return;

  timezoneTimes.value = selectedCountry.value.timezones.map((zone) => {
    const time = DateTime.now().setZone(zone).toFormat("HH:mm:ss");
    return { zone, time };
  });
}

onMounted(() => {
  updateTimezoneTimes();
  setInterval(updateTimezoneTimes, 1000);
});
</script>

<template>
  <div class="timezones mx-16 my-4">
    <v-row>
      <v-col
        v-for="(tz, i) in timezoneTimes"
        :key="tz.zone + '-' + i"
        cols="6"
        md="4"
        lg="3"
      >
        <div><strong>{{ tz.zone }}</strong>: {{ tz.time }}</div>
      </v-col>
    </v-row>

  </div>
  <GoogleMap
    ref="mapRef"
    :api-key="apiKey"
    class="map"
    :center="center"
    :zoom="zoomValue"
  />
</template>

<style scoped>
.map {
  position: relative;
  width: 100%;
  height: 500px;
}

label {
  font-weight: 500;
}

input[type='number'] {
  margin-top: 20px;
  margin-left: 10px;
  outline: 1px solid #ccc;
  border-radius: 4px;
}

.timezones {
  margin-top: 2rem;
}
.timezones ul {
  list-style: none;
  padding: 0;
}
.timezones li {
  margin-bottom: 0.5rem;
}
</style>
