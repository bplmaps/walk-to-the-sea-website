<template>
  <div class="sticky top-0 inset-x-0 px-2 py-2 z-50 bg-cobalt text-white text-base tracking-tighter lg:px-0">
    <div class="w-full flex justify-between text-xs leading-none lg:hidden">
      <span v-if="prevLocation && locations[0]" class="inline-flex items-center mr-auto">
        <nuxt-img class="h-4 w-auto mr-1" src="/arrow-left.svg" alt="Left arrow" />
        Towards {{ locations[0].title }}
      </span>
      <span v-if="nextLocation && locations.slice(-1)[0]" class="inline-flex items-center ml-auto">
        Towards {{ locations.slice(-1)[0].title }}
        <nuxt-img class="h-4 w-auto ml-1" src="/arrow-right.svg" alt="Right arrow" />
      </span>
    </div>
    <nav class="flex flex-wrap justify-between lg:justify-center xl:text-lg 2xl:text-xl">
      <nuxt-link
        v-for="(location, index) in locations"
        :key="'location_nav_' + index"
        :to="'/locations/' + location.slug"
        class="inline-block hover:underline lg:mx-0 lg:px-2 xl:px-4"
        :class="locationClass(location)"
      >
        {{ location.title }}
      </nuxt-link>
    </nav>
  </div>
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
    this.locations = await this.$content('locations')
      .sortBy('order')
      .fetch()

    const slug = this.$route.params.slug
    const page = await this.$content('locations/' + slug)
      .fetch()

    const [prevLocation, nextLocation] = await this.$content('locations')
      .sortBy('order')
      .surround(page.slug)
      .fetch()

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
