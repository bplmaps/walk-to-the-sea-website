<template>
  <div class="relative aspect-video">
    <vl-map
      class="absolute inset-0 w-full h-full"
      :load-tiles-while-animating="true"
      :load-tiles-while-interacting="true"
      data-projection="EPSG:4326"
    >
      <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation" />

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

      <vl-layer-tile id="osm">
        <vl-source-osm />
      </vl-layer-tile>
    </vl-map>
    <div class="p-5 bg-black text-white absolute bottom-0 right-0">
      Zoom: {{ zoom }}<br>
      Center: {{ center }}<br>
      Rotation: {{ rotation }}<br>
      My geolocation: {{ geolocPosition }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MapEmbed',
  data () {
    return {
      zoom: 15,
      center: [-71.0589, 42.3601],
      rotation: 0,
      geolocPosition: undefined
    }
  },
  computed: {
    ...mapGetters({
      lastLocation: 'locations/getLastLocation'
    })
  }
}
</script>
