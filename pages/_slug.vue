<template>
  <div>
    <nuxt-content class="prose" :document="page" />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const slug = params.slug
    const page = await $content(slug)
      .fetch()

    return {
      page
    }
  }
}
</script>
