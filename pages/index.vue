<template>
  <div class="font-serif">
    <div class="relative">
      <nuxt-img class="absolute object-cover object-center w-full h-full" src="/hero-index.jpg" sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw" />
      <div class="relative bg-midnight bg-opacity-40 text-white">
        <div class="relative container mx-auto px-5 py-28 min-h-screen flex flex-col items-stretch lg:flex-row lg:items-center xl:py-40">
          <nuxt-link
            to="/"
            class="absolute top-0"
          >
            <nuxt-img class="h-10 my-5 w-auto xl:h-18 xl:my-12" src="/brand-wordmark.svg" alt="Walk to the Sea" />
          </nuxt-link>
          <h1 class="text-4xl border-b border-pewter pb-8 mb-4 lg:w-2/3 lg:pb-0 lg:mb-0 lg:border-0 lg:pr-14 xl:text-5xl 2xl:pr-28 2xl:text-6xl">
            The Walk to the Sea covers four centuries of Boston history.
            Beginning at the State House on Beacon Hill, overlooking the
            old Boston Common, the Walk passes historic monuments and
            skyscrapers.
          </h1>
          <div class="lg:w-1/3">
            <p class="text-lg text-center leading-none mb-14 max-w-sm mx-auto lg:max-w-lg xl:text-3xl 2xl:text-4xl">
              Start your journey by selecting a location below or using the map button:
            </p>
            <nav class="flex justify-center items-start 2xl:space-x-20">
              <icon-button icon="/icon-map.svg" icon-alt="Map icon" text="Explore Map" />
              <icon-button icon="/icon-pin.svg" icon-alt="Map pin icon" text="Head to the Water" />
            </nav>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-5 py-28 xl:max-w-[68rem]">
      <p class="text-3xl xl:text-4xl">
        The Walk crosses a terain that, centuries before, was not land at
        all, but an active port.  The history of Boston is linked to the Sea,
        whose smells and sounds once invaded the city.  The walk from the
        top to the sea, which stretches for a mile and descends a hundred
        feet, gives life to that story.
      </p>
    </div>

    <div
      v-if="allLocations.length"
      class="relative bg-midnight text-pewter"
    >
      <nuxt-img class="block w-full h-auto bg-black aspect-square object-cover object-center md:absolute md:top-0 md:right-0 md:w-1/2 md:h-full" src="/feature-index.jpg" sizes="sm:100vw md:50vw lg:50vw xl:50vw 2xl:50vw" />
      <div class="container mx-auto px-5 py-28">
        <div class="md:w-1/2 md:pr-8 lg:pr-14">
          <h2 class="text-base leading-none mb-4 max-w-[14rem] lg:mb-8 xl:text-3xl xl:max-w-md 2xl:text-4xl 2xl:max-w-lg">
            Start your journey by selecting one of the locations:
          </h2>
          <ul class="text-2xl tracking-tight xl:text-5xl 2xl:text-6xl">
            <li
              v-for="(location, index) in allLocations"
              :key="index"
            >
              <nuxt-link
                :to="location.slug"
                class="hover:underline"
              >
                {{ location.title }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <figure class="sm:container sm:mx-auto sm:px-5 sm:py-28 xl:max-w-[68rem]">
      <video class="w-full aspect-video bg-black cursor-pointer" />
      <figcaption class="font-sans mt-1 font-medium text-sm px-5 sm:px-0 lg:text-base">
        Watch Boston's Transformation
      </figcaption>
    </figure>

    <div class="relative sm:bg-midnight sm:text-white">
      <div class="container mx-auto px-5 py-28">
        <div class="md:w-1/2 md:ml-auto md:pl-8 lg:pl-14">
          <h2 class="text-base leading-none mb-4 max-w-[10rem] lg:mb-8 xl:text-3xl xl:max-w-[14rem] 2xl:text-4xl 2xl:max-w-xs">
            Accessibility and Route Planning
          </h2>
          <p class="font-sans text-base leading-tight mb-4 max-w-xs md:max-w-sm">
            The complete Walk to the Sea route is <strong>1.4 mi (2.25km)</strong>
            in length.  From its highest point at the origin in Beacon Hill to the
            lowest point at Long Wharf, the <strong>elevation loss is 220ft (67 m)</strong>.
            <template v-if="allLocations.length">
              The route is ADA accessible at the following locations:
            </template>
          </p>
          <ul
            v-if="accessibleLocations.length"
            class="text-lg tracking-tight xl:text-3xl 2xl:text-4xl"
          >
            <li
              v-for="(location, index) in accessibleLocations"
              :key="index"
            >
              <nuxt-link
                :to="location.slug"
                class="hover:underline"
              >
                {{ location.title }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <nuxt-img class="block w-full h-auto bg-black aspect-square object-cover object-center md:absolute md:top-0 md:left-0 md:w-1/2 md:h-full" src="/feature-index.jpg" sizes="sm:100vw md:50vw lg:50vw xl:50vw 2xl:50vw" />
    </div>

    <div class="bg-periwinkle">
      <div class="container mx-auto px-5 py-28 xl:max-w-[68rem]">
        <p class="text-base leading-none max-w-[18rem] sm:text-3xl sm:max-w-[34rem] xl:max-w-[52rem] 2xl:text-4xl 2xl:max-w-[60rem]">
          Walk to the Sea is a project of the Norman B. Leventhal Map and Education
          Center, with generous support from the Mapping Boston Foundation.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData ({ $content, params }) {
    const allLocations = await $content().sortBy('order').fetch()
    const accessibleLocations = await $content().sortBy('order').where({ accessible: true }).fetch()

    return { allLocations, accessibleLocations }
  },
  head: {
    title: 'Walk to the Sea',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'The Walk to the Sea covers four centuries of Boston history. Beginning at the State House on Beacon Hill, overlooking the old Boston Common, the Walk passes historic monuments and skyscrapers.'
      }
    ]
  }
}
</script>
