<template>
  <div>
    <the-header />
    <map-embed />
  </div>
</template>

<script>
export default {
  name: 'LocationsIndex',
  async asyncData ({ $content, params }) {
    const page = await $content('locations')
      .fetch()

    return {
      page
    }
  }
}
</script>
