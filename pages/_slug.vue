<template>
  <div>
    <nuxt-content :document="page" />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const slug = params.slug || 'index'
    const page = await $content(slug)
      .fetch()

    return {
      page
    }
  }
}
</script>
