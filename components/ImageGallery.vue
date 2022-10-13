<template>
  <div class="flex flex-wrap gap-4">
    <div
      v-for="(image, index) in images"
      :key="'image_' + index"
      :class="index === 0 ? 'w-full h-auto lg:mb-4' : 'w-auto'"
    >
      <img
        v-if="image.type === 'static-external'"
        :src="image.src"
        :class="index === 0 ? 'w-full h-auto' : 'h-24 w-auto sm:h-56'"
      >
      <nuxt-img
        v-if="image.type === 'static-local'"
        :src="image.src"
        :class="index === 0 ? 'w-full h-auto' : 'h-24 w-auto sm:h-56'"
      />
      <client-only>
        <div
          v-if="image.type === 'iiif'"
          class="relative aspect-video"
        >
          <open-seadragon
            :id="'image-viewer'"
            :options="{
              tileSources: [image.src],
              prefixUrl: '/openseadragon/',
              preserveViewport: true,
              visibilityRatio: 1,
              minZoomLevel: 1,
              defaultZoomLevel: 1,
              sequenceMode: true,
            }"
          />
        </div>
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageGallery',
  props: {
    images: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
