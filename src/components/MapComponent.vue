<script setup>
import { ref, computed, watch } from 'vue'
import { GoogleMap } from 'vue3-google-map'

const mapRef = ref(null)
const center = { lat: 0, lng: 0 }

const _lng = ref(0)
const lng = computed({
  get: () => _lng.value,
  set: v => {
    if (!Number.isFinite(v)) {
      _lng.value = 0
    } else if (v > 180) {
      _lng.value = 180
    } else if (v < -180) {
      _lng.value = -180
    } else {
      _lng.value = v
    }
  },
})

watch([() => mapRef.value?.ready, lng], ([ready, lng]) => {
  if (!ready)
    return

  mapRef.value.map.panTo({ lat: 0, lng })
})
</script>

<template>
  <GoogleMap
    ref="mapRef"
    api-key="YOUR_GOOGLE_MAPS_API_KEY"
    class="map"
    :center="center"
    :zoom="2"
  />
  <label for="lng">Longitude</label>
  <input v-model.number="lng" id="lng" type="number" min="-180" max="180" step="10" />
</template>

<style scoped>
.map {
  position: relative;
  width: 100%;
  height: 500px;
}

.map::after {
  position: absolute;
  content: '';
  width: 1px;
  height: 100%;
  top: 0;
  left: 50%;
  background: red;
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
</style>
