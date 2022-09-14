<template>
  <header class="bg-midnight text-pewter">
    <div class="container mx-auto px-5 py-5">
      <nuxt-link
        class="inline-block"
        to="/"
      >
        <nuxt-img class="h-10 w-auto xl:h-12" src="/brand-wordmark.svg" alt="Walk to the Sea" />
      </nuxt-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader'
}
</script>
