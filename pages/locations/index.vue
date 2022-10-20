<template>
  <div class="flex flex-col h-screen items-stretch">
    <the-header />
    <div class="relative z-10 flex-grow w-full min-h-[400px]">
      <client-only>
        <map-embed />
      </client-only>
    </div>
    <div class="relative z-20 flex-shrink-0 w-full">
      <the-footer />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LocationsIndex',
  async asyncData ({ $content, params }) {
    const page = await $content('locations-index')
      .fetch()

    return {
      page
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
