<template>
  <div
    class="font-serif"
    :class="showSplash && 'h-screen overflow-hidden'"
  >
    <div v-if="page.hero" class="relative">
      <div
        class="absolute z-50 inset-0 w-full h-full flex justify-center items-center transition-opacity duration-1000 ease-in-out cursor-pointer"
        :class="!showSplash && 'opacity-0 pointer-events-none'"
        @click="showSplash = false"
      >
        <nuxt-img
          class="block m-auto w-3/4 max-w-3xl h-auto sm:w-1/2"
          src="/brand-logo.png"
          alt="Walk to the Sea logo"
          sizes="sm:100vw md:50vw lg:50vw xl:50vw 2xl:50vw"
        />
      </div>
      <nuxt-img
        v-if="page.hero.img"
        class="absolute object-cover object-center w-full h-full"
        sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
        :src="page.hero.img.src"
        :alt="page.hero.img.alt"
      />
      <div class="relative bg-midnight bg-opacity-40 text-white">
        <div
          class="relative container mx-auto px-5 pt-20 pb-14 min-h-screen flex flex-col items-stretch transition-opacity duration-1000 ease-in-out sm:pb-28 lg:flex-row lg:items-center xl:py-40"
          :class="showSplash && 'opacity-0 pointer-events-none'"
        >
          <nuxt-link
            to="/"
            class="absolute top-0"
          >
            <nuxt-img class="h-10 my-5 w-auto xl:h-18 xl:my-12" src="/brand-wordmark.svg" alt="Walk to the Sea wordmark" />
          </nuxt-link>
          <h1 v-if="page.hero.headline" class="text-2xl lg:text-4xl border-b border-pewter pb-8 mb-4 lg:w-2/3 lg:pb-0 lg:mb-0 lg:border-0 lg:pr-14 xl:text-5xl 2xl:pr-28 2xl:text-6xl">
            {{ page.hero.headline }}
          </h1>
          <div v-if="page.hero.intro" class="lg:w-1/3">
            <p v-if="page.hero.intro.paragraph" class="text-lg text-center leading-none mb-14 max-w-sm mx-auto lg:max-w-lg xl:text-3xl 2xl:text-4xl">
              {{ page.hero.intro.paragraph }}
            </p>
            <nav class="flex justify-center items-start 2xl:space-x-20">
              <nuxt-link to="/locations/">
                <icon-button
                  icon="/icon-map.svg"
                  icon-alt="Map icon"
                  :text="page.hero.intro.map_link"
                />
              </nuxt-link>
              <nuxt-link
                v-if="allLocations.length"
                :to="'/locations/' + allLocations[0].slug"
              >
                <icon-button
                  icon="/icon-pin.svg"
                  icon-alt="Map pin icon"
                  :text="page.hero.intro.first_location_link"
                />
              </nuxt-link>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <div v-if="page.body_paragraph" class="container mx-auto px-5 py-14 sm:py-28 xl:max-w-[68rem]">
      <p class="text-3xl leading-none xl:text-4xl">
        {{ page.body_paragraph }}
      </p>
    </div>

    <div
      v-if="page.locations"
      class="relative bg-midnight text-pewter"
    >
      <nuxt-img
        v-if="page.locations.img"
        class="block w-full h-auto bg-black aspect-square object-cover object-center md:absolute md:top-0 md:right-0 md:w-1/2 md:h-full"
        sizes="sm:100vw md:50vw lg:50vw xl:50vw 2xl:50vw"
        :src="page.locations.img.src"
        :alt="page.locations.img.alt"
      />
      <div class="container mx-auto px-5 py-14 sm:py-28">
        <div class="md:w-1/2 md:pr-8 lg:pr-14">
          <h2 v-if="page.locations.heading" class="text-base italic text-xl leading-none mb-4 max-w-[14rem] lg:mb-8 xl:text-3xl xl:max-w-md 2xl:text-4xl 2xl:max-w-lg">
            {{ page.locations.heading }}
          </h2>
          <ul
            v-if="allLocations.length"
            class="text-2xl tracking-tight xl:text-5xl 2xl:text-6xl"
          >
            <li
              v-for="(location, index) in allLocations"
              :key="'locations_' + index"
            >
              <nuxt-link
                :to="'/locations/' + location.slug"
                class="hover:underline"
              >
                {{ location.title }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <figure v-if="page.video" class="sm:container sm:mx-auto sm:px-5 sm:py-28 xl:max-w-[68rem]">
      <video v-if="page.video" controls class="w-full aspect-video bg-black cursor-pointer">
        <source :src="page.video.src">
      </video>
      <figcaption v-if="page.video.caption" class="font-sans mt-1 font-medium text-sm px-5 sm:px-0 lg:text-base">
        {{ page.video.caption }}
      </figcaption>
    </figure>

    <div v-if="page.accessibility" class="relative sm:bg-midnight sm:text-white">
      <div class="container mx-auto px-5 py-14 sm:py-28">
        <div class=" md:pl-8 lg:pl-14">
          <h2 v-if="page.accessibility.heading" class="text-base text-2xl leading-none mb-4 max-w-[10rem] lg:mb-8 xl:text-3xl xl:max-w-[14rem] 2xl:text-4xl 2xl:max-w-xs">
            {{ page.accessibility.heading }}
          </h2>
          <div v-if="page.accessibility.paragraph || page.accessibility.locations_intro" class="font-sans text-base leading-tight max-w-xs md:max-w-sm">
            <render-markdown class="mb-4" :source="page.accessibility.paragraph" />
            <p v-if="page.accessibility.locations_intro && allLocations.length" class="mb-4">
              {{ page.accessibility.locations_intro }}
            </p>
          </div>
        </div>
      </div>
      <nuxt-img
        v-if="page.accessibility.img"
        class="block w-full h-auto bg-black aspect-square object-cover object-center md:absolute md:top-0 md:left-0 md:w-1/2 md:h-full"
        sizes="sm:100vw md:50vw lg:50vw xl:50vw 2xl:50vw"
        :src="page.accessibility.img.src"
        :alt="page.accessibility.img.alt"
      />
    </div>

    <div v-if="page.footer_credit" class="bg-periwinkle">
      <div class="container mx-auto px-5 py-14 sm:py-28 xl:max-w-[68rem]">
        <p class="text-base leading-none max-w-[18rem] sm:text-3xl sm:max-w-[34rem] xl:max-w-[52rem] 2xl:text-4xl 2xl:max-w-[60rem]">
          <render-markdown class="mb-4" :source="page.footer_credit" />
        </p>
      </div>
    </div>

    <the-footer />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData ({ $content, params }) {
    const page = await $content('index')
      .fetch()

    const allLocations = await $content('locations')
      .sortBy('order')
      .fetch()
    const accessibleLocations = await $content('locations')
      .sortBy('order')
      .where({ accessible: true })
      .fetch()

    return { page, allLocations, accessibleLocations }
  },
  data () {
    return {
      showSplash: true
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
  },
  mounted () {
    setTimeout(() => {
      this.showSplash = false
    }, 2000)
  }
}
</script>
