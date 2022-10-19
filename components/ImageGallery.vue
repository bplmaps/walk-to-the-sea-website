<template>
  <div class="flex flex-wrap gap-4">
    <div
      v-for="(image, index) in images"
      :key="'image_' + index"
      :class="index === 0 ? 'w-full h-auto lg:mb-4' : 'w-auto'"
    >
      <image-gallery-image :image="image" :use-full="index === 0" />
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
