<template>
  <header class="sticky top-0 inset-x-0 z-50 bg-midnight text-pewter">
    <div class="container mx-auto px-5 py-5">
      <nuxt-link
        class="inline-block"
        to="/"
      >
        <nuxt-img class="h-10 w-auto xl:h-12" src="/brand-wordmark.svg" alt="Walk to the Sea" />
      </nuxt-link>
    </div>
    <div class="bg-cobalt text-base tracking-tighter xl:text-lg 2xl:text-xl">
      <nav class="flex flex-wrap justify-between lg:justify-center">
        <nuxt-link
          v-for="(location, index) in locations"
          :key="index"
          :to="location.slug"
          class="inline-block py-3 px-2 hover:underline xl:px-4"
          :class="(prevLocation && (location.slug === prevLocation.slug) || nextLocation && (location.slug === nextLocation.slug)) ? '' : 'hidden lg:block'"
        >
          {{ location.title }}
        </nuxt-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  data () {
    return {
      prevLocation: false,
      nextLocation: false,
      locations: []
    }
  },
  async fetch () {
    this.locations = await this.$content().sortBy('order').fetch()

    const slug = this.$route.params.slug
    const page = await this.$content(slug).fetch()

    const [prevLocation, nextLocation] = await this.$content().sortBy('order').surround(page.slug).fetch()

    this.prevLocation = prevLocation
    this.nextLocation = nextLocation
  }
}
</script>

<style lang="postcss" scoped>
.nuxt-link-active {
  @apply font-bold underline;
}
</style>
