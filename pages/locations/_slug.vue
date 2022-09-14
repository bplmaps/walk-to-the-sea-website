<template>
  <div>
    <locations-nav />
    <article class="container mx-auto px-5 py-14">
      <header class="md:w-3/4 lg:w-2/3 xl:w-1/2">
        <h1 class="font-serif text-4xl leading-condensed text-cobalt mb-4 w-48 max-w-full lg:mb-8 xl:text-5xl xl:w-56 2xl:text-6xl 2xl:w-64">
          {{ page.title }}
        </h1>
        <p class="text-3xl leading-none mb-4 lg:mb-8 xl:text-4xl">
          {{ page.description }}
        </p>
        <div class="flex flex-wrap space-x-2">
          <a href="#main">
            <inline-button text="Read more" />
          </a>
          <a
            v-if="page.latitude && page.longitude"
            :href="'geo:' + page.latitude + ',' + page.longitude"
          >
            <inline-button text="Directions" />
          </a>
          <a href="#resources">
            <inline-button text="Resources" />
          </a>
        </div>
      </header>
      <nuxt-content id="main" class="prose max-w-[52rem] mx-auto py-14 sm:py-28 2xl:max-w-[68rem]" :document="page" />
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
                :key="index"
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
    <button class="fixed z-40 bottom-0 right-0 group inline-block m-5">
      <span class="flex justify-center items-center w-16 h-16 rounded-full overflow-hidden bg-cobalt bg-opacity-80 mx-auto mb-4 transition duration-150 group-hover:bg-opacity-100 xl:w-20 xl:h-20">
        <nuxt-img class="h-1/2 w-auto" src="/icon-map.svg" alt="Map icon" />
      </span>
      <span class="sr-only">
        Open map
      </span>
    </button>
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
  }
}
</script>
