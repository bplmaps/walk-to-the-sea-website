<template>
  <button class="text-center font-serif tracking-tight text-4xl w-44 max-w-full">
    <span class="flex justify-center items-center w-24 h-24 rounded-full overflow-hidden bg-cobalt mx-auto mb-4 xl:w-32 xl:h-32 2xl:w-48 2xl:h-48" />
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'IconButton',
  props: {
    text: {
      type: String,
      default: 'Button Text'
    }
  }
}
</script>
