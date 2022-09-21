<template>
  <div
    v-resize="setRotation"
  >
    <vl-map
      ref="map"
      class="absolute inset-0 w-full h-full"
      :load-tiles-while-animating="true"
      :load-tiles-while-interacting="true"
      data-projection="EPSG:4326"
    >
      <vl-view :zoom.sync="zoom" :center.sync="center" :extent.sync="extent" :rotation.sync="rotation" />

      <vl-geoloc @update:position="geolocPosition = $event">
        <template #default="geoloc">
          <vl-feature v-if="geoloc.position" id="position-feature">
            <vl-geom-point :coordinates="geoloc.position" />
            <vl-style-box>
              <vl-style-icon src="_media/marker.png" :scale="0.4" :anchor="[0.5, 1]" />
            </vl-style-box>
          </vl-feature>
        </template>
      </vl-geoloc>

      <vl-layer-tile
        id="osm"
        class="filter grayscale"
      >
        <vl-source-osm />
      </vl-layer-tile>

      <vl-feature
        v-for="(location, index) in locations"
        :key="index"
        @click="alert('hi')"
      >
        <vl-geom-point
          :coordinates="[location.longitude, location.latitude]"
        />

        <vl-style>
          <vl-style-circle :radius="10">
            <vl-style-fill
              :color="location.slug === lastLocation ? '#1f4dfc' : '#839cff'"
            />
            <vl-style-text
              :text="location.title"
              :offset-y="-20"
            />
          </vl-style-circle>
        </vl-style>
      </vl-feature>

      <vl-overlay
        v-for="(location, index) in locations"
        :key="index"
        :position="[location.longitude, location.latitude]"
      >
        <nuxt-link
          :to="'/locations/' + location.slug"
          class="cursor-pointer"
        >
          <span class="absolute h-5 w-5 transform -translate-x-1/2 -translate-y-1/2" />
          <span
            class="absolute inline-block transform translate-x-8 -translate-y-1/2 whitespace-nowrap font-bold leading-none rounded-full p-1 px-2 md:-translate-x-1/2 md:-translate-y-1/2"
            :class="(index % 2 === 0 ? 'md:-mt-16' : 'md:mt-16') + ' ' + (location.slug === lastLocation ? 'bg-cobalt text-white' : 'bg-cornflower text-cobalt bg-opacity-50')"
          >
            {{ location.title }}
          </span>
        </nuxt-link>
      </vl-overlay>

      <vl-feature v-if="lineCoordinates.length">
        <vl-geom-line-string :coordinates="lineCoordinates" />

        <vl-style>
          <vl-style-stroke
            color="#839cff"
            :width="5"
            :line-dash="[1, 8]"
          />
        </vl-style>
      </vl-feature>
    </vl-map>

    <div
      v-if="debug"
      class="p-5 bg-black text-white absolute bottom-0 right-0"
    >
      Zoom: {{ zoom }}<br>
      Center: {{ center }}<br>
      Rotation: {{ rotation }}<br>
      My geolocation: {{ geolocPosition }}
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'

const breakpoint = 768
const [mobileRotation, desktopRotation] = [-1.5708, 0]

Vue.directive('resize', {
  inserted: (el, binding) => {
    const onResizeCallback = binding.value
    window.addEventListener('resize', () => {
      const width = document.documentElement.clientWidth
      onResizeCallback({ width })
    })
    window.dispatchEvent(new Event('resize'))
  }
})

export default {
  name: 'MapEmbed',
  data () {
    return {
      debug: false,
      zoom: 15.25,
      center: [-71.056187, 42.358524],
      extent: [-71.076187, 42.348524, -71.036187, 42.368524],
      point: [38.726634, 9.003391],
      coordinates: [],
      locations: [],
      rotation: 0,
      geolocPosition: undefined
    }
  },
  async fetch () {
    this.locations = await this.$content('locations')
      .sortBy('order')
      .fetch()
  },
  computed: {
    ...mapGetters({
      lastLocation: 'locations/getLastLocation'
    }),
    lineCoordinates () {
      const coordinates = []

      this.locations.forEach((location) => {
        if (location.longitude && location.latitude) {
          coordinates.push([location.longitude, location.latitude])
        }
      })

      return coordinates
    }
  },
  methods: {
    setRotation ({ width }) {
      if (width >= breakpoint) {
        this.rotation = desktopRotation
      } else {
        this.rotation = mobileRotation
      }
    }
  }
}
</script>
