<template>
  <div>
    <the-header />
    <locations-nav />
    <article class="container mx-auto px-5 py-14 sm:py-28">
      <header class="mb-4 md:w-3/4 lg:mb-8 lg:w-2/3">
        <h1 class="font-serif text-4xl leading-condensed text-cobalt mb-4 w-48 max-w-full lg:mb-8 xl:text-5xl xl:w-56 2xl:text-6xl 2xl:w-64">
          {{ page.title }}
        </h1>
        <p class="text-midnight text-3xl leading-none mb-4 lg:mb-8 xl:text-4xl">
          {{ page.description }}
        </p>
        <div class="flex flex-wrap gap-2">
          <inline-button text="Read more" href="#main" />
          <span
            v-if="page.latitude && page.longitude"
            @click="lightboxActive = true"
          >
            <inline-button text="Directions" :button="true" />
          </span>
          <inline-button v-if="page.resources" text="Resources" href="#resources" />
        </div>
      </header>
      <image-gallery :images="page.images" />
      <nuxt-content id="main" class="prose prose-midnight max-w-[52rem] mx-auto mt-14 sm:mt-28 2xl:max-w-[68rem]" :document="page" />
    </article>
    <div
      v-if="page.resources"
      id="resources"
      class="bg-periwinkle text-midnight"
    >
      <div class="container mx-auto px-5 py-14 sm:py-28">
        <div class="max-w-[52rem] mx-auto 2xl:max-w-[68rem]">
          <h2 class="font-serif text-4xl leading-condensed mb-4 w-48 max-w-full lg:mb-8 xl:text-5xl xl:w-56 2xl:text-6xl 2xl:w-64">
            Resources
          </h2>
          <ul class="flex flex-col items-stretch space-y-8">
            <template
              v-for="(resource, index) in page.resources"
            >
              <li
                v-if="resources[resource]"
                :key="'location_resource_' + index"
              >
                <h2 v-if="resources[resource].title" class="text-lg font-bold tracking-tight max-w-3xl xl:text-3xl">
                  {{ resources[resource].title }}
                </h2>
                <p v-if="resources[resource].description" class="text-base xl:text-xl">
                  {{ resources[resource].description }}
                </p>
                <inline-button v-if="resources[resource].link" :href="resources[resource].link" :target-blank="true" class="mt-4 lg:mt-6" text="Visit" />
              </li>
            </template>
          </ul>
        </div>
      </div>
    </div>
    <nuxt-link to="/locations/" class="fixed z-40 bottom-0 right-0 group inline-block m-5">
      <span class="flex justify-center items-center w-16 h-16 rounded-full overflow-hidden bg-cobalt bg-opacity-80 mx-auto mb-4 transition duration-150 group-hover:bg-opacity-100 xl:w-20 xl:h-20">
        <nuxt-img class="h-1/2 w-auto" src="/icon-map.svg" alt="Map icon" />
      </span>
      <span class="sr-only">
        Open map
      </span>
    </nuxt-link>

    <the-footer />

    <client-only>
      <div
        class="relative z-50"
        :class="lightboxActive ? 'block' : 'hidden'"
        role="dialog"
        aria-modal="true"
      >
        <div class="fixed inset-0 bg-white bg-opacity-95 transition-opacity" />

        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div class="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
            <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-full max-w-lg my-8">
              <button
                class="group absolute z-10 top-0 right-0 m-1"
                @click="lightboxActive = false"
              >
                <span class="flex justify-center items-center w-8 h-8 rounded-full overflow-hidden bg-cobalt text-4xl text-white font-thin bg-opacity-80 mx-auto mb-4 transition duration-150 group-hover:bg-opacity-100">
                  &times;
                </span>
                <span class="sr-only">
                  Close
                </span>
              </button>
              <div class="p-4 sm:p-6">
                <p class="text-midnight font-serif text-2xl mb-4 xl:text-4xl">
                  Select an option:
                </p>
                <div class="flex flex-col items-stretch flex-wrap gap-2 sm:flex-row sm:items-start">
                  <span class="w-full sm:w-auto" @click="lightboxActive = false">
                    <inline-button class-name="w-full sm:w-auto" v-if="page.latitude && page.longitude" text="Google Maps" :href="'https://www.google.com/maps/dir/?api=1&travelmode=walking&destination=' + page.latitude + ',' + page.longitude" :target-blank="true" />
                  </span>
                  <span class="w-full sm:w-auto sm:hidden" @click="lightboxActive = false">
                    <inline-button class-name="w-full sm:w-auto" v-if="page.latitude && page.longitude" text="Apple Maps" :href="'http://maps.apple.com/?dirflg=w&daddr=' + page.latitude + ',' + page.longitude" :target-blank="true" />
                  </span>
                  <nuxt-link class="w-full sm:w-auto" to="/locations/">
                    <inline-button class-name="w-full sm:w-auto" v-if="page.latitude && page.longitude" text="Show on WTTS Map" />
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'LocationsSlug',
  async asyncData ({ $content, params }) {
    const slug = params.slug
    const page = await $content('locations/' + slug)
      .fetch()

    const resources = {}

    if (page.resources) {
      const queriedResources = await $content('resources')
        .where({ slug: { $in: page.resources } })
        .fetch()

      queriedResources.forEach((resource) => {
        resources[resource.slug] = resource
      })
    }

    return {
      page,
      resources
    }
  },
  data () {
    return {
      lightboxActive: false
    }
  },
  head () {
    return {
      titleTemplate: this.page.title + ' -  %s',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.metaDescription
        },
        {
          hid: 'og-title',
          property: 'og:title',
          content: this.page.title
        },
        {
          hid: 'og-desc',
          name: 'og:description',
          content: this.page.metaDescription
        },
        {
          hid: 'twitter-desc',
          name: 'twitter:title',
          content: this.page.title
        },
        {
          hid: 'twitter-desc',
          name: 'twitter:description',
          content: this.page.metaDescription
        }
      ]
    }
  }
}
</script>
