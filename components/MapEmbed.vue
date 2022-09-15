<template>
  <div/>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MapEmbed',
  computed: {
    ...mapGetters({
      lastLocation: 'locations/getLastLocation'
    })
  }
}
</script>
