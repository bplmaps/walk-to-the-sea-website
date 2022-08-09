<template>
  <button class="group text-center font-serif tracking-tight text-4xl w-44 max-w-full">
    <span class="flex justify-center items-center w-24 h-24 rounded-full overflow-hidden bg-cobalt bg-opacity-80 mx-auto mb-4 transition duration-150 group-hover:bg-opacity-100 xl:w-32 xl:h-32 2xl:w-48 2xl:h-48">
      <nuxt-img class="h-1/2 w-auto" :src="icon" :alt="iconAlt" :v-if="icon" />
    </span>
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'IconButton',
  props: {
    icon: {
      type: String,
      default: ''
    },
    iconAlt: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: 'Button Text'
    }
  }
}
</script>
