<template>
  <nav class="sticky top-0 inset-x-0 z-50 bg-cobalt text-white text-base tracking-tighter flex flex-wrap justify-between lg:justify-center xl:text-lg 2xl:text-xl">
    <nuxt-link
      v-for="(location, index) in locations"
      :key="index"
      :to="'/locations/' + location.slug"
      class="inline-block py-3 px-2 hover:underline lg:mx-0 xl:px-4"
      :class="locationClass(location)"
    >
      {{ location.title }}
    </nuxt-link>
  </nav>
</template>

<script>
export default {
  name: 'LocationsNav',
  data () {
    return {
      className: '',
      prevLocation: false,
      nextLocation: false,
      locations: []
    }
  },
  async fetch () {
    this.locations = await this.$content('locations').sortBy('order').fetch()

    const slug = this.$route.params.slug
    const page = await this.$content('locations/' + slug).fetch()

    const [prevLocation, nextLocation] = await this.$content('locations').sortBy('order').surround(page.slug).fetch()

    this.prevLocation = prevLocation
    this.nextLocation = nextLocation
  },
  methods: {
    locationClass (location) {
      const classes = []

      if (this.prevLocation && (location.slug === this.prevLocation.slug)) {
        classes.push('mr-auto')
      } else if (this.nextLocation && (location.slug === this.nextLocation.slug)) {
        classes.push('ml-auto')
      } else {
        classes.push('hidden')
        classes.push('lg:block')
      }

      return classes.join(' ')
    }
  }
}
</script>

<style lang="postcss" scoped>
.nuxt-link-active {
  @apply font-bold underline;
}
</style>
